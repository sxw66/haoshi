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
    <div class="demo-image__placeholder">
      <div class="block" style="display: flex; margin-top: 10px">
        <el-image
          :preview-src-list="srcList"
          src="https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
        ></el-image>
        <el-image
          :preview-src-list="srcList"
          src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
        ></el-image>
      </div>
    </div>
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
</style>
