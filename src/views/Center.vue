<template>
  <div>
    <div class="box" @click="handleDump">
      <img class="denglu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADcBAMAAADpdNKyAAAAElBMVEXu7u7////8/Pzz8/P29vb4+PhToYnFAAACSElEQVR42u3aQW7bMBAF0Ikp7/OpeC/K8V62272UoHvH7f3PUhQIOi1Uhwqh+Q2DeRcYaOZTFGmLc84555xzzjnnnPuszt/6FPsfZ2EIV7w6DGLua8Jv8bsYO+Eve7Gh1Yj1GsyMYidhJoqyaCWjndpKXjtf8E87MbHFDRexMOGGBzEQcNMgyiCWjHAmKNO1p0HhheWIN7SytgRwuqm55GVzgzd1jNGp1mB0xOEhQ1bVIGM0SAotK3fIuDcIJi2aExRhz0vIiDWXQ5aXWyoga/ByH3N2gqyalzm53AsydjXvCPn9ruaPB3K5gIyh5u/M3ErY1X1GyJ2A6j7fkU+vsuGezZtF559a71VksyiXtd6JyZERFNVQgqImxkauwsLJ1XnTzv4dQUKaVRvE0JZyy662CVDxIsaaBK02irnwlF6LPQ7CEL5c+/7wPIhzzq3xSul7/BL7w1mMhSf8KT6LpdNse+0HsRIS51tFq/HqbRNueBRlsIsT6mk1Rj2dG2V+iXpJdcKM4eftBnnRYHCU8U1YZGS0UkVKKlXHSaWmk5ETtec8nD4e4+HUnhFLFSmxVB3j4VQ0uGA3e7UEvFdr+UeOuUgJiuoYvVQtJZeKkkt1YfRStdRelmfziCJD+eiYw0OZ+9KL/DIPjKSoSExKeVYmFBoZ72fV0YJZHs2AUq3FOlh5JWxRasdYdip6uf9c7g7Fip6ulnI1zI5crkGpXQWvaPZ+d0ShUZjdjIQrlTV+bg7XPr2zVn/wX4Cdc84555xzzjnn6vcTzUVP+utZlQUAAAAASUVORK5CYII=" alt="">
      <p class="title">登录</p>
    </div>

    <footer>
      <router-link class="order_form yanchu" tag='div' to="/order/homelist">
        <span class="iconfont icon-dingdan"></span>
        <p>演出订单</p>
      </router-link>
      <router-link class="order_form zhongchou" tag='div' to="/order/raiselist">
        <span class="iconfont icon-dingdanhuorizhi"></span>
        <p>众筹订单</p>
      </router-link>
      <router-link class="order_form zhoubian" tag='div' to="/order/goodslist">
        <span class="iconfont icon-dingdantijiaochenggong"></span>
        <p>周边订单</p>
      </router-link>
    </footer>

    <div class="igator">
      <ul>
        <li class="BK shouhuo" @click="btnshouhuo">
          收货地址
          <span class="iconfont icon-xiangyou"></span>
        </li>
        <li class="BK changyong" @click="btnchangyong">
          常用观演人
          <span class="iconfont icon-xiangyou"></span>
        </li>
        <li class="youhui" @click="btnyouhui">
          优惠券
          <span class="iconfont icon-xiangyou"></span>
        </li>
        <li class="service">
          客服电话 <span class="number">400-188-6980</span>
          <span class="iconfont icon-xiangyou"></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
div {
  font-size: 0.18rem;
}
ul,
div,
li {
  background: white;
}
img{
  display:block;
}
ul li {
  list-style: none;
}
.title{
  font-size: 0.187rem;
  text-align: center;

}

.box {
  width: 3.35rem;
  border-bottom: 0.005rem solid  rgb(248, 248, 248);
  height: 0.85rem;
  padding: 0.2rem;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
    border-radius: 50%;
        display: block;
    width:0.6rem;
    height:0.6rem;

  }
}
ul::after{
   content:""; display:block;
    clear:both;height:0;overflow:hidden;
    visibility:hidden;

}
ul{
border-top:0.08rem solid rgb(248, 248, 248);
}

.box span {
  display: block;
  font-size: 0.6rem;
  text-align: center;
}
.order_form p {
  font-size: 0.14rem;
}

.igator li {
  font-size: 0.16rem;
}

footer p {
  font-size: 0.14rem;
  text-align: center;
}
.order_form {
  float: left;
  width: 1.25rem;
  height: 0.5rem;
  padding: 0.21rem 0;
}
.order_form span {
  display: block;
  font-size: 0.28rem;
  text-align: center;
}

.igator {
  margin-top: 1rem;
  width: 3.75rem;
  height: 1.51rem;
}
.igator li {
  padding: 0 0.2rem;
  font-size: 0.14rem;
  width: 3.35rem;
  height: 0.505rem;
  float: left;
  /* border-bottom: 1px solid gray; */
  line-height: 0.505rem;
}
.igator li .iconfont {
  display: block;
  float: right;
  line-height: 0.505rem;
}
.igator .service {
  border-bottom: none;
  margin-top: 0.08rem;
  margin-bottom: 0.08rem;
  border-top:0.08rem solid rgb(248, 248, 248);
  .number{
    font-size:0.14rem;
        color: #999;
  }
}
.igator .BK {
  border-bottom: 1px solid rgb(248, 248, 248);
}
</style>

<script>
export default {
  methods: {
    handleDump () {
      this.$router.push('/login')
    },
    btnshouhuo () {
      this.$router.push('/login/address')
    },
    btnchangyong () {
      this.$router.push('/login/actors')
    },
    btnyouhui () {
      this.$router.push('/login/coupon')
    }
  },
  mounted () {

  }
}
</script>
