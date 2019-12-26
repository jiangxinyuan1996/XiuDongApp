<template>
   <div class="list">
       <search>
           <div class="cancel" slot="list" @click="handleClick">取消</div>
       </search>
        <div class="hot">
        <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        infinite-scroll-immediate-check="false">
            <li v-for="data in datalist" :key="data.activityId" @click="handleDump(data.sequence)">
                <img :src="data.avatar" alt="">
                <div class="info">
                    <p class="info-title">{{data.title}}</p>
                    <p class="detail">
                        <span>{{data.showTime}}</span><br>
                        <span>{{data.city+' '}}{{data.siteName}}</span>
                    </p>
                    <p class="tag">
                        <span v-for="(tag,index) in data.styles" :key="index">{{tag}}</span>
                    </p>
                    <p class="price">{{data.activityPrice}}</p>
                </div>
            </li>
        </ul>
    </div>
    <mmenu></mmenu>
   </div>
</template>
<script>
import search from '@/components/Search'
import mmenu from '@/components/menu'
import Axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      current: 1
    }
  },
  mounted () {
    this.$store.commit('hide')
    Axios({
      url: 'https://wap.showstart.com/api/wap/activity/list.json?pageNo=1&cityCode=' + localStorage.getItem('cityCode') + '&keyword=' + (this.$route.params.mytext == undefined ? '' : this.$route.params.mytext) + '&style=' + this.$route.params.mykey + '&tag=&tagType=&activityIds=&couponCode=&performerId=&hosterId=&siteId=&st_flpv=1576809269040S1syPCjA1f9B8iX6P6Vo&sign=&trackPath=&terminal=wap'
    }).then(res => {
      this.datalist = res.data.result.activityList
    })
  },
  beforeDestroy () {
    this.$store.commit('show')
  },
  methods: {
    handleClick () {
      this.$router.push('/search')
    },
    handleDump (id) {
      this.$router.push('/activity/' + id)
    },
    loadMore () {
      this.current++
      Axios({
        url: 'https://wap.showstart.com/api/wap/activity/list.json?pageNo=' + this.current + '&cityCode=' + localStorage.getItem('cityCode') + '&keyword=' + (this.$route.params.mytext == undefined ? '' : this.$route.params.mytext) + '&style=' + this.$route.params.mykey + '&tag=&tagType=&activityIds=&couponCode=&performerId=&hosterId=&siteId=&st_flpv=1576809269040S1syPCjA1f9B8iX6P6Vo&sign=&trackPath=&terminal=wap'
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.result.activityList]
      })
    }
  },
  components: {
    search,
    mmenu
  }
}
</script>
<style lang="scss" scoped>
li{
    list-style: none;
}
.list{
    padding-left: .2rem;
    .cancel{
        font-size: .16rem;
        width: .7rem;
        height:.3rem;
        text-align: center;
        line-height: .3rem;
    }
    .hot{
        margin-top:.25rem;
            .title{
                font-size:.18rem;
                margin:30px 20px;
                margin-top:0;
            }
                li{
                    width: 100%;
                    font-size: 0.16rem;
                    height: 1.43rem;
                    margin-bottom: 0.3rem;
                    img{
                        width: 1.07rem;
                        height: 100%;
                        border-radius: 0.06rem;
                        margin-right: 0.18rem;
                        float: left;
                    }
                    .info{
                        width:2.08rem;
                        display: flex;
                        font-size:.16rem;
                        height: 100%;
                        flex-direction: column;
                        float: left;
                        .info-title{
                            width: 100%;
                            font-size: 16px;
                            overflow: hidden;
                            -o-text-overflow: ellipsis;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            height: 40px;
                            line-height: 20px;
                        }
                        .detail{
                            flex: 3;
                            span{
                                font-size: .11rem;
                                color: #aaaaaa;
                            }
                        }
                        .tag{
                            flex:2;
                            display: flex;
                            align-items: center;
                            span{
                                    background: #f8f8f8;
                                    border-radius: 50px;
                                    font-size: 10px;
                                    color: #bbb;
                                    height: 20px;
                                    line-height: 20px;
                                    padding: 0 10px;
                                    margin: 5px 5px 0 0;
                            }
                        }
                        .price{
                            display:flex;
                            flex: 2;
                            align-items:flex-end;
                            span{
                                font-size: .11rem;
                            }
                        }
                    }
                }
            }
}

</style>
