export default {
  state: {
    isShow: false
  },
  mutations: {
    showDialog(state) {
      state.isShow = true;
    },
    hideDialog(state) {
      state.isShow = false;
    }
  },
  actions: {

  },
  modules: {}
}