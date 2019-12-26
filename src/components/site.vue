<template>
  <div>
    <div id="wrap" v-if="datalist">
      <div class="img">
        <div>
          <img :src="datalist.poster" alt />
        </div>
        <div>
          <img :src="datalist.avatar" alt />
        </div>
      </div>
      <!--  标题-->
      <p class="name">{{datalist.name}}</p>
      <p class="table">{{datalist.remark?datalist.remark:'平台入驻厂牌'}}</p>
      <div class="hot">
        <div>
          {{datalist.popularity}}
          <span>热度</span>
        </div>
        <div>
          {{datalist.fansNum}}
          <span>粉丝</span>
        </div>
      </div>
      <!-- tabbar -->
    </div>
      <slot></slot>

      <!-- 演出 -->
         <ul
      class="artist"
      num='0'
      v-if="this.isactive==0?'true':''"
      v-infinite-scroll="artist"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check="false"
    >
      <li v-for="data in activityList" :key="data.activityId" @click="handleClick(data.sequence)">
        <img :src="data.avatar" alt />
        <div class="info">
          <p class="info-title">{{data.title}}</p>
          <p class="detail">
            <span>{{data.showTime}}</span>
            <br />
            <span>{{data.city+' '}}{{data.siteName}}</span>
          </p>
          <p class="tag">
            <span v-for="(tag,index) in data.styles" :key="index">{{tag}}</span>
          </p>
          <p class="price">{{data.activityPrice}}</p>
        </div>
      </li>
    </ul>
    <!-- 相册 -->
    <div >
    <ul
    num='1'
    v-show="this.isactive==1?'true':''"
      class="photo"
      v-if="photolist.length"
      v-infinite-scroll="photo"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check="false">
      <li v-for="data in photolist" :key="data.id">
        <img :src="data.photo" alt />
      </li>
    </ul>
    <ul v-if="!photolist.length && this.isactive==1?'true':''" class="photonone">
      <li>没有相关相册或视频</li>
    </ul>
    </div>
    <!-- 艺人 -->
    <ul class="performer"
    num='2'
    v-show="this.isactive==2?'true':''"
    v-if="performerList.length">
      <li v-for="data in performerList" :key="data.id">
        <div>
          <img :src="data.avatar" alt />
        </div>
        <p>{{data.name}}</p>
      </li>
    </ul>
     <ul v-if="!performerList.length && this.isactive==2?'true':''" class="performernone">
      <li>没有相关艺人</li>
    </ul>
    <!-- 详情 -->
    <div class="description" v-if="this.isactive==3?'true':''"
    num='3'>
      <h3>公告</h3>
      <p v-if="descriptionlist">{{descriptionlist.notice?descriptionlist.notice:'暂无公告'}}</p>
      <h3>简介</h3>
      <p v-if="descriptionlist">{{descriptionlist.description?descriptionlist.description:'暂无简介'}}</p>
      <div>资质许可</div>
      <div>入驻秀动</div>

    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { InfiniteScroll } from 'mint-ui'
import Vue from 'vue'
Vue.use(InfiniteScroll)

export default {
  props: ['isactive'],

  data () {
    return {
      loading: false,
      num: '0',
      current: 1,
      photonum: 1,
      isshow: false,
      photolist: [],
      performerList: [],
      descriptionlist: null,
      datalist: null,
      activityList: []
    }
  },
  mounted () {
    console.log(this.$route.params)
    axios
      .post(
        `/api/wap/${this.$route.params.myname}/info.json`,
        `${this.$route.params.myname}Id=${this.$route.params.id}&st_flpv=1576809246743lc4Rm4MG296HhsPTPatz&sign=&trackPath=&terminal=wap`
      )
      .then(res => {
        // console.log(res.data.result);
        this.datalist = res.data.result
      })
    axios({
      url:
        `https://wap.showstart.com/api/wap/activity/list.json?${this.$route.params.myname}Id=${this.$route.params.id}${this.$route.params.name == 'brand' ? `&hosterId=${this.$route.params.id}` : ''}&pageNo=1&st_flpv=1576809246743lc4Rm4MG296HhsPTPatz&sign=&trackPath=&terminal=wap`
    }).then(res => {
      this.activityList = res.data.result.activityList
    })
    // 相册
    axios
      .post(
        '/api/wap/media/albums.json',
        `pageNo=1&performerIds=${this.$route.params.id}&st_flpv=1576809246743lc4Rm4MG296HhsPTPatz&sign=&trackPath=&terminal=wap`
      )
      .then(res => {
        // console.log(res.data.result);
        this.photolist = res.data.result
      })
    // 艺人
    axios({
      // id不会对 试用
      url:
        `https://wap.showstart.com/api/wap/${this.$route.params.myname}/detail.json?${this.$route.params.myname}Id=${this.$route.params.id}&st_flpv=1576809246743lc4Rm4MG296HhsPTPatz&sign=&trackPath=&terminal=wap`
    }).then(res => {
      this.performerList = res.data.result.performerList
      console.log(res.data.result.performerList)
    })
    // 详情
    axios({
      url: `https://wap.showstart.com/api/wap/${this.$route.params.myname}/detail.json?${this.$route.params.myname}Id=${this.$route.params.id}&st_flpv=1576809246743lc4Rm4MG296HhsPTPatz&sign=&trackPath=&terminal=wap`

    }).then(res => {
      console.log(res.data.result)
      this.descriptionlist = res.data.result
    })
  },
  methods: {
    // 演出详情
    handleClick (id) {
      this.$router.push('/activity/' + id)
    },
    // 演出---------
    artist () {
      this.current++
      this.loading = true

      if (this.current > 18) {
        return
      }
      axios({
        url: `https://wap.showstart.com/api/wap/activity/list.json?${this.$route.params.myname}Id=${this.$route.params.id}&hosterId=${this.$route.params.id}&pageNo=${this.current}&st_flpv=1576809246743lc4Rm4MG296HhsPTPatz&sign=&trackPath=&terminal=wap`
      }).then(res => {
        this.activityList = [
          ...this.activityList,
          ...res.data.result.activityList
        ]
        this.loading = false
      })
    },
    // 相册---------
    photo () {
      this.photonum++
      this.loading = true
      if (this.photonum > 3) {
        return
      }
      axios
        .post(
          '/api/wap/media/albums.json',
          `pageNo=${this.photonum}&performerIds=36647&st_flpv=1576809246743lc4Rm4MG296HhsPTPatz&sign=&trackPath=&terminal=wap`
        )
        .then(res => {
          this.photolist = [...this.photolist, ...res.data.result]
          this.loading = false
        })
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
img {
  display: block;
}
.img {
  position: relative;

  :nth-child(1) img {
    width: 100%;
    height: 1.9rem;
  }
  :nth-child(2) {
    // overflow:hidden;
    position: absolute;
    width: 50px;
    height: 50px;
    left: 50%;
    margin-left: -25px;
    top: 50%;
    margin-top: -25px;
    padding: 2px;
    background: #fff;
    border-radius: 8px;
    img {
    border-radius: 8px;

      width: 0.5rem;
      height: 0.5rem;
    }
  }
}
.name {
  margin-top: 0.25rem;
  font-size: 0.2rem;
  text-align: center;
}
.table {
  padding:0 0.2rem;
  margin-top: 0.2rem;
  text-align: center;
  font-size: 0.12rem;
  color: #999999;
}
.hot {
  display: flex;
  justify-content: center;
  font-size: 0.14rem;
  margin-top: 0.15rem;
  div {
    // display: inline-block;
    text-align: center;
    display: inline-block;
    min-width: 30%;
    max-width: 49%;
  }
  :nth-child(1) {
    border-right: 0.005rem #ebebeb solid;
  }
  span {
    color: #999999;
  }

}
ul,li{
    list-style: none;
}
.tabbar{
    height:0.5rem;
    margin-top:0.2rem;
 font-size: 0.16rem;
 display: flex;
 align-items: center;
 color:#999999;
 justify-content: space-around;
 border-bottom: 0.01rem solid #ebebeb;
    li{
    box-sizing: border-box;
        height:0.5rem;
        line-height:0.5rem;
    }
}
.active{
    color:#333333;
    border-bottom:0.02rem #eb484a solid;
}
ul,
li {
  list-style: none;
}
.artist {
  font-size: 0.16rem;
  margin: 0.3rem 0.2rem;
  margin-top: 0.3rem;
  li {
    width: 100%;
    font-size: 0.16rem;
    height: 1.43rem;
    margin-bottom: 0.3rem;
  }

  img {
    width: 1.07rem;
    height: 100%;
    border-radius: 0.06rem;
    margin-right: 0.18rem;
    float: left;
  }
  .info {
    width: 2.08rem;
    display: flex;
    font-size: 0.16rem;
    height: 100%;
    flex-direction: column;
    float: left;
    .info-title {
      width: 100%;
      font-size: 0.16rem;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      height: 0.4rem;
      line-height: 0.2rem;
    }
    .detail {
      flex: 3;
      span {
        font-size: 0.11rem;
        color: #aaaaaa;
      }
    }
    .tag {
      flex: 2;
      display: flex;
      align-items: center;
      span {
        background: #f8f8f8;
        border-radius: 0.5rem;
        font-size: 0.1rem;
        color: #bbb;
        height: 0.2rem;
        line-height: 0.2rem;
        padding: 0 0.1rem;
        margin: 0.05rem 0.05rem 0 0;
      }
    }
    .price {
      display: flex;
      flex: 2;
      align-items: flex-end;
      span {
        font-size: 0.11rem;
      }
    }
  }
}
.photo {
  //   width: 100%;
   &:after {
    content: "";
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
  padding: 0.2rem;

  li {
    padding-bottom: 0.2rem;
  }
  :nth-child(2n-1) {
    float: left;
  }
  :nth-child(2n) {
    float: right;
  }
  img {
    display: block;
    width: 1.6rem;
    height: 1.6rem;
  }
}
.photonone{
padding:0.2rem;
height:2.4rem;
display:flex;
justify-content: center;
align-items: flex-end;
  li{
    text-align: center;
    color: #999;
    font-size: 0.15rem;
  }
}
.performer {
  &:after {
    content: "";
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
  font-size: 0.14rem;
  padding: 0.2rem;
  :nth-child(2n-1) {
    float: left;
  }
  :nth-child(2n) {
    float: right;
  }
  li {
    text-align: center;
    width: 47%;
    height: auto;
    margin-bottom: 0.25rem;
    display: flex;
    background: #f8f8f8;
    padding: 0.15rem 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      height: 0.94rem;
      border: 4px #fff solid;
      border-radius: 8px;
      overflow: hidden;
      width: 0.94rem;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    p {
      margin-top: 0.1rem;
      text-align: center;
      font-size: 0.14rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding: 0 0.1rem;
    }
  }
}
.performernone{
  padding:0.2rem;
height:2.4rem;
display:flex;
justify-content: center;
align-items: flex-end;
  li{
    text-align: center;
    color: #999;
    font-size: 0.15rem;
  }
}
.description{
  padding:0 0.2rem 0;
h3{
  margin-top:0.2rem;
  font-size:0.2rem;
  font-weight:normal;
}
p{
      color: #999;
    font-size:0.13rem;
    line-height: 0.22rem;
    margin-top:0.15rem;
}

div{
  &:nth-of-type(1){
    margin-top:0.3rem;
 }
      height: 50px;
    line-height: 50px;
    position: relative;
    border-top: 0.5px #ebebeb solid;
    font-size: 14px;
    color: #999;
}
}

</style>
