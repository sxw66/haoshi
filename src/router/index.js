import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
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
