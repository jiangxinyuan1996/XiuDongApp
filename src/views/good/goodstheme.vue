<template>
  <div>
    <section>
      <img
        :src="themeInfo.poster"
      />
      <div>
        <p>{{themeInfo.title}}</p>
        <mark></mark>
        <aside>{{themeInfo.subTitle}}</aside>
      </div>
    </section>
    <themegoodslist>
      <li v-for='data in goodslist' :key="data.goodsId" @click="detailclick(data.goodsId)">
        <img
          :src="data.goodsPoster"
        />
        <h3>{{data.goodsName}}</h3>
        <p>￥ {{data.price}}</p>
      </li>
    </themegoodslist>
    <navMenu></navMenu>
  </div>
</template>
<script>
import axios from 'axios'
import navMenu from '@/components/menu'
import themegoodslist from './components/goodslist'
export default {
  components: {
    themegoodslist,
    navMenu
  },
  data () {
    return {
      themeInfo: [],
      goodslist: []
    }
  },

  mounted () {
    this.$store.commit('hide')
    axios.post(
      'https://wap.showstart.com/api/wap/theme/detail.json',
      `id=${this.$route.params.myid}&type=7&st_flpv=15768097419883R6OAvI5y4094zR78HEN&sign=&trackPath=&terminal=wap`

    ).then(res => {
      // console.log(res.data.result)
      // console.log(res.data.result.themeInfo)
      this.themeInfo = res.data.result.themeInfo
      this.goodslist = res.data.result.goods
    })
  },
  beforeDestroy () {
    this.$store.commit('show')
  },
  methods: {
    detailclick (id) {
      this.$router.push(`/goods/detail/${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  display: block
}
section {
  position: relative;
  div {
    position: absolute;
    left: 0.20rem;
    bottom: 0.30rem;
    p {
      font-size: 0.24rem;
      color: #fff;
      margin-bottom: 0.20rem;
      line-height: 0.24rem
    }
    mark{
        display: block;
        width:0.30rem;
        height:0.02rem;
        background: #fff;
        margin:0 0 0.15rem;
    }
    aside{
        color: #fff;
        font-size: 0.16rem
    }
  }
}
</style>
