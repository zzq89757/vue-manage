
export default {
  state: {
    isCollapse:false
  },
  mutations: {
    alterCollapse(state){
      state.isCollapse=!state.isCollapse
    }
  },
}