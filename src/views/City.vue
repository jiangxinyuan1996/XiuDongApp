<template>
    <div>
        <mt-index-list>
            <mt-index-section v-for="data in datalist" :index="(data.title!=='热门')?data.title:'热门'" :key="data.title">
                <mt-cell v-for="(city,index) in data.cityEntry" :key="index" :title="city.cityName" @click.native="handleClick(city.cityCode,city.cityName)"></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  methods: {
    handleClick (id, name) {
      localStorage.setItem('cityCode', id)
      localStorage.setItem('cityName', name)
      this.$router.history.go(-1)
    }
  },
  mounted () {
    Axios({
      url: 'https://wap.showstart.com/api/wap/city/group.json?st_flpv=1576809269040S1syPCjA1f9B8iX6P6Vo&sign=&trackPath=&terminal=wap'
    }).then(res => {
      this.datalist = res.data.result
    })
  }
}
</script>
<style lang="scss" scoped>
    *{
        font-size: .14rem;
    }
    a{
        color: #666666;
        font-size: .15rem;
        padding-left: .2rem;
    }

    .mint-indexlist-content{
      li{
        &:nth-of-type(1){
          &:after{
            display:block;
            content: '.';
            visibility: hidden;
            clear: both;
            overflow: hidden;
          }
          .mint-cell{
            float: left;
            padding: 0;
            text-align: center;
            width: .6rem;
            height:.4rem;
            border: .03rem solid white;
            background: #d9d9d9;
            border-radius: 15%;
            margin-left: .03rem;
          }
        }
      }
    }
</style>
