<template>
  <!-- 测试Vuex -->
  <div class="parent">
    <h3>这里是Vuextest组件</h3>
    <el-button type="primary" @click="clickHandler">修改自己文本</el-button>
    <div>Test: {{ msg }}</div>
    <hr />
    <el-dropdown1 @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">黄金糕</el-dropdown-item>
        <el-dropdown-item command="b">狮子头</el-dropdown-item>
        <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
        <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown1>
    
  </div>
</template>

<script>
import store from '@/store/index'
import ElDropdown1 from '../../../components/dropdown/src/dropdown.vue'
import ElDropdownMenu from '../../../components/dropdown/src/dropdown-menu.vue'
import ElDropdownItem from '../../../components/dropdown/src/dropdown-item.vue'



export default {
  components: {
    ElDropdown1,
    ElDropdownMenu,
    ElDropdownItem,
  },
  computed: {
    msg() {
      return store.state.testMsg
    },
  },
  data() {
    return {}
  },
  methods: {
    clickHandler() {
      store.commit('changeTestMsg', 'Vuextest组件修改后的文本')
    },
    handleCommand(command) {
      this.$message('click on item ' + command)
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
