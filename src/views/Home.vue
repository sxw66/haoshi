<template>
  <!-- 首页 -->
  <div class="home">
    <el-header>Welcome 大白菜系统</el-header>
    <el-container>
      <div style="display: flex; margin-top: 10px">
        <el-button @click="Vuexdemo">vuex组件demo</el-button>
        <el-button type="primary" @click="PLdemo">评论组件demo</el-button>
        <el-button type="success" @click="Fromdemo">element表单-demo</el-button>
        <el-button type="info" @click="Stepdemo">Step步进器-demo</el-button>
        <el-button type="warning" @click="Tsetdemo">TSET按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </div>
    </el-container>

    <!-- vuex组件demo -->
    <el-card class="box-card1">
      <span>vuex组件demo</span>
      <el-button
        style="float: right; padding: 3px 0"
        type="text"
        @click="Vuexdemo"
        >GO 学习</el-button
      >
    </el-card>
    <!-- 评论组件demo -->
    <el-card class="box-card2">
      <span>评论组件demo</span>
      <el-button
        style="float: right; padding: 3px 0"
        type="text"
        @click="PLdemo"
        >GO 学习</el-button
      >
    </el-card>
    <!-- element表单-demo -->
    <el-card class="box-card3">
      <span>element表单-demo</span>
      <el-button
        style="float: right; padding: 3px 0"
        type="text"
        @click="Fromdemo"
        >GO 学习</el-button
      >
    </el-card>
    <!-- Step步进器-demo -->
    <el-card class="box-card4">
      <span>Step步进器-demo</span>
      <el-button
        style="float: right; padding: 3px 0"
        type="text"
        @click="Stepdemo"
        >GO 学习</el-button
      >
    </el-card>
    <!-- Echartsdemo图表结构 -->
    <el-card class="box-card5">
      <span>Echarts 多种图表结构</span>
      <el-button
        style="float: right; padding: 3px 0"
        type="text"
        @click="Echartsdemo"
        >GO 学习</el-button
      >
    </el-card>

    <!-- TSET按钮 -->
    <el-card class="box-card5">
      <span>TSET按钮</span>
      <el-button
        style="float: right; padding: 3px 0"
        type="text"
        @click="Tsetdemo"
        >GO 学习</el-button
      >
    </el-card>
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
    }
  },
  methods: {
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
    // 未知的测试组件
    Tsetdemo() {
      this.$router.push({
        path: '/demotest',
      })
    },
  },
}
</script>

<style scoped lang="less">
.el-header,
.el-footer {
  background: linear-gradient(to right, rgb(31, 31, 103), rgb(241, 199, 206));
  color: #333;
  text-align: center;
  line-height: 60px;
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
  background: #e7d80c26;
}
.box-card5 {
  margin-top: 5px;
  background: #f80404;
}
</style>
