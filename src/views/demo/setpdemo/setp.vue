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
    <input type="text" v-model="shuru" /> <br />
    <ul>
      <li v-for="(p, index) in filterpersons" :key="index">
        {{ p.namee }}----{{ p.age }}
      </li>
    </ul>
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
      persons: [
        { namee: 'xuhaitao', age: 33 },
        { namee: 'hunk', age: 45 },
        { namee: 'xuhaihuan', age: 30 },
      ],
      shuru: 'x',
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

    filterpersons() {
      const { persons, shuru } = this

      return persons.filter((item) => {
        return item.namee.indexOf(shuru.trim()) >= 0
      })

      //另一种写法 ，匿名函数
      /*
                return this.persons.filter(function (item) {
                    return item.namee.indexOf(shuru)>=0;
                })
                */
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
