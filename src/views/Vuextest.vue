<template>
  <!-- 测试Vuex -->
  <div class="parent">
    <h3>这里是Vuextest组件</h3>
    <el-button type="primary" @click="clickHandler">修改自己文本</el-button>
    <div>Test: {{ msg }}</div>
  </div>
</template>

<script>
import store from '@/store/index'

export default {
  computed: {
    msg() {
      return store.state.testMsg
    },
  },
  methods: {
    clickHandler() {
      store.commit('changeTestMsg', 'Vuextest组件修改后的文本')
    },
  },
  store,
}
</script>

<style scoped>
.parent {
  background-color: #00bbff;
  height: 400px;
}
</style>
