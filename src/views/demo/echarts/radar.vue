<template>
  <rt-view v-title="'Echarts 图表 雷达图'">
    <div class="container">
      <div id="rt-echarts-radar" class="rt-charts"></div>
      <div id="rt-echarts-radar-project" class="rt-charts"></div>
    </div>
  </rt-view>
</template>

<script>
export default {
  data() {
    return {
      radar: {
        title: '雷达图',
        legend: ['预期卖出', '实际卖出'],
        data: [
          {
            value: [39, 42, 65, 39, 35, 59],
            name: '预期卖出'
          },
          {
            value: [60, 65, 40, 62, 23, 45],
            name: '实际卖出'
          }
        ]
      },
      radarProject: {
        title: '毛戈平移动端项目',
        legend: ['MA', '专柜平均', '区域平均'],
        data: [
          {
            value: [39, 42, 65, 39, 35, 59, 68, 80, 70],
            name: 'MA'
          },
          {
            value: [60, 65, 40, 62, 23, 45, 30, 81, 43],
            name: '专柜平均'
          },
          {
            value: [50, 55, 70, 42, 53, 40, 30, 58, 78],
            name: '区域平均'
          }
        ]
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initEchartRadar();
      this.initEchartRadarProject();
    },
    initEchartRadar() {
      let myChart = this.$echarts.init(document.getElementById('rt-echarts-radar'), 'theme');
      // 配置项
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.radar.title,
          // title 组件离容器右侧的距离
          right: 0
        },
        // 图例
        legend: {
          // 图例项的 icon
          icon: 'circle',
          // 设置宽度
          itemWidth: 10,
          // 设置高度
          itemHeight: 10,
          bottom: 0,
          left: 'center',
          // 设置间距
          itemGap: 60
        },
        // 雷达图坐标系组件，只适用于雷达图
        radar: {
          // 雷达图每个指示器名称的配置项
          name: {
            // 文字的颜色
            color: '#555'
          },
          indicator: [
            { name: '条件1', max: 100 },
            { name: '条件2', max: 100 },
            { name: '条件3', max: 100 },
            { name: '条件4', max: 100 },
            { name: '条件5', max: 100 },
            { name: '条件6', max: 100 }
          ]
          // 坐标轴在 grid 区域中的分隔区域，默认不显示。
          // splitArea: {
          //   show: true,
          //   areaStyle: {
          //     color: ['#fff', '#ccc']
          //   }
          // }
        },
        series: [
          {
            // 图表类型
            type: 'radar',
            // 系列中的数据内容数组
            data: this.radar.data,
            // 单个拐点文本的样式设置
            label: {
              // 是否显示标签
              show: true
            }
          }
        ]
      };
      option && myChart.setOption(option);
    },
    initEchartRadarProject() {
      let myChart = this.$echarts.init(
        document.getElementById('rt-echarts-radar-project'),
        'theme'
      );
      // 配置项
      var option = {
        // 标题
        title: {
          // 主标题文本，支持使用 \n 换行。
          text: this.radarProject.title,
          // title 组件离容器右侧的距离
          right: 0
        },
        // 图例
        legend: {
          // 图例项的 icon
          icon: 'circle',
          // 设置宽度
          itemWidth: 10,
          // 设置高度
          itemHeight: 10,
          bottom: 0,
          left: 'center',
          // 设置间距
          itemGap: 60
        },
        // 雷达图坐标系组件，只适用于雷达图
        radar: {
          // 雷达图每个指示器名称的配置项
          name: {
            // 文字的颜色
            color: '#555'
          },
          indicator: [
            { name: '周护', max: 100 },
            { name: '美妆工具', max: 100 },
            { name: '眼部彩妆', max: 100 },
            { name: '联名', max: 100 },
            { name: '其他', max: 100 },
            { name: '清洁', max: 100 },
            { name: '光影', max: 100 },
            { name: '日护', max: 100 }
          ]
          // 坐标轴在 grid 区域中的分隔区域，默认不显示。
          // splitArea: {
          //   show: true,
          //   areaStyle: {
          //     color: ['#fff', '#ccc']
          //   }
          // }
        },
        series: [
          {
            // 图表类型
            type: 'radar',
            // 系列中的数据内容数组
            data: this.radarProject.data
          }
        ]
      };
      option && myChart.setOption(option);
    }
  }
};
</script>
