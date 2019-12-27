<template>
  <div class="box1">
    <img :src="detailList.poster" alt />
    <p class="price">￥ {{detailList.price}}</p>
    <p class='title1'>{{detailList.name}}</p>
    <p v-html="detailList.desc" class="details"></p>
    <!-- {{detailList.desc}} -->
    <div class="down">
      <div class="down_left" @click="handleclick">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAMAAACdUboEAAAAflBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCtoPsAAAAKXRSTlMA1aoqVYDz+jEJ7Fq5oLJo4I0WS3DahkY/Jua+lVI5HgV7dcSoymAQGuF45+AAAALASURBVFjD7ZfZsqJADIaDCDS7LOICoqIe7fd/wTlp96TbKsGLqRm/G6gEYqfzh7Tw5cv/w3Ftt61Y5PAhGk9ecK1RKeAVi7B0qm06W8MravnEMjMFLWL3/tQ+PYIJS1LqOXB+puQpLwp90DKRnIimlUdSgwNagl9XMpsV4zKLbmm5P/DIfPmwtvttCFrwiQou2M41uQbulJcoVlcsfMhF4RwksgAtuK4M7swOUpH4t5JIxehxexMsD5izbp4s4+Ac8ioZV+1DyN7ag7kyMalD/ZC4b6mEnzMUaEsNETHJmtg2sURUeTK8C07whPLbhoj7X9+EWWOV6RrgiDl7RKEnD5cNBip8g2l1EyldAmzxuiXe7JyBgRC9M2bOVXnmPl4C8oO2i3ltwMBJKkEyxmjfpZreOCrNloAYiz0Fzk71OO4J+c4l6ltB1s02peX2mSoOSlvT4h55gWtrBJxrQ5a8xbkW+fdMcPtWnklvNdiscIGkJUzV3nG7LS+4SdaFRVrtl/JMQ+qsX2Sna3kGaXEThdprrslEUkiLE1jPCa4CjkUWaMCfqJB0lSVaD6JLJpd0dxUvoAE7UImTPljdPpP+QrT2Cd6hdSWys5nGY+jJ/FLYkSAVa6Av9nXMTp25/yDUCnrjx/cJOo3irHKicw8OoLAkJ4VBhDzmDwxENOTYsoLhrMNsZC1dT7rkKDKcnOzjcHw6B4fjDdKj+QTzSQ7qFPBJRuow0odNuxrrwDZ0tZ5V+3LUpIF8nyAFI5HshXmHO9mXztAYnuyLl5vnfyxsLSjIWucQMel5ehbx4Q6d2JN3O9RBFyAm5xF00IOlOSKfr/NPRlyoSTMwIv9H1gyMyEvTfTTieufG/tCInH8wYtpvKK/Mc1JIZGq9x1QiwiSQviSmOR/IfgS5UXO17EO9BjNFth+9xz4r4MuXL38VfwCHHcvpgFb1QgAAAABJRU5ErkJggg=="
          alt
        />
        周边
      </div>
      <div class="down_right">立即购买</div>
    </div>
  <navMenu></navMenu>
  </div>
</template>

<script>
import axios from 'axios'
import navMenu from '@/components/menu'

export default {
  methods:{
    handleclick(){
      this.$router.push('/goods')
    }
  },
  components: {
    navMenu
  },
  data () {
    return {
      detailList: []
    }
  },
  beforeDestroy(){
    this.$store.commit('show')
  },
  mounted () {
    this.$store.commit('hide')
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
.down {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0.5rem;
  display: flex;
    background:white;
  .down_left {
    flex: 2;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    text-align: center;
    height: 0.49rem;
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
