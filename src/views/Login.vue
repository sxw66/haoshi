<template>
  <div class="login">
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
      style="height: 100%"
    ></vue-particles>
    <div class="login-center">
      <el-form :model="loginForm" ref="loginForm" :rules="loginRules">
        <h2>Ray商城登录</h2>
        <el-form-item>
          <el-input
            v-model="loginForm.username"
            name="username"
            placeholder="请输入用户名/手机号"
            auto-complete="on"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="loginForm.password"
            name="password"
            placeholder="请输入密码"
            auto-complete="on"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-center_btn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      mag: '',
      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
        ],
      },
    }
  },
}
</script>

<style scoped lang="less">
.login {
  background-image: linear-gradient(-180deg, #1a1454 0%, #0e81a5 100%);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  &-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &_btn {
      width: 300px;
    }
  }
}

.el-input {
  width: 300px;
}
</style>
