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
        <el-button type="warning" @click="Lessdemo">TSET按钮</el-button>
        <el-button type="danger" @click="Cartoondemo">动画</el-button>
        <el-button type="danger" @click="Headsetdemo">头像组</el-button>
        <el-button type="primary" @click="Slotdemo">VUE插槽demo</el-button>
      </div>
    </el-container>

    <!-- vuex组件demo -->
    <el-card class="box-card1">
      <div class="explain-content">
        <div>vuex组件demo</div>
        <el-button type="success" @click="Vuexdemo">GO 学习</el-button>
      </div>
    </el-card>

    <!-- 评论组件demo -->
    <el-card class="box-card2">
      <div class="explain-content">
        <div>评论组件demo</div>
        <el-button type="success" @click="PLdemo">GO 学习</el-button>
      </div>
    </el-card>

    <!-- element表单-demo -->
    <el-card class="box-card3">
      <div class="explain-content">
        <div>element表单-demo</div>
        <el-button type="success" @click="Fromdemo">GO 学习</el-button>
      </div>
    </el-card>

    <!-- Step步进器-demo -->
    <el-card class="box-card4">
      <div class="explain-content">
        <div>Step步进器-demo</div>
        <el-button type="success" @click="Stepdemo">GO 学习</el-button>
      </div>
    </el-card>

    <!-- Echartsdemo图表结构 -->
    <el-card class="box-card5">
      <div class="explain-content">
        <div>Echarts 多种图表结构</div>
        <el-button type="success" @click="Echartsdemo">GO 学习</el-button>
      </div>
    </el-card>

    <!-- Less 变量循环demo -->
    <el-card class="box-card6">
      <div class="explain-content">
        <div>Less 变量循环 demo</div>
        <el-button type="success" @click="Lessdemo">GO 学习</el-button>
      </div>
    </el-card>

    <!-- input 复合型输入框demo -->
    <el-card class="box-card7">
      <div class="explain-content">
        <div>复合型输入框 demo</div>
        <el-button type="success" @click="Compoundinput">GO 学习</el-button>
      </div>
    </el-card>

    <!-- 头像组 demo -->
    <el-card class="box-card7">
      <div class="explain-content">
        <div>头像组 demo</div>
        <el-button type="success" @click="Headsetdemo">GO 学习</el-button>
      </div>
    </el-card>

    <!-- 动画 demo -->
    <el-card class="box-card7">
      <div class="explain-content">
        <div>动画 demo</div>
        <el-button type="success" @click="Cartoondemo">GO 学习</el-button>
      </div>
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
    // 头像组 demo
    Headsetdemo() {
      this.$router.push({
        path: '/headsetdemo',
      })
    },
    // 动画 demo
    Cartoondemo() {
      this.$router.push({
        path: '/audiodemo',
      })
    },
    // vue 插槽 demo
    Slotdemo() {
      this.$router.push({
        path: '/slotdemo',
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
</style>
