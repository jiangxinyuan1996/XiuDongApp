<template>
  <div id="wrap">
    <brand :isactive="isactive">
      <ul class="tabbar">
        <li :num="index"
          :class="{'active':(isactive==index?true:false)}"
          v-for="(data,index) in datalist"
          :key="data.id"
          @click="handleClick(data.id)"
        >{{data.name}}</li>
      </ul>
    </brand>

  </div>
</template>
<script>
import brand from '@/components/site'
// import axios from 'axios'
export default {
  data () {
    return {

      isactive: 0,
      datalist: [
        {
          id: 0,
          name: '演出'
        },
        {
          id: 1,
          name: '相册'
        },
        {
          id: 3,
          name: '详情'
        }
      ],
      activityList: []
    }
  },

  beforeMount () {
    this.$store.commit('hide')
  },
  beforeDestroy () {
    this.$store.commit('show')
  },
  mounted () {

  },
  components: {
    brand
  },
  methods: {
    handleClick (id) {
      this.isactive = id
    }
  }
}
</script>
