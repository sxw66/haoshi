<template>
  <div>
    <h3>Echarts 图表 漏斗图</h3>
    <div class="container">
      <div id="rt-echarts-funnel" class="rt-charts"></div>
      <div id="rt-echarts-funnel-project" class="rt-charts"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import echarts from 'echarts'
export default {
  data() {
    return {
      funnel: {
        title: '漏斗图',
        legend: ['进度一', '进度二', '进度三', '进度四', '进度五'],
        data: [
          { value: 15, name: '进度一' },
          { value: 30, name: '进度二' },
          { value: 50, name: '进度三' },
          { value: 70, name: '进度四' },
          { value: 100, name: '进度五' },
        ],
      },
      funnelProject: {
        title: 'SFA产品',
        legend: ['明确需求', '跟进阶段', '价格谈判', '商机关闭商机关闭'],
        data: [
          { value: 20, name: '明确需求', num: 1000 },
          { value: 15, name: '跟进阶段', num: 750 },
          { value: 10, name: '价格谈判', num: 50 },
          { value: 0, name: '商机关闭商机关闭', num: 600 },
        ],
        min: 8,
      },
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.initEchartFunnel()
      this.initEchartFunnelProject()
    },
    initEchartFunnel() {
      let myChart = echarts.init(
        document.getElementById('rt-echarts-funnel'),
        'theme'
      )
      // 配置项
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.funnel.title,
          // title 组件离容器右侧的距离
          right: 0,
        },
        color: ['#C0D9FA', '#A1C4F3', '#8CB6EE', '#73A7EC', '#5798EF'],
        series: [
          {
            name: '漏斗图',
            type: 'funnel',
            left: 'center',
            top: 'center',
            width: '60%',
            height: '50%',
            minSize: '15%',
            maxSize: '100%',
            // 数据图形间距
            gap: 2,
            label: {
              position: 'right',
            },
            data: this.funnel.data,
          },
          // 想要同时显示名称和value，需要2个漏斗图叠加
          {
            type: 'funnel',
            left: 'center',
            top: 'center',
            width: '60%',
            height: '50%',
            minSize: '15%',
            maxSize: '100%',
            gap: 2,
            label: {
              position: 'inside',
              formatter: '{c}%',
              color: '#fff',
            },
            data: this.funnel.data,
            itemStyle: {
              borderWidth: 0,
            },
          },
        ],
        label: {
          color: '#000',
          fontSize: 10,
          lineHeight: 14,
        },
      }
      option && myChart.setOption(option)
    },
    initEchartFunnelProject() {
      let myChart = echarts.init(
        document.getElementById('rt-echarts-funnel-project'),
        'theme'
      )
      // 配置项
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.funnelProject.title,
          // title 组件离容器右侧的距离
          right: 0,
        },
        // 图例
        legend: {
          data: this.funnelProject.legend,
          // 图例项的 icon
          icon: 'circle',
          // 设置宽度
          itemWidth: 10,
          // 设置高度
          itemHeight: 10,
          top: 40,
          left: 'center',
          // 设置间距
          itemGap: 20,
        },
        color: ['#6666F7', '#53A4FC', '#32D5B2', '#F4D028'],
        series: [
          {
            name: '漏斗图',
            type: 'funnel',
            left: '12%',
            top: 'center',
            width: '60%',
            height: '50%',
            // 最小值
            min: this.funnelProject.min,
            // 数据最小值 min 映射的宽度
            // 如果需要最小值的图形并不是尖端三角，可通过设置该属性实现。
            minSize: '30%',
            maxSize: '100%',
            label: {
              position: 'right',
              formatter: (params) => {
                // 判断值是否是显示为矩形的那个0值，如果是，取定义的最小值
                if (params.data.value === 0) {
                  return `${this.funnelProject.min}个商机\n￥${params.data.num}万`
                }
                return `${params.data.value}个商机\n￥${params.data.num}万`
              },
              color: '#222',
              lineHeight: 16,
              fontSize: 13,
            },
            data: this.funnelProject.data,
          },
        ],
      }
      option && myChart.setOption(option)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  .rt-charts {
    height: 400px;
    width: 564px;
    margin-bottom: 22px;
  }
}
</style>
