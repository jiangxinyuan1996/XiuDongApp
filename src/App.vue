<template>
  <div id="app">
  <tabbar v-if="isshow"></tabbar>
  <router-view/>
  </div>
</template>
<script>

import tabbar from '@/components/Tabbar'

export default {
  components: {
    tabbar
  },
  computed: {
    isshow () {
      return this.$store.state.isshow
    }
  }
}
</script>
<style lang="scss">
ul,li{
  list-style: none;
}
 .previewVideo{
    width: 100%;
  }
.footer{
  .introduce{
    img{
      width:100%;
    }
    video{
      width:100%;

    }
  }
}

.details{
  img{
    width: 100%;
  }
}
.info-3{
  img{
    width: 100%;
  }
  p{
    font-size: .16rem;
    color: #666666;
  }
  p{
    font-size:0.16rem;
  }
  span{
    font-size:0.16rem;
  }
  strong{
    font-size:0.16rem;
  }
}
</style>
