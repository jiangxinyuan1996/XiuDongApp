<template>
    <div class="hot">
        <p class="title">热门演出</p>
        <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        infinite-scroll-immediate-check="false">
            <li v-for="data in datalist" :key="data.activityId" @click="handleClick(data.sequence)">
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
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      current: 1
    }
  },
  mounted () {
    Axios({
      url: `https://wap.showstart.com/api/wap/activity/list.json?pageNo=1&cityCode=${localStorage.getItem('cityCode')}&showTime=7&st_flpv=1576809269040S1syPCjA1f9B8iX6P6Vo&sign=&trackPath=&terminal=wap`
    }).then(res => {
      this.datalist = res.data.result.activityList
    })
  },
  methods: {
    handleClick (id) {
      this.$router.push('/activity/' + id)
    },
    loadMore () {
      this.current++
      if (this.current === 20) {
        return
      }
      Axios({
        url: `https://wap.showstart.com/api/wap/activity/list.json?pageNo=${this.current}&cityCode=21&showTime=7&st_flpv=1576809269040S1syPCjA1f9B8iX6P6Vo&sign=&trackPath=&terminal=wap`
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.result.activityList]
      })
    }
  }
}
</script>
// <style lang="scss" scoped>
    .hot{
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
                    padding: 0 .2rem;
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
</style>
