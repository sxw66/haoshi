import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from "./router"
import VueParticles from 'vue-particles'

// 大屏的炫酷效果本人引用的是datav组件将自动注册所有组件为全局组件
// import dataV from '@jiaminghi/data-view'
// Vue.use(dataV)

// 在src/main.js中全局引入粒子组件
Vue.use(ElementUI).use(VueParticles)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
