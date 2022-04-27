<template>
  <rt-view v-title="'Echarts 图表 饼图'">
    <div class="container">
      <div id="rt-echarts-pie-basic" class="rt-charts"></div>
      <div id="rt-echarts-pie-servceone" class="rt-charts"></div>
      <div id="rt-echarts-pie-ring" class="rt-charts"></div>
      <div id="rt-echarts-pie-ring-process" class="rt-charts"></div>
      <div id="rt-echarts-pie-ring-process-double" class="rt-charts"></div>
    </div>
  </rt-view>
</template>

<script>
export default {
  data() {
    return {
      pieBasic: {
        title: '基础饼图',
        data: [
          { value: 1048, name: '产品A' },
          { value: 735, name: '产品B' },
          { value: 580, name: '产品C' },
          { value: 484, name: '产品D' },
          { value: 300, name: '产品E' }
        ]
      },
      pieServiceone: {
        title: '服务云app产品',
        data: [
          { value: 1048, name: '产品A' },
          { value: 735, name: '产品B' },
          { value: 580, name: '产品C' },
          { value: 484, name: '产品D' },
          { value: 300, name: '产品E' }
        ]
      },
      pieRing: {
        title: '环形图',
        data: [
          { value: 1048, name: '产品A' },
          { value: 735, name: '产品B' },
          { value: 580, name: '产品C' },
          { value: 484, name: '产品D' },
          { value: 300, name: '产品E' }
        ]
      },
      pieRingProcess: {
        title: '环形进度图',
        data: [{ value: 75 }]
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initEchartPieBasic();
      this.initEchartPieServiceone();
      this.initEchartPieRing();
      this.initEchartPieRingProcess();
      this.initEchartPieRingProcessDouble();
    },
    initEchartPieBasic() {
      let myChart = this.$echarts.init(document.getElementById('rt-echarts-pie-basic'), 'theme');
      // 配置项
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.pieBasic.title,
          // title 组件离容器右侧的距离
          right: 0
        },
        // 图例
        legend: {
          // 图例项的 icon
          icon: 'circle',
          // 设置宽度
          itemWidth: 8,
          // 设置高度
          itemHeight: 8,
          // 图例列表的布局朝向
          orient: 'vertical',
          // 图例组件离容器上侧的距离
          top: 'center',
          // 图例组件离容器右侧的距离
          right: '10%'
        },
        series: [
          {
            // 图表类型
            type: 'pie',
            // 饼图的半径
            // number：直接指定外半径值。
            // string：例如，'20%'，表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度。
            // Array.<number|string>：数组的第一项是内半径，第二项是外半径。每一项遵从上述 number string 的描述。
            radius: '40%',
            // 系列中的数据内容数组
            data: this.pieBasic.data,
            // 饼图图形上的文本标签
            label: {
              show: false
            },
            // 标签的视觉引导线配置
            labelLine: {
              // 是否显示视觉引导线
              show: false
            },
            // pie chart组件离容器左侧的距离
            // 默认居中，从UI提供的示例图看，设置的是图表和图例一起据中，因此设置图表的此属性，真实项目可以具体判断
            left: '-25%'
          }
        ]
      };
      option && myChart.setOption(option);
    },
    initEchartPieServiceone() {
      let myChart = this.$echarts.init(
        document.getElementById('rt-echarts-pie-servceone'),
        'theme'
      );
      // 配置项
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.pieServiceone.title,
          // title 组件离容器右侧的距离
          right: 0
        },
        // 图例
        legend: {
          // 图例项的 icon
          icon: 'circle',
          // 设置宽度
          itemWidth: 8,
          // 设置高度
          itemHeight: 8,
          bottom: '10%',
          left: 'center',
          // 设置间距
          itemGap: 20
        },
        series: [
          {
            // 图表类型
            type: 'pie',
            // 饼图的半径
            // number：直接指定外半径值。
            // string：例如，'20%'，表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度。
            // Array.<number|string>：数组的第一项是内半径，第二项是外半径。每一项遵从上述 number string 的描述。
            radius: '40%',
            // 系列中的数据内容数组
            data: this.pieServiceone.data,
            // 标签的视觉引导线配置
            labelLine: {
              // 视觉引导项第二段的长度
              length2: 30
            }
          }
        ]
      };
      option && myChart.setOption(option);
    },
    initEchartPieRing() {
      let myChart = this.$echarts.init(document.getElementById('rt-echarts-pie-ring'), 'theme');
      // 配置项
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.pieRing.title,
          // title 组件离容器右侧的距离
          right: 0
        },
        // 图例
        legend: {
          // 图例项的 icon
          icon: 'circle',
          // 设置宽度
          itemWidth: 8,
          // 设置高度
          itemHeight: 8,
          bottom: '10%',
          left: 'center',
          // 设置间距
          itemGap: 20
        },
        series: [
          {
            // 图表类型
            type: 'pie',
            // 饼图的半径
            // number：直接指定外半径值。
            // string：例如，'20%'，表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度。
            // Array.<number|string>：数组的第一项是内半径，第二项是外半径。每一项遵从上述 number string 的描述。
            radius: ['35%', '45%'],
            // 系列中的数据内容数组
            data: this.pieRing.data,
            // 标签的视觉引导线配置
            labelLine: {
              // 视觉引导项第二段的长度
              length2: 30
            }
          }
        ]
      };
      option && myChart.setOption(option);
    },
    initEchartPieRingProcess() {
      let myChart = this.$echarts.init(
        document.getElementById('rt-echarts-pie-ring-process'),
        'theme'
      );
      // 配置项
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.pieRingProcess.title,
          // title 组件离容器右侧的距离
          right: 0
        },
        // 原生图形元素组件
        graphic: [
          {
            type: 'text', //通过不同top值可以设置上下显示
            left: 'center',
            top: '44%',
            style: {
              text: this.pieRingProcess.data[0].value + '%',
              textAlign: 'center',
              fill: '#555', //文字的颜色
              width: 48,
              height: 28,
              fontSize: 20
            },
            // 决定此图形元素在定位时，对自身的包围盒计算方式
            // raw 表示仅仅用自身
            bounding: 'raw'
          },
          {
            type: 'text', //通过不同top值可以设置上下显示
            left: 'center',
            top: '50%',
            style: {
              text: '目标达成',
              textAlign: 'center',
              fill: '#555', //文字的颜色
              width: 48,
              height: 14,
              fontSize: 10
            },
            bounding: 'raw'
          }
        ],
        // 图例
        legend: {
          // 图例项的 icon
          icon: 'circle',
          // 设置宽度
          itemWidth: 8,
          // 设置高度
          itemHeight: 8,
          // 图例列表的布局朝向
          orient: 'vertical',
          // 图例组件离容器上侧的距离
          top: 'center',
          // 图例组件离容器右侧的距离
          right: 0
        },
        series: [
          {
            type: 'pie',
            radius: ['35%', '40%'],
            data: [
              {
                name: `实际进度 ${this.pieRingProcess.data[0].value} %`,
                value: this.pieRingProcess.data[0].value,
                itemStyle: {
                  // 设置圆角
                  borderRadius: '5%',
                  color: '#5798EF'
                }
              },
              {
                name: `目标进度 ${100 - this.pieRingProcess.data[0].value} %`,
                value: 100 - this.pieRingProcess.data[0].value,
                itemStyle: {
                  color: '#E7E7E7'
                }
              }
            ],
            // 饼图图形上的文本标签
            label: {
              show: false
            },
            // 标签的视觉引导线配置
            labelLine: {
              // 是否显示视觉引导线
              show: false
            }
          }
        ]
      };
      option && myChart.setOption(option);
    },
    initEchartPieRingProcessDouble() {
      let myChart = this.$echarts.init(
        document.getElementById('rt-echarts-pie-ring-process-double'),
        'theme'
      );
      // 配置项
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.pieRingProcess.title,
          // title 组件离容器右侧的距离
          right: 0
        },
        // 原生图形元素组件
        graphic: [
          {
            type: 'text', //通过不同top值可以设置上下显示
            left: 'center',
            top: '44%',
            style: {
              text: this.pieRingProcess.data[0].value + '%',
              textAlign: 'center',
              fill: '#555', //文字的颜色
              width: 48,
              height: 28,
              fontSize: 20
            },
            // 决定此图形元素在定位时，对自身的包围盒计算方式
            // raw 表示仅仅用自身
            bounding: 'raw'
          },
          {
            type: 'text', //通过不同top值可以设置上下显示
            left: 'center',
            top: '50%',
            style: {
              text: '目标达成',
              textAlign: 'center',
              fill: '#555', //文字的颜色
              width: 48,
              height: 14,
              fontSize: 10
            },
            bounding: 'raw'
          }
        ],
        // 图例
        legend: {
          // 图例项的 icon
          icon: 'circle',
          // 设置宽度
          itemWidth: 8,
          // 设置高度
          itemHeight: 8,
          // 图例列表的布局朝向
          orient: 'vertical',
          // 图例组件离容器上侧的距离
          top: 'center',
          // 图例组件离容器右侧的距离
          right: 0
        },
        series: [
          {
            type: 'pie',
            radius: ['25%', '30%'],
            data: [
              {
                name: `实际进度 ${this.pieRingProcess.data[0].value} %`,
                value: this.pieRingProcess.data[0].value,
                itemStyle: {
                  // 设置圆角
                  borderRadius: '50%',
                  color: '#5798EF'
                }
              },
              {
                name: `目标进度 ${100 - this.pieRingProcess.data[0].value} %`,
                value: 100 - this.pieRingProcess.data[0].value,
                itemStyle: {
                  color: '#E7E7E7'
                }
              }
            ],
            // 饼图图形上的文本标签
            label: {
              show: false
            },
            // 标签的视觉引导线配置
            labelLine: {
              // 是否显示视觉引导线
              show: false
            }
          },
          {
            type: 'pie',
            radius: ['35%', '40%'],
            data: [
              {
                name: `实际进度 ${this.pieRingProcess.data[0].value} %`,
                value: this.pieRingProcess.data[0].value,
                itemStyle: {
                  // 设置圆角
                  borderRadius: '50%',
                  // 渐变色
                  color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#53A4FC' },
                    { offset: 0.5, color: '#4EC6F2' }
                  ])
                }
              },
              {
                name: `目标进度 ${100 - this.pieRingProcess.data[0].value} %`,
                value: 100 - this.pieRingProcess.data[0].value,
                itemStyle: {
                  color: '#E7E7E7'
                }
              }
            ]
          }
        ]
      };
      option && myChart.setOption(option);
    }
  }
};
</script>
