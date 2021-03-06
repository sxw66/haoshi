import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 记录工作中遇到一些问题-的测试demo
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
  // 首页vuextest-demo
  {
    path: '/vuextest',
    name: 'Vuextest',
    meta: {
      auth: false,
      keepAlive: true,
    },
    component: () => import('@/views/demo/Vuexdemo/Vuextest.vue'),
  },
  // 评论组件-demo
  {
    path: '/Vuecomment',
    name: 'vuecomment',
    meta: {
      auth: false,
      keepAlive: true,
    },
    component: () => import('@/views/demo/Comment/Vuecomment.vue'),
  },
  // element 表单组件-demo
  {
    path: '/formtest',
    name: 'formtest',
    meta: {
      auth: false,
      keepAlive: true,
    },
    component: () => import('@/views/demo/formdemo/Formtest.vue'),
  },
  // 步进器
  {
    path: '/setptest',
    name: 'setptest',
    meta: {
      auth: false,
      keepAlive: true,
    },
    component: () => import('@/views/demo/setpdemo/setp.vue'),
  },
  // charts表
  {
    path: '/chartsdemo',
    name: 'chartsdemo',
    meta: {
      auth: false,
      keepAlive: true,
    },
    component: () => import('../views/demo/chartsdemo'),
  },

  // demo
  {
    path: '/lessdemo',
    name: 'lessdemo',
    meta: {
      auth: false,
      keepAlive: true,
    },
    component: () => import('@/views/demo/lessdemo/index.vue'),
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
