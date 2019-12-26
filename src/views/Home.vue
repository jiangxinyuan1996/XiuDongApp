<template>
    <div id="Home">
           <search>
                <div class="city" @click="handleClick" slot="home">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAeCAMAAAAB8C7XAAAAY1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmaHTeAAAAIHRSTlMAHE8p89m8tgP04r+SdWwW593UzMi4npx+cFpLRyQREC06+UQAAADPSURBVCjPbdHpEoMgDATgTQGxnr3v1rz/U3YGFgeV7xebkBEQJIN31jo/CHJy19k9a+2sZuwO9NSVJ/frRpiR/bZhBcBNC26ApHX1GcdPlZJg4OqB4ME44Mr9IM5c4eLiDXrH7MAzjaCR50oNAUnMexznKy2ue4SPi0sd6/UlZo9eo64O9Y6xh1E6v4x5nVMyQKsFLb9Wft62PACYbcMg6Nf1HuSXdY/kd8rrpx9m0uisEWTMIdUPBgtfzjRfrIgL/0ewMVWq1YSCuosvHP0BxcUz6wdNeDcAAAAASUVORK5CYII=" alt="">
                    {{cityname}}
                </div>
           </search>

        <swiper v-if="datalist.length" class="banner" :options="{
                autoplay: {
                    delay: 3000
                },
        }">
            <div class="swiper-slide" v-for="data in datalist" :key="data.activityId" @click="handleDump(data.activityId)">
                <img :src="data.path" alt="">
            </div>
        </swiper>
        <swiper v-if="typelist.length" :options="{
            loop:false,
            pagination:{},
            slidesPerView: 3.5,
            spaceBetween: 20,
            freeMode:true
        }" class="scroll" swipername="scroll">
            <div class="swiper-slide" v-for="type in typelist" :key="type.key" @click="handleType(type.key)"><img :src="type.imageURL" alt=""></div>
        </swiper>
        <!-- <menu></menu> -->
        <hot></hot>
    </div>
</template>
<script>
import swiper from '@/components/Swiper'
import Axios from 'axios'
import hot from '@/views/home/Hotplaying'
import search from '@/components/Search'
// import menu from '@/components/menu'
export default {
  data () {
    return {
      datalist: [],
      typelist: [],
      cityname: localStorage.getItem('cityName') ? localStorage.getItem('cityName') : '全国'
    }
  },
  created () {
    if (localStorage.getItem('cityCode')) {

    } else {
      localStorage.setItem('cityCode', '0')
      localStorage.setItem('cityName', '全国')
    }
  },
  mounted () {
    Axios.post('/api/wap/home/homePage.json', `cityCode=${localStorage.getItem('cityCode')}&st_flpv=1576809269040S1syPCjA1f9B8iX6P6Vo&sign=&trackPath=&terminal=wap`).then(res => {
      this.datalist = res.data.result.banner
      this.typelist = res.data.result.styles
    })
  },
  methods: {
    handleClick () {
      this.$router.push('/city')
    },
    handleType (key) {
      this.$router.push('/list/' + key)
    },
    handleDump (id) {
      this.$router.push('/activity/' + id)
    }
  },
  components: {
    swiper,
    hot,
    search
  }
}
</script>
<style lang="scss" scoped>
    #Home{
        overflow: hidden;
    }
        .city{
            height: .28rem;
            line-height: .28rem;
            padding: 0 .19rem;
            font-size: .11rem;
            img{
                width: .11rem;
                height: .14rem;
                margin-right: .03rem;
            }
        }

</style>
