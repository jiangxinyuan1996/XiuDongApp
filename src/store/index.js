import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isshow: true
  },
  mutations: {
    show (state) {
      state.isshow = true
    },
    hide (state) {
      state.isshow = false
    }
  },
  actions: {
  },
  modules: {
  }
})
