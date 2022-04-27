<template>
  <div>
    <!-- 步进器 -->
    <el-card class="box-card">
      <h4>步进器</h4>
      <setp v-model="num" :max="1000"></setp>
      <el-input v-model="num" placeholder="111111111"></el-input>
    </el-card>
    <hr />
    <el-card class="box-card">
      <h4>去除首位空格</h4>
      <div>
        计算属性-回显去除空格
        <input type="text" :value="computedTrim" />
      </div>
      <div>
        点击按钮-去除原生空格
        <input type="text" v-model="currentValue" />
        <el-button type="primary" @click="fn" size="mini"
          >点击按钮去除空格</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script>
import setp from '../../../components/setp/setp.vue'
export default {
  components: {
    setp,
  },
  data() {
    return {
      num: 0.777,
      str1: '  师 娜 娜  l o g  ',
      currentValue: '',
    }
  },
  methods: {
    fn() {
      // 去除首位空格
      return (this.currentValue = this.currentValue.replace(/^\s+|\s+$/g, ''))
    },
  },
  computed: {
    computedTrim() {
      return this.str1.trim()
    },
  },
}
</script>

<style>
.el-card {
  border: 1px solid #ebeef5;
  background-color: #318abe;
  color: #303133;
  transition: 0.3s;
}
</style>
