<template>
  <!-- 首页 -->
  <div class="home">
    <el-header>Welcome SH组件库</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据录入</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">Echartsdemo图表结构</el-menu-item>
              <el-menu-item index="1-2">表单组件</el-menu-item>
              <el-menu-item index="1-3">图片上传组件</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    console.log('登陆页过来的参数', this.$route.params.id)
    // 绘制图表
  },
  data() {
    return {
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
        require('../assets/coco.png'),
      ],
      isCollapse: true,
      activeIndex: '1',
      activeIndex2: '1',
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    // 测试评论组件
    PLdemo() {
      this.$router.push({
        path: '/Vuecomment',
      })
    },
    // 测试VUEX组件
    Vuexdemo() {
      this.$router.push({
        path: '/vuextest',
      })
    },
    // 测试element表单组件
    Fromdemo() {
      this.$router.push({
        path: '/formtest',
      })
    },
    // 测试图片上传组件
    Imgdemo() {
      this.$router.push({
        path: '/formtest',
      })
    },
    // 测试步进器组件
    Stepdemo() {
      this.$router.push({
        path: '/setptest',
      })
    },
    // Echartsdemo图表结构
    Echartsdemo() {
      this.$router.push({
        path: '/chartsdemo',
      })
    },
    //  Less demo变量组件
    Lessdemo() {
      this.$router.push({
        path: '/lessdemo',
      })
    },
    // input 复合型输入框demo
    Compoundinput() {
      this.$router.push({
        path: '/inputdemo',
      })
    },
    // tabs 标签页demo
    Compoundtabs() {
      this.$router.push({
        path: '/tabsdemo',
      })
    },
    // tabs 标签页demo
    Compoundmap() {
      this.$router.push({
        path: '/mapdemo',
      })
    },
    // editor 富文本demo
    Compoundeditor() {
      this.$router.push({
        path: '/editordemo',
      })
    },
  },
}
</script>

<style scoped lang="less">
.home {
  box-sizing: border-box;
  .el-container {
    height: 100vh;
  }
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-header,
.el-footer {
  background: linear-gradient(to right, rgb(31, 31, 103), rgb(241, 199, 206));
  color: #333;
  text-align: center;
  line-height: 60px;
}
.explain-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}
.box-card1 {
  border: 1px solid #ebeef5;
  background-color: #0fffc8;
  color: #303133;
  transition: 0.3s;
  margin-top: 5px;
}
.box-card2 {
  margin-top: 5px;
  background: #d7309f;
}
.box-card3 {
  margin-top: 5px;
  background: #5c5f9b;
}
.box-card4 {
  margin-top: 5px;
  background: #004680; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4484ba,
    #004680
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4484ba,
    #004680
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.box-card5 {
  margin-top: 5px;
  background: #ff1e56; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #1e90ff,
    #f9c942,
    #ff1e56
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #1e90ff,
    #f9c942,
    #ff1e56
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.box-card6 {
  margin-top: 5px;
  background: #7ec6bc; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ebe717,
    #7ec6bc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ebe717,
    #7ec6bc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.box-card7 {
  margin-top: 5px;
  background: #051937; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #a8eb12,
    #00bf72,
    #008793,
    #004d7a,
    #051937
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #a8eb12,
    #00bf72,
    #008793,
    #004d7a,
    #051937
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.box-card9 {
  background: #6025f5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff5555,
    #6025f5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ff5555,
    #6025f5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
