import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
  testMsg: '原始文本',
  childText: '子组件原始文本',
}

const mutations = {
  changeTestMsg(state, str) {
    state.testMsg = str
  },
  changeChildText(state, str) {
    state.childText = str
  },
}

const store = new Vuex.Store({
  state: state,     // data
  mutations: mutations,// 方法
  getters: undefined, // 计算属性
  actions: undefined, // 异步操作
  modules: undefined, // 小的模块化
})

export default store

// const state = {}
// const store = new Vuex.Store({
//     state,
//     mutations: {},
//     getters: {},
//     actions: {},
//     modules: {}
// })
// export default store


