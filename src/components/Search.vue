<template>
        <div class="header">
            <slot name="home"></slot>
            <div class="search" @click="handleClick">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAAAM1BMVEUAAAC8vLy8vLy9vb27u7u8vLy/v7+9vb2/v7+8vLy8vLy8vLy7u7u9vb27u7u7u7u7u7uNEF5lAAAAEHRSTlMA89tTpH4wHwy9iprlyYdxyi6iUQAAAIZJREFUKM91kVkOwyAMBbFZszSd+5+2SHEVt8D7imbCA0y4E5OKaIrBYlSxqDc7LvsPllxaK1mciMBW7++6AValHT+dXej3d6kPr2ILEuTgkiFZTfG8WJFA87yBrPiqZ7Xv8pzjvV6gkzl0TJzPjWM2ZxPjuyQTwzua+IuJayYOOMMs1/n+ALRtCdMh8+jaAAAAAElFTkSuQmCC" alt="">
                <input type="text" placeholder="搜索演出关键字" v-model.trim="mytext" @keypress.13="handleSearch">
            </div>
            <slot name="list"></slot>
        </div>
</template>
<script>
export default {
  data () {
    return {
      mytext: ''
    }
  },
  methods: {
    handleClick () {
      if (this.$router.history.current.fullPath == '/search') {

      } else {
        this.$router.push('/search')
      }
    },
    handleSearch () {
      // this.$router.push({nam'/list/'+this.mytext})
      this.$router.push({ name: 'list',
        params: {
          mytext: this.mytext,
          mykey: ''
        } })
    }
  }
}
</script>
<style lang="scss" scoped>
 .header{
        display: flex;
        width: 100%;
        height: .29rem;
        padding: .09rem 0;
        border-top:.5px solid #ebebeb;
        border-bottom:.5px solid #ebebeb;
        .search{
                display: flex;
                flex:1;
                height: .28rem;
                border: none;
                background:#f8f8f8;
                border-radius: .15rem;
                overflow: hidden;
                img{
                    margin: .09rem .09rem 0 .12rem;
                    width: .11rem;
                    height: .11rem;
                }
                input{
                    outline: none;
                    border: none;
                    flex: 1;
                    background: #f8f8f8;
                }
        }
 }
</style>
