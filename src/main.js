import Vue from 'vue'
// 按需引入
// import { Button, Radio, Row } from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from "./router"
import VueParticles from 'vue-particles'

// 在src/main.js中全局引入粒子组件
Vue.use(ElementUI).use(VueParticles)
// 按需引入
// Vue.use(Button).use(Radio).use(Row)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
