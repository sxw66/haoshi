import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 登录
  {
    path: '/',
    name: 'Login',
    meta: {
      auth: false,
      keepAlive: true,
    },
    component: () => import('@/views/Login.vue'),
  },
  // 首页
  {
    path: '/home',
    name: 'Home',
    meta: {
      auth: false,
      keepAlive: true,
    },
    component: () => import('@/views/Home.vue'),
  },
  // 首页
  {
    path: '/vuextest',
    name: 'Vuextest',
    meta: {
      auth: false,
      keepAlive: true,
    },
    component: () => import('@/views/Vuextest.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  // 模式分为3种，
  // 1.history 包含历史记录
  // 2.hash   哈希
  // 3.abstract
})
export default router
