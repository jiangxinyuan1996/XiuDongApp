<template>
    <div>
        <div class="logo"><img src="data:image/png;base64,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" alt=""></div>
        <p>账号：<input type="text" value=""></p>
        <p>密码：<input type="password" value=""></p>

        <button class="btn">立即登陆</button>
    </div>
</template>
<script>
export default {
  beforeMount () {
    //   this.$store.state.isShow=false
    this.$store.commit('hide')
  },
  beforeDestroy () {
    //   this.$store.state.isShow=true
    this.$store.commit('show')
  }
}
</script>
<style lang="scss" scoped>
div{
    text-align: center
}
    .logo{
        width: 100%;
        height: 0.87rem;
        padding:0.33rem 0rem 0.33rem 0rem;
    }
    img{
        width: 0.75rem;
        text-align: center;
    }
    div p{
        font-size: 0.18rem;
        height:0.5rem;
        line-height: 0.5rem;

        // width: 3.48rem;
         padding: 0.11rem 0rem;
         border-bottom: 0.005rem #ebebeb solid;
         margin-left: 0.13rem;
    }
    div p input{
        border: none;
        width:3rem;;
        height: 0.5rem;
        outline: none
    }
    .btn{
        width: 3.48rem;
        height: 0.46rem;
        font-size: 0.18rem;
        color: wheat;
        background: #eb484a;
        text-align: center;
        border: 0.01rem solid rgba(0,0,0,.2)
    }
</style>
