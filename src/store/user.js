import Cookie from 'js-cookie';

export default {
  mutations: {
    setToken(state,val){
      Cookie.set('token',val);
    },
    cleanToken(state){
      Cookie.remove('token');
    },
  },
}