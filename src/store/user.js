import Cookie from 'js-cookie';

export default {
  state:{
    user_info:{}
  },
  mutations: {
    setToken(state,val){
      Cookie.set('token',val);
    },
    cleanToken(state){
      Cookie.remove('token');
    },
    setUserInfo(state,val){
      state.user_info=val
    }
  },
}