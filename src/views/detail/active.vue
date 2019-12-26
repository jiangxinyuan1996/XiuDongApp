<template>
    <div id="activity">
        <div v-if="datalist" class="activity_banner" :style="{'background':'-webkit-linear-gradient(top, rgba(255, 255, 255, 0.8) 20%, rgb(255, 255, 255)), url(&quot;'+ datalist.avatar + '?imageMogr2/thumbnail/!450x600r/gravity/Center/crop/!450x600&quot;) center center'}">
            <div>
                <img :src="datalist.avatar" alt="">
            </div>
        </div>
        <div v-if="datalist" class="info">
            <h3>{{datalist.activityName}}</h3>
            <p>{{datalist.price}}</p>
            <div class="info-0">
                <span><img src="" alt="">{{datalist.tags}}</span>
                <span><img src="" alt="">{{datalist.showTime}}</span>
                <span><img src="" alt="">{{local+' '}}{{datalist.siteName}}</span>
            </div>
            <div class="info-1">
            <swiper v-if="datalist.userInfos" :options="{
            loop:false,
            pagination:{},
            slidesPerView: 4,
            spaceBetween: 20,
            freeMode:true,
            width:365
        }" class="activity" swipername="activity">
                <div v-for="data in datalist.userInfos" :key="data.id" class="swiper-slide"  @click="handleDump(dumplist[data.activityRoleType],data.id,namelist[data.activityRoleType])">
                    <img :src="data.avatar" alt="">
                    <span>{{data.name}}</span>
                    <p>{{userType[data.activityRoleType]}}</p>
                </div>
            </swiper>
            </div>
            <div class="info-2">
                <span>客服咨询</span>
                <span>场地位置</span>
            </div>
        </div>
        <div  class="activity_detail">
            <div v-if="datalist">
                <p v-if="datalist.album.length">演出相冊</p>
                <swiper v-if="datalist.album.length" :options="{
                    loop:false,
                    pagination:{},
                    slidesPerView: 3,
                    spaceBetween: 20,
                    freeMode:true,
                    width:400
                }" class="photo" swipername="photo">
                    <div class="images swiper-slide"  v-for="(data,index) in datalist.album" :key="index">
                        <img :src="data" alt="">
                    </div>
                </swiper>
            </div>
            <p v-if="datalist">演出详情</p>
            <div class="info-3" v-if="datalist" v-html="datalist.document"></div>
        </div>
         <div class="down">
                <div class="down_left" @click="handleclick">
                    <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAMAAACdUboEAAAAflBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCtoPsAAAAKXRSTlMA1aoqVYDz+jEJ7Fq5oLJo4I0WS3DahkY/Jua+lVI5HgV7dcSoymAQGuF45+AAAALASURBVFjD7ZfZsqJADIaDCDS7LOICoqIe7fd/wTlp96TbKsGLqRm/G6gEYqfzh7Tw5cv/w3Ftt61Y5PAhGk9ecK1RKeAVi7B0qm06W8MravnEMjMFLWL3/tQ+PYIJS1LqOXB+puQpLwp90DKRnIimlUdSgwNagl9XMpsV4zKLbmm5P/DIfPmwtvttCFrwiQou2M41uQbulJcoVlcsfMhF4RwksgAtuK4M7swOUpH4t5JIxehxexMsD5izbp4s4+Ac8ioZV+1DyN7ag7kyMalD/ZC4b6mEnzMUaEsNETHJmtg2sURUeTK8C07whPLbhoj7X9+EWWOV6RrgiDl7RKEnD5cNBip8g2l1EyldAmzxuiXe7JyBgRC9M2bOVXnmPl4C8oO2i3ltwMBJKkEyxmjfpZreOCrNloAYiz0Fzk71OO4J+c4l6ltB1s02peX2mSoOSlvT4h55gWtrBJxrQ5a8xbkW+fdMcPtWnklvNdiscIGkJUzV3nG7LS+4SdaFRVrtl/JMQ+qsX2Sna3kGaXEThdprrslEUkiLE1jPCa4CjkUWaMCfqJB0lSVaD6JLJpd0dxUvoAE7UImTPljdPpP+QrT2Cd6hdSWys5nGY+jJ/FLYkSAVa6Av9nXMTp25/yDUCnrjx/cJOo3irHKicw8OoLAkJ4VBhDzmDwxENOTYsoLhrMNsZC1dT7rkKDKcnOzjcHw6B4fjDdKj+QTzSQ7qFPBJRuow0odNuxrrwDZ0tZ5V+3LUpIF8nyAFI5HshXmHO9mXztAYnuyLl5vnfyxsLSjIWucQMel5ehbx4Q6d2JN3O9RBFyAm5xF00IOlOSKfr/NPRlyoSTMwIv9H1gyMyEvTfTTieufG/tCInH8wYtpvKK/Mc1JIZGq9x1QiwiSQviSmOR/IfgS5UXO17EO9BjNFth+9xz4r4MuXL38VfwCHHcvpgFb1QgAAAABJRU5ErkJggg=="
                    alt/>
                演出
            </div>
            <div v-if="datalist" class="down_right" @click="suppertclick" >{{datalist.activityLevelName}}</div>
            </div>
        <mmenu></mmenu>
    </div>
</template>
<script>
import Axios from 'axios'
import swiper from '@/components/Swiper'
import mmenu from '@/components/menu'
export default {
  data () {
    return {
      dumplist: ['0', '1', '/artist/', '/site/', '4', '/brand/'],
      namelist: ['0', '1', 'performer', 'site', '4', 'brand'],
      datalist: null,
      local: localStorage.getItem('cityName'),
      userType: ['0', '1', '音乐人', '场地', '4', '主办方']
      // imgUri:'https://s2.showstart.com/img/2019/20191011/44d289b01a864f4da9397cdc77bddcdf_600_800_112272.0x0.jpg?imageMogr2/thumbnail/!450x600r/gravity/Center/crop/!450x600'
    }
  },
  mounted () {
    this.$store.commit('hide')
    Axios.post('/api/wap/activity/details.json', 'activityId=' + this.$route.params.activityid + '&coupon=&st_flpv=1576809269040S1syPCjA1f9B8iX6P6Vo&sign=&trackPath=&terminal=wap').then(res => {
      this.datalist = res.data.result.activityVo
      // console.log(res.data.result.activityVo.album)
    })
  },
  beforeDestroy () {
    this.$store.commit('show')
  },
  methods: {
    handleDump (link, id, name) {
      this.$router.push({ name: name, params: { id, myname: name } })
    },
    handleclick () {
      this.$router.push('/')
    },
    suppertclick () {
      this.$router.push('/center')
    }
  },
  components: {
    swiper,
    mmenu
  }
}
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding:0;
}
.activity_banner{
    width: 100%;
    height: 2.6rem;
    position: relative;
    div{
        width: 1.5rem;
        height: 2rem;
        position: absolute;
        top:0;
        bottom:0;
        left: 0;
        right:0;
        margin: auto auto;
        img{
            width:100%;
        }
    }
}
.info{
    width: 100%;
    box-sizing: border-box;
    padding: 0 .2rem;
    h3{
        font-size: 0.18rem;
        font-weight: normal;
    }
    p{
        font-size:.19rem;
        color:#eb484a;
    }
    .info-0{
        border-top: 0.5px #ebebeb solid;
        border-bottom: 0.5px #ebebeb solid;
        margin-top: 20px;
        color: #999;
        font-size: 12px;
        padding: 10px 0 20px 0;
        span{
            display:block;
            margin: 10px 0 0;
        }
    }
    .info-1{
        width: 100%;
        height:1.5rem;
        font-size: .12rem;
        span{
            display: inline-block;
            text-align: center;
            overflow: hidden;
            width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        p{
            color: #999999;
            font-size:.12rem;
            text-align: center;
        }
    }
    .info-2{
        width: 100%;
        height:.3rem;
        border-top:.5px solid #ebebeb;
        margin-top:.2rem;
        padding: .1rem 0;
        display: flex;
        span{
            flex: 1;
            height:.3rem;
            line-height: .3rem;
            text-decoration:none;
            font-size: .14rem;
            color: #999999;
            text-align: center;
            &:nth-of-type(1){
                border-right:.5px solid #ebebeb;
            }
        }
    }
    .info-3{
        border-top:.7rem #f8f8f8 solid;
        padding: 0 .2rem 1rem .2rem;
        width: 100%;
    }
}
.activity_detail{
    border-top: .07rem #f8f8f8 solid;
    padding: 0 .2rem 1rem .2rem;
    .images{
        width: 100%;
        height: 1.35rem;
        margin-right: -.2rem;
    }
    p{
        font-size: .18rem;
        padding: .15rem 0;
    }
}
.down {
  position: fixed;
  bottom: 0;
  background: white;
  width: 100%;
  height: 0.5rem;
  display: flex;
  z-index:100;
  .down_left {
    flex: 2;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    text-align: center;
    height: 0.49rem;
    background:white;
    border-top: 0.005rem #ebebeb solid;
    img {
      width: 0.18rem;
      height: 0.18rem;
    }
  }
  .down_right {
    flex: 3;
    font-size: 0.16rem;
    line-height: 0.5rem;
    text-align: center;
    color: #fff;
    background: #eb484a;
  }
}
</style>
