<template>
  <div id="wrap">
    <ul v-if="datalist.length"
      v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10"
   infinite-scroll-immediate-check='false'>
      <li v-for="(data,index) in datalist" :key="index" @click="handleclick(data.id)">
        <img :src="data.poster" alt />
        <div class="wrap">
          <div class="title">{{data.title}}</div>

          <div class="top">
            <div class="left">
              <div class="raise">预售</div>
              <div>{{data.raiseTypeView}}</div>
            </div>

            <div class="percent">{{data.percent+'%'}}</div>
          </div>

          <div class="lang">
            <b :style="{'width':data.percent+'%'}"></b>

          </div>
          <div class="bottom">
            <span>
              <i>{{'￥'+data.hadRaisedMoneny}}</i> 已筹
            </span>
            <span>
              <i>{{data.supportNum}}</i> 支持
            </span>
            <span>
              <i>{{data.leftDay}}</i> 剩余天数
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
import { Indicator } from 'mint-ui'

// import { InfiniteScroll } from 'mint-ui'

export default {
  data () {
    return {
      datalist: [],
      loading: false,
      current: 1
    }
  },
  mounted () {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
  },
  methods: {
    loadMore () {
      // console.log(this.loading,1111)
      this.current++
      if (this.current === 20) {
        return
      }
      axios({
        url:
          `https://wap.showstart.com/api/wap/raise/list.json?pageNo=${this.current}&st_flpv=1576809246743lc4Rm4MG296HhsPTPatz&sign=&trackPath=&terminal=wap`
      }).then(res => {
        // console.log(res.data.result)
        this.datalist = [...this.datalist, ...res.data.result]
        //   console.log(this.width)
      })
      // this.$store.dispatch("now")
    },
    handleclick (id) {
      // console.log(this.$router)
      this.$router.push(`/raisedetail/${id}`)
    },
    qin () {
      axios({
        url:
          'https://wap.showstart.com/api/wap/raise/list.json?pageNo=1&st_flpv=1576809246743lc4Rm4MG296HhsPTPatz&sign=&trackPath=&terminal=wap'
      }).then(res => {
        Indicator.close()

        this.datalist = res.data.result
      })
    }
  },
  created () {
    this.qin()
  }
}
</script>
<style lang='scss' scoped>
* {
  padding: 0;
  margin: 0;
}
ul,
li {
  list-style: none;
}
ul {
  margin-bottom: 0.5rem;
}
img {
  width: 100%;
  display: block;
}
.title {
  font-size: 0.16rem;
}
span {
  font-size: 0.12rem;
  color: #999999;
}
i {
  font-style: normal;
  font-size: 0.16rem;
  color: black;
}
.wrap {
  padding: 0.2rem;
  .top {
    margin-top: 0.15rem;
    display: flex;
    justify-content: space-between;
    .left {
      font-size: 0.12rem;
      display: inline;
      div {
        float: left;
        color: #999999;
      }
      .raise {
        border-radius: 0.03rem;
        border: 1px solid #eb484a;
        padding: 0 0.1rem;
        color: #eb484a;
        margin-right: 0.1rem;
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    span {
      margin: 0;
    }
  }
}
.lang {
  height: 0.04rem;
  background: #f8f8f8;
  margin: 0.17rem 0 0.15rem;
  overflow: hidden;
//   border-radius: 0.01rem

  b{
    display: block;
    height: 100%;
    // width:48%;
    background: #eb484a;
  }
}
.percent {
  color: #eb484a;
  font-size: 0.12rem;
}
</style>
