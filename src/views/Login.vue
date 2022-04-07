<template>
  <!-- 登录 -->
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
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            name="username"
            placeholder="请输入用户名/手机号"
            auto-complete="on"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            name="password"
            :type="logintype"
            placeholder="请输入密码"
            auto-complete="on"
          >
            <i
              slot="suffix"
              :class="elIcon"
              @click="loginflag = !loginflag"
            ></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="login-center_btn"
            @click="submitForm('loginForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    var validateMobile = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号码'))
      } else if (value !== '13637060395') {
        callback(new Error('手机号码不合法!'))
      } else {
        callback()
      }
    }
    return {
      loginflag: false,
      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [
          {
            validator: validateMobile,
            required: true,
          },
        ],
        email: [{ required: true, message: '请输入邮箱' }],
      },
    }
  },
  methods: {
    submitForm(loginForm) {
      this.$refs[loginForm].validate((valid) => {
        if (valid) {
          // 这里调取接口存储token
          this.$message({
            showClose: true,
            message: '登录成功!',
            type: 'success',
          })
          // 获取当前时区穿给后端
          var offset = new Date() + '' //将时间格式转为字符串
          console.log(offset) //  Mon Nov 02 2020 20:57:20 GMT-0600 (北美中部标准时间)
          let getGMT = offset.indexOf('GMT')
          let TimeZone = offset.substring(getGMT, getGMT + 8)
          console.log('获取当前时区', TimeZone) //-0600    //拿到这个-0600也就是当前所在时区
          localStorage.setItem('TimeZone', TimeZone)
          console.log('TimeZoneTimeZoneTimeZone', TimeZone)
          // 跳转使用path来匹配路由，然后通过query来传递参数\这种情况下 query传递的参数会显示在url后面?id=？
          // this.$router.push({
          //   path: '/home',
          //   query: {
          //     TimeZone: localStorage.getItem('TimeZone'),
          //   },
          // })
          this.$router.push({
            name: 'Home',
            params: {
              id: localStorage.getItem('TimeZone'),
            },
          })
        } else {
          this.$message({
            showClose: true,
            message: '登录失败!',
            type: 'error',
          })
          return false
        }
      })
    },
  },
  computed: {
    elIcon() {
      return !this.loginflag ? 'el-icon-minus' : 'el-icon-view'
    },
    logintype() {
      return this.loginflag ? 'password' : 'text'
    },
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
