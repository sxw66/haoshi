<template>
  <rt-view v-title="'Echarts 图表 仪表盘'">
    <div class="container">
      <div id="rt-echarts-gauge" class="rt-charts"></div>
      <div class="rt-echarts-gauge-wrap">
        <div id="rt-echarts-gauge-project" class="rt-charts"></div>
        <div v-if="gaugeProjectInit" class="tip-gauge-project">
          <div v-for="(item, index) in tipItems" :key="index" class="tip-item">
            <rt-icon :name="item.iconName" :color="item.iconColor" size="8" />
            <span class="tip-item-label">{{ item.label }}:</span>
            <span class="tip-item-value">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </rt-view>
</template>

<script>
export default {
  data() {
    return {
      gauge: {
        title: '仪表盘',
        data: [
          {
            value: [1530.2],
            name: '转速'
          }
        ]
      },
      gaugeProject: {
        title: 'A.O.smith(首页/业绩看板）项目',
        data: [
          {
            value: [68.5],
            name: '达成率'
          }
        ]
      },
      gaugeProjectInit: false,
      tipItems: [
        {
          iconName: 'rt-sample-circle',
          iconColor: 'primary',
          label: '实际',
          value: '305.20'
        },
        {
          iconName: 'rt-sample-circle',
          iconColor: 'info',
          label: '目标',
          value: '550.50'
        },
        {
          iconName: 'rt-sample-growth',
          iconColor: 'success',
          label: '增长率',
          value: '14.1%'
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initEchartGauge();
      this.initEchartGaugeProject();
    },
    initEchartGauge() {
      let myChart = this.$echarts.init(document.getElementById('rt-echarts-gauge'), 'theme');
      // 配置项
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.gauge.title,
          // title 组件离容器右侧的距离
          right: 0
        },
        series: [
          {
            // 图表类型
            type: 'gauge',
            // 仪表盘半径，可以是相对于容器高宽
            radius: '80%',
            // 系列中的数据内容数组
            data: this.gauge.data,
            // 单个拐点文本的样式设置
            label: {
              // 是否显示标签
              show: true
            },
            // 仪表盘轴线相关配置。
            axisLine: {
              // 是否显示仪表盘轴线
              show: false,
              // 是否在两端显示成圆形
              // roundCap: true,
              lineStyle: {
                width: 20
              }
            },
            // 展示当前进度
            progress: {
              // 是否显示进度条
              show: false,
              // 进度条宽度,默认10
              width: 20,
              itemStyle: {
                color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#5798EF' },
                  { offset: 1, color: '#0078EF' }
                ])
              }
            },
            // 分隔线样式
            splitLine: {
              // 是否显示分隔线
              show: false
            },
            // 刻度样式
            axisTick: {
              length: 15,
              lineStyle: {
                color: '#D8D8D8'
              }
            },
            // 刻度标签
            axisLabel: {
              // 是否显示标签
              show: false
            },
            // 仪表盘指针
            pointer: {
              // 是否显示指针
              show: false
            },
            // 仪表盘标题
            title: {
              color: '#555',
              fontSize: 10,
              lineHeight: 14,
              fontWeight: 'bold'
            },
            // 仪表盘详情，用于显示数据
            detail: {
              color: '#000',
              fontSize: 28,
              lineHeight: 39,
              fontWeight: 'bold',
              offsetCenter: [0, 0]
            }
          },
          {
            // 图表类型
            type: 'gauge',
            // 仪表盘半径，可以是相对于容器高宽
            radius: '65%',
            // 系列中的数据内容数组
            data: this.gauge.data,
            // 最大值
            max: 2400,
            // 仪表盘刻度的分割段数
            splitNumber: 2,
            // 单个拐点文本的样式设置
            label: {
              // 是否显示标签
              show: true
            },
            // 仪表盘轴线相关配置。
            axisLine: {
              // 是否显示仪表盘轴线
              show: false,
              // 是否在两端显示成圆形
              // roundCap: true,
              lineStyle: {
                width: 20
              }
            },
            // 展示当前进度
            progress: {
              // 是否显示进度条
              show: true,
              // 进度条宽度,默认10
              width: 20,
              itemStyle: {
                color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#5798EF' },
                  { offset: 1, color: '#0078EF' }
                ])
              }
            },
            // 分隔线样式
            splitLine: {
              // 是否显示分隔线
              show: false
            },
            // 刻度样式
            axisTick: {
              lineStyle: {
                color: '#D8D8D8'
              }
            },
            // 刻度标签
            axisLabel: {
              // 是否显示标签
              show: true,
              // 标签与刻度线的距离
              distance: 24,
              // 文字的颜色
              color: '#ccc',
              fontSize: 6
            },
            // 仪表盘指针
            pointer: {
              // 是否显示指针
              show: false
            },
            // 仪表盘标题
            title: {
              show: false
            },
            // 仪表盘详情，用于显示数据
            detail: {
              show: false
            }
          }
        ]
      };
      option && myChart.setOption(option);
    },
    initEchartGaugeProject() {
      let myChart = this.$echarts.init(
        document.getElementById('rt-echarts-gauge-project'),
        'theme'
      );
      if (myChart) {
        this.gaugeProjectInit = true;
      }
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.gaugeProject.title,
          // title 组件离容器右侧的距离
          right: 0
        },
        series: [
          {
            // 图表类型
            type: 'gauge',
            // 仪表盘半径，可以是相对于容器高宽
            radius: '70%',
            // 系列中的数据内容数组
            data: this.gaugeProject.data,
            // 单个拐点文本的样式设置
            label: {
              // 是否显示标签
              show: true
            },
            // 仪表盘轴线相关配置。
            axisLine: {
              // 是否显示仪表盘轴线
              show: false,
              // 是否在两端显示成圆形
              // roundCap: true,
              lineStyle: {
                width: 20
              }
            },
            // 展示当前进度
            progress: {
              // 是否显示进度条
              show: false,
              // 进度条宽度,默认10
              width: 20,
              itemStyle: {
                color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#5798EF' },
                  { offset: 1, color: '#0078EF' }
                ])
              }
            },
            // 分隔线样式
            splitLine: {
              // 是否显示分隔线
              show: false
            },
            // 刻度样式
            axisTick: {
              length: 15,
              lineStyle: {
                color: '#D8D8D8'
              }
            },
            // 刻度标签
            axisLabel: {
              // 是否显示标签
              show: false
            },
            // 仪表盘指针
            pointer: {
              // 是否显示指针
              show: false
            },
            // 仪表盘标题
            title: {
              color: '#555',
              fontSize: 12,
              lineHeight: 17,
              fontWeight: 'bold'
            },
            // 仪表盘详情，用于显示数据
            detail: {
              color: '#000',
              fontSize: 28,
              lineHeight: 39,
              fontWeight: 'bold',
              offsetCenter: [0, 0],
              formatter: '{value}%'
            }
          },
          {
            // 图表类型
            type: 'gauge',
            // 仪表盘半径，可以是相对于容器高宽
            radius: '55%',
            // 系列中的数据内容数组
            data: this.gaugeProject.data,
            // 最大值
            max: 100,
            // 仪表盘刻度的分割段数
            splitNumber: 2,
            // 单个拐点文本的样式设置
            label: {
              // 是否显示标签
              show: true
            },
            // 仪表盘轴线相关配置。
            axisLine: {
              // 是否显示仪表盘轴线
              show: false,
              // 是否在两端显示成圆形
              // roundCap: true,
              lineStyle: {
                width: 20
              }
            },
            // 展示当前进度
            progress: {
              // 是否显示进度条
              show: true,
              // 进度条宽度,默认10
              width: 20,
              itemStyle: {
                color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#4FC5F3' },
                  { offset: 1, color: '#51B2F8' }
                ])
              }
            },
            // 分隔线样式
            splitLine: {
              // 是否显示分隔线
              show: false
            },
            // 刻度样式
            axisTick: {
              lineStyle: {
                color: '#D8D8D8'
              },
              splitNumber: 20
            },
            // 刻度标签
            axisLabel: {
              // 是否显示标签
              show: true,
              // 标签与刻度线的距离
              distance: 24,
              // 文字的颜色
              color: '#ccc',
              fontSize: 9,
              lineHeight: 13
            },
            // 仪表盘指针
            pointer: {
              // 是否显示指针
              show: false
            },
            // 仪表盘标题
            title: {
              show: false
            },
            // 仪表盘详情，用于显示数据
            detail: {
              show: false
            }
          }
        ]
      };
      option && myChart.setOption(option);
    }
  }
};
</script>
