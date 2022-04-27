<template>
  <rt-view v-title="'RtEcharts 图表'">
    <div class="container">
      <rt-charts :options="options" /></div
  ></rt-view>
</template>

<script>
export default {
  data() {
    return {
      line: {},
      options: {}
    };
  },
  mounted() {
    // setTimeout模拟异步请求
    setTimeout(() => {
      this.line = {
        title: '对比折线图',
        titleSmooth: '曲线折线图',
        legend: ['预期卖出', '实际卖出'],
        label: [
          '电饭煲',
          '电压力锅',
          '电炖锅',
          '养生壶',
          '电火锅',
          '料理机',
          '破壁机',
          '煎烤机',
          '电饼档',
          '高压锅'
        ],
        data1: [150, 230, 224, 318, 135, 147, 260, 100, 240],
        data2: [250, 130, 254, 118, 235, 180, 360, 200, 340]
      };
      this.options = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.line.title,
          // title 组件离容器右侧的距离
          right: 0
        },
        // 图例
        legend: {
          // 注意：只设置这个不会显示，series 里必须设置 name，且与 data 里对应!
          data: this.line.legend,
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
          data: this.line.label,
          // 坐标轴刻度相关设置
          axisTick: {
            // 是否显示坐标轴刻度
            show: false
          },
          // 坐标轴刻度标签的相关设置
          axisLabel: {
            // 刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
            // 旋转的角度从 -90 度到 90 度。
            rotate: 30,
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
            // 与 legend 内值对应
            name: this.line.legend[0],
            // 数据内容数组
            data: this.line.data1,
            // 图表类型
            type: 'line',
            // 图形样式
            itemStyle: {
              // 线条颜色，支持 rgba 和 16进制格式
              color: '#5798EF'
            },
            // 线条粗细，默认为2
            lineStyle: {
              // width: 2
            },
            // 标记的图形
            symbol: 'none'
          },
          {
            name: this.line.legend[1],
            data: this.line.data2,
            type: 'line',
            itemStyle: {
              color: '#5AD8A6'
            },
            symbol: 'none'
          }
        ]
      };
    }, 500);
  }
};
</script>
