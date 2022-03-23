import Cookies from 'js-cookie'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//配置路由映射信息
const routes = [{
  path: '/',
  name: 'Main',
  component: () => import('@/views/Main.vue'),
  children: [{
    name: 'home',
    path: 'home',
    component: () => import('@/views/home/Home.vue'),
  }, {
    name: 'mall',
    path: 'mall',
    component: () => import('@/views/mall/Mall.vue'),
  }, {
    name: 'user',
    path: 'user',
    component: () => import('@/views/user/User.vue'),
  }, {
    name: 'page1',
    path: 'page1',
    component: () => import('@/views/mall/Mall.vue'),
  }, {
    name: 'page2',
    path: 'page2',
    component: () => import('@/views/mall/Mall.vue'),
  }]
}, {
  name: 'login',
  path: '/login',
  component: () => import('@/views/login/Login.vue'),
  // 路由独享守卫 
  beforeEnter: (to, from, next) => {
    //若已有token，访问login则直接跳转至home页面
    if (Cookies.get('token') && to.path === "/login") {
      next('/home')
    }
    next()
  }
}]

//配置路由相关信息
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router