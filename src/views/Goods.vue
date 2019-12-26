<template>
  <div>
    <ul class="auslese">
      <h2>精选专题</h2>

      <router-link :to="'/goods/theme/'+data.id" tag="li" v-for="data in datatheme" :key="data.id" >
        <!-- <div>zhezao</div> -->
        <img
          :src="data.poster"
          alt
        />
        <h3>{{data.title}}</h3>
        <p>{{data.subTitle}}</p>
      </router-link>
    </ul>
    <aroundGoodslist
      v-infinite-scroll="myLoadMore"
      infinite-scroll-distance="100"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="false"
      >
      <li v-for="data in dataGoods" :key="data.goodsId" @click="detailclick(data.goodsId)">
        <img
          :src="data.goodsPoster"
          alt
        />
        <h3>{{ data.goodsName }}</h3>
        <p>{{ data.price }}</p>
      </li>
      <p v-if=isShow>--没有更多了--</p>
    </aroundGoodslist>
  </div>
</template>

<script>
import axios from 'axios'
// import {} from 'mint-ui'
import aroundGoodslist from './good/components/goodslist'
export default {
  components: {
    aroundGoodslist
  },
  data () {
    return {
      datatheme: [],
      dataGoods: [],
      count: 1,
      zongshu: 20,
      isShow: false
    }
  },
  methods: {
    detailclick (id) {
      this.$router.push(`/goods/detail/${id}`)
    },
    myLoadMore () {
      // console.log(this.zongshu)
      // console.log(this.count)
      if (this.dataGoods.length < this.zongshu) {
        this.count++
        // console.log('daodile')
        axios.post(
          'https://wap.showstart.com/api/wap/goods/list.json',
          `pageNo=${this.count}&st_flpv=15768097419883R6OAvI5y4094zR78HEN&sign=&trackPath=&terminal=wap`
        ).then(res => {
          // console.log(this.zongshu)
          this.zongshu = res.data.result.totalCount
          this.dataGoods = [...this.dataGoods, ...res.data.result.result]
        })
      }
      if (this.dataGoods.length == this.zongshu) {
        this.isShow = true
      }
    }
  },
  mounted () {
    axios({
      url:
    'https://wap.showstart.com/api/wap/theme/list.json?pageNo=1&st_flpv=15768097419883R6OAvI5y4094zR78HEN&sign=&trackPath=&terminal=wap'
    }).then(res => {
      this.datatheme = res.data.result.themes
      this.dataGoods = res.data.result.hotGoods
      this.total = res.data.result
      // console.log(res.data)
    })
  }
}
</script>
<style lang="scss" scoped>
h2 {
  padding: 0.20rem 0;
  font-size: 0.18rem;
  font-weight: bold;
}
.auslese {
  padding: 0.20rem;
  border-bottom: 0.01rem solid #ebebeb;
}
.auslese li {
  margin-bottom: 0.28rem;
  img {
    border-radius: 0.10rem;
    width: 100%;
    // margin-bottom: 0.20rem;
    // display: block;
  }
  h3 {
    margin: 0 0 0.05rem;
    font-weight: bold;
    font-size: 0.16rem

  }
  p {
    font-size: 0.12rem;
  }
}
</style>
