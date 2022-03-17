import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
    component: () => import('@/views/home/Home.vue'),
  }, {
    name: 'user',
    path: 'user'
  }, {
    name: 'page1',
    path: 'page1'
  }, {
    name: 'page2',
    path: 'page2'
  }]
}, ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router