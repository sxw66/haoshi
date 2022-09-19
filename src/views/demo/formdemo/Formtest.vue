<template>
  <div>
    <el-input-number v-model="num" :precision="4" :max="10"></el-input-number>
    <h1>form表单验证组件</h1>
    <rt-form ref="form" label-position="left" :model="formData" :rules="rules">
      <el-button type="primary">确认</el-button>
    </rt-form>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              placeholder="选择时间"
              v-model="ruleForm.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <hr />
    <hr />
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
        <el-button type="primary" @click="validateField"
          >校验单个字段</el-button
        >
        <el-button type="primary" @click="validateFields"
          >校验多个字段</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        age: '',
        school: '',
      },
      num: -0.0875475479,
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      rules: {
        age: [
          {
            required: true,
            message: '请输入年龄',
            trigger: 'blur',
          },
          { type: 'number', message: '年龄必须为数字值', trigger: 'blur' },
        ],
        school: [{ required: true, message: '请输入学校', trigger: 'blur' }],
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' },
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change',
          },
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change',
          },
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change',
          },
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' },
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
      },
      formData: {
        tel: '',
        identity: '',
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log('validate', valid)
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    /**
     * 校验全部字段
     */
    validate() {
      this.$refs['form'].validate((valid) => {
        console.log(valid) // true/false
      })
      this.$refs['form'].validate()
      console.log(this.$refs['form'].validate())
    },

    /**
     * 校验单个字段
     */
    validateField() {
      this.$refs['form'].validateField('name', (errorMessage) => {
        console.log(errorMessage)
        let valid = errorMessage == '' ? true : false
        console.log(valid) // true/false
        console.log(
          ' this.$refs.validateField',
          this.$refs['form'].validateField
        )
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

<style></style>