<template>
  <rt-view v-title="'Echarts 图表 混合使用'">
    <div class="container">
      <div id="rt-echarts-mixin" class="rt-charts"></div>
    </div>
  </rt-view>
</template>

<script>
export default {
  data() {
    return {
      // 混合使用
      mixin: {
        title: 'SFA产品',
        legend: [{ name: '预计商机金额', icon: 'circle' }, { name: '预计商机个数' }],
        label: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
        data: [150, 230, 224, 318, 135, 147, 260]
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initEchartMixin();
    },
    initEchartMixin() {
      let myChart = this.$echarts.init(document.getElementById('rt-echarts-mixin'), 'theme');
      // 配置项
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.mixin.title,
          // title 组件离容器右侧的距离
          right: 0
        },
        // 图例
        legend: {
          // 注意：只设置这个不会显示，series 里必须设置 name，且与 data 里对应!
          data: this.mixin.legend,
          // 图例组件离容器下侧的距离
          top: 30,
          left: 'center',
          // 设置宽度
          itemWidth: 12,
          // 设置高度
          itemHeight: 8
        },
        // x 轴
        xAxis: {
          // 坐标轴类型
          type: 'category',
          // 类目数据
          data: this.mixin.label,
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
        yAxis: [
          {
            type: 'value',
            name: '/万元',
            nameGap: 20,
            nameTextStyle: {
              align: 'right'
            }
          },
          {
            type: 'value',
            name: '/个数',
            nameGap: 20,
            nameTextStyle: {
              align: 'left'
            }
          }
        ],
        series: [
          {
            name: this.mixin.legend[0].name,
            // 数据内容数组
            data: this.mixin.data,
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
          },
          {
            name: this.mixin.legend[1].name,
            data: this.mixin.data,
            type: 'line',
            yAxisIndex: 1,
            itemStyle: {
              color: '#5AD8A6'
            },
            symbol: 'none'
          }
        ]
      };
      option && myChart.setOption(option);
    }
  }
};
</script>
