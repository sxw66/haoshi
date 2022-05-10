<template>
  <div>
    <!-- 步进器 -->
    <el-card class="box-card">
      <h4>步进器</h4>
      <el-form :model="editForm">
        <el-form-item label="不尽其1">
          <setp v-model="num" :min="2"></setp>
        </el-form-item>
        <el-form-item label="不尽其2">
          <!-- RtInputNumber -->
          <el-input-number v-model="editForm.number4" />
        </el-form-item>
      </el-form>
    </el-card>
    <hr />
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
      setnum: 1,
      str1: '  师 娜 娜  l o g  ',
      currentValue: '',
      editForm: {
        number1: 5,
        number2: 5,
        number3: 5,
        number4: 5,
      },
    }
  },
  methods: {
    fn() {
      // 去除首位空格
      return (this.currentValue = this.currentValue.replace(/^\s+|\s+$/g, ''))
    },
    fun(currentValue, oldValue) {
      console.log('----------------------', currentValue, oldValue)
      this.num = this.setnum
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
