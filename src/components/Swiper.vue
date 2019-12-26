<template>
    <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  props: ['options', 'swipername'],
  mounted () {
    var defaultProp = {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    }
    new Swiper('.' + (this.swipername ? this.swipername : 'banner'), { ...defaultProp, ...this.options })
  }
}
</script>
<style lang="scss" scoped>
    .swiper-container{
        --swiper-pagination-color: #ff6633;
        height: 1.5rem;
        &>.swiper-pagination-bullets{
            bottom:-.15rem;
        }
    }
    .swiper-container > .swiper-pagination-bullets[data-v-07a952a8]{
      bottom: .1rem;
      height: .15rem;
    }
     .swiper-wrapper{
        img{
            width: 100%;
        }
    }
    .scroll{
        margin-left:.2rem;
        width: 100%;
        height: 1.35rem;
        .swiper-wrapper{
            height: 1.5rem;
        }
        img{
          margin-top:.2rem;
          border-radius: .06rem;
        }
    }
    .activity{
      .swiper-slide{
        margin:.0 -0.2rem 0 0;
        padding:.2rem 0;
      }
    }
    .photo{
      img{
        height: 90%;
      }
    }

</style>
