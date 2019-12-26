<template>
   <div class="list">
       <search>
           <div class="cancel" slot="list" @click="handleClick">取消</div>
       </search>
        <div class="title" v-for="data in datalist" :key="data.tags.key">
           <p>{{data.title}}</p>
       </div>
       <div class="info" v-for="data in datalist" :key="data.tags.key">
           <span v-for="tag in data.tags" :key="tag.key" @click="handleTagClick(tag.key)">{{tag.value}}</span>
       </div>
   </div>
</template>
<script>
import search from '@/components/Search'
import Axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    this.$store.commit('hide')
    Axios({
      url: 'https://wap.showstart.com/api/wap/activity/searchparams.json?st_flpv=1576809269040S1syPCjA1f9B8iX6P6Vo&sign=&trackPath=&terminal=wap'
    }).then(res => {
      this.datalist = res.data.result
    })
  },
  beforeDestroy () {
    //   this.$store.state.isShow=true
    this.$store.commit('show')
  },
  methods: {
    handleClick () {
      this.$router.push('/')
    },
    handleTagClick (key) {
      this.$router.push('/list/' + key)
    }
  },
  components: {
    search
  }
}
</script>
<style lang="scss" scoped>
.list{
    padding-left: .2rem;
    .cancel{
        font-size: .16rem;
        width: .7rem;
        height:.3rem;
        text-align: center;
        line-height: .3rem;
    }
    .title{
        font-size: .18rem;
        padding: .2rem 0;
    }
    .info{
        font-size: .13rem;
        span{
            display: inline-block;
            background: #f8f8f8;
            border-radius: .12rem;
            height: .25rem;
            line-height: .25rem;
            padding: 0 .15rem;
            font-size: .13rem;
            color: #666;
            margin: 0 .12rem .12rem 0;
        }
    }
}

</style>
