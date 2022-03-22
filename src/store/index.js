import Vue from 'vue'
import Vuex from 'vuex'
import menu from './tab.js'
import user from './user.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    menu,user
  }
})
