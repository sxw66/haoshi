<template>
  <!-- 首页 -->
  <div>
    <div class="homepage">
      <!-- 大屏化 -->
      <dv-flyline-chart-enhanced
        :config="config"
        :dev="true"
        style="width: 50vw; height: 50vh"
      />
      <!-- 图表 -->
      <div id="main" style="width: 600px; height: 400px"></div>
    </div>
    <el-row>
      <el-button type="primary" round @click="gotest">主要按钮</el-button>
      <el-button type="success" round @click="gotest">成功按钮</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    console.log('登陆页过来的参数', this.$route.params.id)
    // console.log('登陆页过来的参数', this.$route.query.id)
    var echarts = require('echarts')
    var myChart = echarts.init(document.getElementById('main'))
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    })
  },
  data() {
    return {
      ruleForm: {
        region: '',
        delivery: false,
        resource: '',
      },
      config: {
        points: [
          {
            name: '郑州',
            coordinate: [0.48, 0.35],
            halo: {
              show: true,
            },
            icon: {
              src: 'https://img2.baidu.com/it/u=837367436,1239285443&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
              width: 30,
              height: 30,
            },
            text: {
              show: false,
            },
          },
          {
            name: '新乡',
            coordinate: [0.52, 0.23],
          },
          {
            name: '焦作',
            coordinate: [0.43, 0.29],
          },
          {
            name: '开封',
            coordinate: [0.59, 0.35],
          },
          {
            name: '许昌',
            coordinate: [0.53, 0.47],
          },
          {
            name: '平顶山',
            coordinate: [0.45, 0.54],
          },
          {
            name: '洛阳',
            coordinate: [0.36, 0.38],
          },
          {
            name: '周口',
            coordinate: [0.62, 0.55],
          },
          {
            name: '漯河',
            coordinate: [0.56, 0.56],
          },
          {
            name: '南阳',
            coordinate: [0.37, 0.66],
          },
          {
            name: '信阳',
            coordinate: [0.55, 0.81],
          },
          {
            name: '驻马店',
            coordinate: [0.55, 0.67],
          },
          {
            name: '济源',
            coordinate: [0.37, 0.29],
          },
          {
            name: '三门峡',
            coordinate: [0.2, 0.36],
          },
          {
            name: '商丘',
            coordinate: [0.76, 0.41],
          },
          {
            name: '鹤壁',
            coordinate: [0.59, 0.18],
          },
          {
            name: '濮阳',
            coordinate: [0.68, 0.17],
          },
          {
            name: '安阳',
            coordinate: [0.59, 0.1],
          },
        ],
        lines: [
          {
            source: '新乡',
            target: '郑州',
          },
          {
            source: '焦作',
            target: '郑州',
          },
          {
            source: '开封',
            target: '郑州',
          },
          {
            source: '许昌',
            target: '郑州',
          },
          {
            source: '平顶山',
            target: '郑州',
          },
          {
            source: '洛阳',
            target: '郑州',
          },
          {
            source: '周口',
            target: '郑州',
          },
          {
            source: '漯河',
            target: '郑州',
          },
          {
            source: '南阳',
            target: '郑州',
          },
          {
            source: '信阳',
            target: '郑州',
          },
          {
            source: '驻马店',
            target: '郑州',
          },
          {
            source: '济源',
            target: '郑州',
          },
          {
            source: '三门峡',
            target: '郑州',
          },
          {
            source: '商丘',
            target: '郑州',
          },
          {
            source: '鹤壁',
            target: '郑州',
          },
          {
            source: '濮阳',
            target: '郑州',
          },
          {
            source: '安阳',
            target: '郑州',
          },
        ],
        icon: {
          show: true,
          src: 'https://img2.baidu.com/it/u=837367436,1239285443&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        },
        text: {
          show: true,
        },
        k: 0.5,
        bgImgSrc:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-qn.51miz.com%2Fpreview%2Felement%2F00%2F01%2F10%2F60%2FE-1106036-D0E2961F.jpg&refer=http%3A%2F%2Fimg-qn.51miz.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647597701&t=658e226059caf9d208fbd1dcbb50ccd2',
      },
    }
  },
  methods: {
    gotest() {
      this.$router.push({
        path: '/vuextest',
      })
    },
  },
}
</script>

<style scoped lang="less">
.homepage {
  display: flex;
}
</style>
