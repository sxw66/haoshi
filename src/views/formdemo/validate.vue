<template>
  <!-- js: ElementUI表单验证validate和validateField -->
  <!-- 文档回顾
1、validate：
  对整个表单进行校验的方法，参数为一个回调函数。
  该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。
  若不传入回调函数，则会返回一个 promise
  Function(callback: Function(boolean, object))
2、validateField：
  对部分表单字段进行校验的方法
  Function(props: array | string, callback: Function(errorMessage: string))
-->
  <el-form
    ref="form"
    :model="form"
    :rules="rules"
    label-width="80px"
    size="mini"
  >
    <el-form-item label="姓名" prop="name">
      <el-input v-model.trim="form.name"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model.number="form.age"></el-input>
    </el-form-item>
    <el-form-item label="学校" prop="school">
      <el-input v-model.trim="form.school"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="validate">校验全部</el-button>
      <el-button type="primary" @click="validateField">校验单个字段</el-button>
      <el-button type="primary" @click="validateFields">校验多个字段</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// created at 2022-09-23
export default {
  name: 'TestForm',

  data() {
    return {
      form: {
        name: '',
        age: '',
        school: '',
      },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        age: [
          {
            required: true,
            message: '请输入年龄',
            trigger: 'blur',
          },
          { type: 'number', message: '年龄必须为数字值', trigger: 'blur' },
        ],
        school: [{ required: true, message: '请输入学校', trigger: 'blur' }],
      },
    }
  },

  methods: {
    /**
     * 校验全部字段
     */
    validate() {
      this.$refs['form'].validate((valid) => {
        console.log(valid) // true/false
      })
    },

    /**
     * 校验单个字段
     */
    validateField() {
      this.$refs['form'].validateField('name', (errorMessage) => {
        console.log(errorMessage)
        let valid = errorMessage == '' ? true : false
        console.log(valid) // true/false
      })
    },

    /**
     * 校验多个字段
     */
    validateFields() {
      // 需要校验的字段
      let fieldsToValidate = ['name', 'age']
      // 将回调转换为Promise
      Promise.all(
        fieldsToValidate.map((field) => {
          return new Promise((resolve, reject) => {
            this.$refs['form'].validateField(field, (errorMessage) => {
              resolve(errorMessage)
              reject(errorMessage)
            })
          })
        })
      ).then((errorMessages) => {
        console.info(errorMessages)
        //  ['请输入姓名', '请输入年龄']
        // errorMessages 里是各个字段的验证错误信息, 如果数组里全为空串则所有验证通过
        // 判断errorMessages 里是否全是空串
        let valid = errorMessages.every((errorMessage) => {
          return errorMessage == ''
        })
        console.log(valid) // true/false
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
