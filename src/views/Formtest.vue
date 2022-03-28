<template>
  <div>
    <h1>form表单验证组件</h1>
    <rt-form ref="form" label-position="left" :model="formData" :rules="rules">
      <el-button type="primary">确认</el-button>
    </rt-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        tel: '',
        identity: '',
      },
      rules: {
        tel: [
          { required: true, message: '您的手机号码未输入' },
          { pattern: /^1[34578]\d{9}$/, message: '您的手机号码输入错误' },
        ],
        identity: [
          { required: true, message: '身份证未输入' },
          {
            pattern:
              /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/,
            message: '您的身份证未输入号码输入错误',
          },
        ],
      },
    }
  },
}
</script>

<style></style>
