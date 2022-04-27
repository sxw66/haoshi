<template>
  <rt-view v-title="'Echarts 图表 柱状图'">
    <div class="container">
      <div id="rt-echarts-bar" class="rt-charts"></div>
      <div id="rt-echarts-bar-gradient" class="rt-charts"></div>
      <div id="rt-echarts-bar-grouping" class="rt-charts"></div>
      <div id="rt-echarts-bar-grouping-project" class="rt-charts"></div>
      <div id="rt-echarts-bar-landscape" class="rt-charts"></div>
      <div id="rt-echarts-bar-stack" class="rt-charts"></div>
    </div>
  </rt-view>
</template>

<script>
// 横向柱状图，label过长的处理方法
function axisLabelFormatter(val) {
  if (!val) {
    return;
  }
  if (val.length > 4 && val.length <= 7) {
    var str = '';
    for (var i = 0, s; (s = val[i++]); ) {
      //遍历字符串数组
      str += s;
      if (!(i % 4)) str += '\n'; //按需要求余
    }
    return str;
  } else if (val.length > 7) {
    let strs = val.substring(0, 7);
    var str = '';
    for (var i = 0, s; (s = strs[i++]); ) {
      //遍历字符串数组
      str += s;
      if (!(i % 4)) str += '\n'; //按需要求余
    }
    return str + '...';
  }
  return val;
}
export default {
  data() {
    return {
      // 柱状图
      bar: {
        title: '基础柱状图',
        label: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
        data: [150, 230, 224, 318, 135, 147, 260]
      },
      // 渐变柱状图
      barGradient: {
        title: 'A.O.smith(首页/业绩看板）项目',
        label: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
        data: [150, 230, 224, 318, 135, 147, 260]
      },
      // 分组柱状图
      barGrouping: {
        title: '分组柱状图',
        legend: ['预期卖出', '实际卖出'],
        label: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
        data1: [150, 230, 224, 318, 135, 147, 260],
        data2: [250, 130, 254, 118, 235, 180, 360]
      },
      // 苏泊尔电器项目
      barGroupingProject: {
        title: '苏泊尔电器项目',
        legend: ['目标额（万元）', '销售额（万元）'],
        label: ['经销商', '电子商务', '特殊渠道'],
        data1: [150, 230, 224],
        data2: [450, 530, 754]
      },
      // 横向柱状图
      barLandscape: {
        title: '横向柱状图/条形图',
        legend: ['预期卖出', '实际卖出'],
        label: [
          '苏州瑞泰',
          '杭州阿里巴巴电子商务',
          '苏州瑞云',
          '深圳腾讯',
          '杭州阿里支付宝',
          '上海久光',
          '北京京东'
        ],
        data1: [150, 230, 224, 318, 135, 147, 260],
        data2: [250, 130, 254, 118, 235, 180, 360]
      },
      // 层叠柱状图
      barStack: {
        title: '层叠柱状图/条形图',
        legend: ['预期卖出', '实际卖出'],
        label: [
          '苏州瑞泰',
          '杭州阿里巴巴电子商务',
          '苏州瑞云',
          '深圳腾讯',
          '杭州阿里支付宝',
          '上海久光',
          '北京京东'
        ],
        data1: [150, 230, 224, 318, 135, 147, 260],
        data2: [250, 130, 254, 118, 235, 180, 360]
      }
    };
  },
  mounted() {
    this.initEchartBar();
    this.initEchartBarGradient();
    this.initEchartBarGrouping();
    this.initEchartBarGroupingProject();
    this.initEchartBarLandscape();
    this.initEchartBarStack();
  },
  methods: {
    initEchartBar() {
      let myChart = this.$echarts.init(document.getElementById('rt-echarts-bar'), 'theme');
      // 配置项
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.bar.title,
          // title 组件离容器右侧的距离
          right: 0
        },
        // x 轴
        xAxis: {
          // 坐标轴类型
          type: 'category',
          // 类目数据
          data: this.bar.label,
          // 坐标轴刻度相关设置
          axisTick: {
            // 是否显示坐标轴刻度
            show: false
          },
          // 坐标轴刻度标签的相关设置
          axisLabel: {
            // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
            // 旋转的角度从 -90 度到 90 度。
            // rotate: 30,
            // 设置成 0 强制显示所有标签
            interval: 0
          }
        },
        // y 轴
        yAxis: {
          type: 'value'
        },
        series: [
          {
            // 数据内容数组
            data: this.bar.data,
            // 图表类型
            type: 'bar',
            // 图形样式
            itemStyle: {
              // 柱条的颜色
              color: '#5798EF',
              // 圆角半径，单位px，支持传入数组分别指定 4 个圆角半径。
              // 顺时针左上，右上，右下，左下
              // 如果未人为指定bar的宽度，UI设计又为全圆角，可以设置一个足够大的值实现，如下：
              borderRadius: [100, 100, 0, 0]
            }
          }
        ]
      };
      option && myChart.setOption(option);
    },
    initEchartBarGradient() {
      let myChart = this.$echarts.init(document.getElementById('rt-echarts-bar-gradient'), 'theme');
      // 配置项
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.barGradient.title,
          // title 组件离容器右侧的距离
          right: 0
        },
        // x 轴
        xAxis: {
          // 坐标轴类型
          type: 'category',
          // 类目数据
          data: this.barGradient.label,
          // 坐标轴刻度相关设置
          axisTick: {
            // 是否显示坐标轴刻度
            show: false
          },
          // 坐标轴刻度标签的相关设置
          axisLabel: {
            // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
            // 旋转的角度从 -90 度到 90 度。
            // rotate: 30,
            // 设置成 0 强制显示所有标签
            interval: 0
          }
        },
        // y 轴
        yAxis: {
          type: 'value',
          name: '/万元',
          nameGap: 20,
          nameTextStyle: {
            align: 'right'
          }
        },
        series: [
          {
            // 数据内容数组
            data: this.barGradient.data,
            // 图表类型
            type: 'bar',
            // 图形样式
            itemStyle: {
              // 柱条的颜色
              // 设置渐变
              // 4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
              // 数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
              color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#53A4FC' },
                { offset: 0.5, color: '#4EC6F2' }
              ]),
              // 圆角半径，单位px，支持传入数组分别指定 4 个圆角半径。
              // 顺时针左上，右上，右下，左下
              borderRadius: [6, 6, 0, 0]
            },
            // 柱条的宽度，不设时自适应。
            barWidth: 12
          }
        ]
      };
      option && myChart.setOption(option);
    },
    initEchartBarGrouping() {
      let myChart = this.$echarts.init(document.getElementById('rt-echarts-bar-grouping'), 'theme');
      // 配置项
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.barGrouping.title,
          // title 组件离容器右侧的距离
          right: 0
        },
        // 图例
        legend: {
          // 注意：只设置这个不会显示，series 里必须设置 name，且与 data 里对应!
          data: this.barGrouping.legend,
          // 图例组件离容器下侧的距离
          bottom: 0,
          // 图例项的 icon
          icon: 'circle',
          // 设置宽度
          itemWidth: 10,
          // 设置高度
          itemHeight: 10,
          // 设置间距
          itemGap: 40
        },
        // x 轴
        xAxis: {
          // 坐标轴类型
          type: 'category',
          // 类目数据
          data: this.barGrouping.label,
          // 坐标轴刻度相关设置
          axisTick: {
            // 是否显示坐标轴刻度
            show: false
          },
          // 坐标轴刻度标签的相关设置
          axisLabel: {
            // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
            // 旋转的角度从 -90 度到 90 度。
            // rotate: 30,
            // 设置成 0 强制显示所有标签
            interval: 0
          }
        },
        // y 轴
        yAxis: {
          type: 'value'
        },
        series: [
          {
            // 与 legend 内值对应
            name: this.barGrouping.legend[0],
            // 数据内容数组
            data: this.barGrouping.data1,
            // 图表类型
            type: 'bar',
            // 图形样式
            itemStyle: {
              // 柱条的颜色
              color: '#5798EF',
              // 圆角半径，单位px，支持传入数组分别指定 4 个圆角半径。
              // 顺时针左上，右上，右下，左下
              borderRadius: [7, 7, 0, 0]
            },
            // 柱条的宽度，不设时自适应。
            barWidth: 14
          },
          {
            name: this.barGrouping.legend[1],
            data: this.barGrouping.data2,
            type: 'bar',
            itemStyle: {
              color: '#5AD8A6',
              borderRadius: [7, 7, 0, 0]
            },
            barWidth: 14
          }
        ]
      };
      option && myChart.setOption(option);
    },
    initEchartBarGroupingProject() {
      let myChart = this.$echarts.init(
        document.getElementById('rt-echarts-bar-grouping-project'),
        'theme'
      );
      // 配置项
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.barGroupingProject.title,
          // title 组件离容器右侧的距离
          right: 0
        },
        // 图例
        legend: {
          // 注意：只设置这个不会显示，series 里必须设置 name，且与 data 里对应!
          data: this.barGroupingProject.legend,
          // 图例组件离容器下侧的距离
          top: 30,
          right: 0,
          // 图例项的 icon
          icon: 'circle',
          // 设置宽度
          itemWidth: 8,
          // 设置高度
          itemHeight: 8,
          itemGap: 20
        },
        // x 轴
        xAxis: {
          // 坐标轴类型
          type: 'category',
          // 类目数据
          data: this.barGroupingProject.label,
          // 坐标轴刻度相关设置
          axisTick: {
            // 是否显示坐标轴刻度
            show: false
          },
          // 坐标轴刻度标签的相关设置
          axisLabel: {
            // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
            // 旋转的角度从 -90 度到 90 度。
            // rotate: 30,
            // 设置成 0 强制显示所有标签
            interval: 0
          }
        },
        // y 轴
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: this.barGroupingProject.legend[0],
            // 数据内容数组
            data: this.barGroupingProject.data1,
            // 图表类型
            type: 'bar',
            // 图形样式
            itemStyle: {
              // 柱条的颜色
              color: '#FE991F'
            },
            // 柱条的宽度，不设时自适应。
            barWidth: 30
          },
          {
            name: this.barGroupingProject.legend[1],
            data: this.barGroupingProject.data2,
            type: 'bar',
            itemStyle: {
              color: '#53A4FC'
            },
            barWidth: 30
          }
        ]
      };
      option && myChart.setOption(option);
    },
    initEchartBarLandscape() {
      let myChart = this.$echarts.init(
        document.getElementById('rt-echarts-bar-landscape'),
        'theme'
      );
      // 配置项
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.barLandscape.title,
          // title 组件离容器右侧的距离
          right: 0
        },
        // 图例
        legend: {
          // 注意：只设置这个不会显示，series 里必须设置 name，且与 data 里对应!
          data: this.barLandscape.legend,
          // 图例组件离容器下侧的距离
          top: 30,
          right: 0,
          // 图例项的 icon
          icon: 'circle',
          // 设置宽度
          itemWidth: 8,
          // 设置高度
          itemHeight: 8
        },
        // x 轴
        xAxis: {
          // 坐标轴类型
          type: 'value'
        },
        // y 轴
        yAxis: {
          type: 'category',
          data: this.barLandscape.label,
          axisTick: {
            // 是否显示坐标轴刻度
            show: false
          },
          axisLabel: {
            formatter: function(val) {
              return axisLabelFormatter(val);
            }
          },
          z: 100
        },
        // 设置grid属性定义图的大小来释放空间，使得axislabel有足够的空间
        grid: {
          left: '60px'
        },
        series: [
          {
            name: this.barLandscape.legend[0],
            // 数据内容数组
            data: this.barLandscape.data1,
            // 图表类型
            type: 'bar',
            // 图形样式
            itemStyle: {
              // 柱条的颜色
              color: '#FE991F'
            }
          },
          {
            name: this.barLandscape.legend[1],
            data: this.barLandscape.data2,
            type: 'bar',
            itemStyle: {
              color: '#53A4FC'
            }
          }
        ]
      };
      option && myChart.setOption(option);
    },
    initEchartBarStack() {
      let myChart = this.$echarts.init(document.getElementById('rt-echarts-bar-stack'), 'theme');
      // 配置项
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.barStack.title,
          // title 组件离容器右侧的距离
          right: 0
        },
        // 图例
        legend: {
          // 注意：只设置这个不会显示，series 里必须设置 name，且与 data 里对应!
          data: this.barStack.legend,
          // 图例组件离容器下侧的距离
          top: 30,
          right: 0,
          // 图例项的 icon
          icon: 'circle',
          // 设置宽度
          itemWidth: 8,
          // 设置高度
          itemHeight: 8
        },
        // x 轴
        xAxis: {
          // 坐标轴类型
          type: 'value'
        },
        // y 轴
        yAxis: {
          type: 'category',
          data: this.barStack.label,
          axisTick: {
            // 是否显示坐标轴刻度
            show: false
          },
          axisLabel: {
            formatter: function(val) {
              return axisLabelFormatter(val);
            }
          },
          z: 100
        },
        // 设置grid属性定义图的大小来释放空间，使得axislabel有足够的空间
        grid: {
          left: '60px'
        },
        series: [
          {
            name: this.barStack.legend[0],
            // 数据内容数组
            data: this.barStack.data1,
            // 图表类型
            type: 'bar',
            // 图形样式
            itemStyle: {
              // 柱条的颜色
              color: '#53A4FC'
            },
            // 数据堆叠
            stack: 'total'
          },
          {
            name: this.barStack.legend[1],
            data: this.barStack.data2,
            type: 'bar',
            itemStyle: {
              color: '#5AD8A6'
            },
            stack: 'total'
          }
        ]
      };
      option && myChart.setOption(option);
    }
  }
};
</script>
