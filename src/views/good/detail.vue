<template>
  <div class="box1">
    <img :src="detailList.poster" alt />
    <p class="price">￥ {{detailList.price}}</p>
    <p class='title1'>{{detailList.name}}</p>
    <p v-html="detailList.desc" class="details"></p>
  <navMenu></navMenu>
    <div class="down">
      <div class="down_left" @click="handleclick">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRCAMAAACdUboEAAAAclBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACa4vOeAAAAJXRSTlMAgHTAHvMFnUcJ4JW6XczIs6URi+bVFdquhXtPOy1oQibsxDVWLP9qxwAAAglJREFUWMPtmNtygjAQhiFIKueDoBwUtbrv/4pNKJ2tphMW15vO8F2RFf4h+ZfdRGdl5d9xbIu4aI9v00tC+CZM3qJXxoDEJV9wn8Jv0j1XUE6CYRZOkpKp2I4yzUldnprxuuUJbkYRMY3EONqwFCMtET0PGUhfKfh7tGkcS05mg6JzkE4HOJnujuv2vK4uQ/FDPV89RCoV+WAo5joBHyI6PXOGoqee92wROpdEuIpQfy0ugpFuuC2xPKmBQNUFRL0gByL1habYAJkDqbjtYAEeYTFPoInPpd3r4BaBZqAlNUSU7LmP855XrPRtkpSPBaG24YdLUTyDYraZbUGx/RnFekmnazMSgGI3pygeZiKwgP8VqfGF7cb4WHFFLiT+iBFcyOucYqZuyhwigmKNT6x/aE1PsFqQdweYGASrSYRYfwkrQ63xIdVqemcr+VYjvVY8M6y2Gcm3Gt+gYFptNsuaa7VZ8AO+1UiiFW+WGz4Nqyk9ZGBabW4HI67Vxj4oY1ttrjzfamQAxYVptbkLTt5mNXYvvtXIAZsj32rsXgyrrW7yrcbX6JlWm92rs1idGlHK1quhWc3vXiVavfi8bEkeTH9mP8T0f+3AbNveBgsFg6vZaljncVmMM7MeE7xtSX/B3rP/0RDBcuyLL7OXBGNpmUXzgmBhN/NeL9RLe9LRmopINs7KygqPLwiLhGvwWobHAAAAAElFTkSuQmCC"
          alt
        />
        周边
      </div>
      <div class="down_right" @click="suppertclick" >立即购买</div>
    </div>
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
  beforeDestroy () {
    this.$store.commit('show')
  },
  methods: {
    handleclick () {
      this.$router.push(`/goods`)
    },
    suppertclick () {
      this.$router.push(`/center`)
    }

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
