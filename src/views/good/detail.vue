<template>
  <div class="box1">
    <img :src="detailList.poster" alt />
    <p class="price">￥ {{detailList.price}}</p>
    <p class='title1'>{{detailList.name}}</p>
    <p v-html="detailList.desc" class="details"></p>
    <!-- {{detailList.desc}} -->
  <navMenu></navMenu>
  </div>
</template>

<script>
import axios from 'axios'
import navMenu from '@/components/menu'

export default {
  components: {
    navMenu
  },
  data () {
    return {
      detailList: []
    }
  },
  mounted () {
    axios
      .post(
        'https://wap.showstart.com/api/wap/goods/detail.json',
        `goodsId=${this.$route.params.myid}&st_flpv=15768097419883R6OAvI5y4094zR78HEN&sign=&trackPath=&terminal=wap`
      )
      .then(res => {
        this.detailList = res.data.result
      })
  }
}
</script>
<style lang="scss" scoped>
.box1 {
  padding: 0.20rem 0.20rem 0.70rem;
  .price{
      color: #eb484a;
      font-size: 0.25rem;
  }
  .title1{
      padding: 0.10rem 0 0.20rem;
      font-size: 0.18rem;
  }
}
img {
  width: 100%;
}

</style>
