<template>
  <rt-view v-title="'Echarts 图表'">
    <rt-content>
      <div class="container">
        <p class="title">rt-charts</p>
        <rt-button-v2 type="primary" @click="handleClick('rt-charts')">rt-charts</rt-button-v2>

        <p class="title">折线图</p>
        <rt-button-v2 type="primary" @click="handleClick('line')">折线图</rt-button-v2>

        <p class="title">柱状图</p>
        <rt-button-v2 type="primary" @click="handleClick('bar')">柱状图</rt-button-v2>

        <p class="title">饼图</p>
        <rt-button-v2 type="primary" @click="handleClick('pie')">饼图</rt-button-v2>

        <p class="title">雷达图</p>
        <rt-button-v2 type="primary" @click="handleClick('radar')">雷达图</rt-button-v2>

        <p class="title">仪表盘</p>
        <rt-button-v2 type="primary" @click="handleClick('gauge')">仪表盘</rt-button-v2>

        <p class="title">漏斗图</p>
        <rt-button-v2 type="primary" @click="handleClick('funnel')">漏斗图</rt-button-v2>

        <p class="title">其他图表（混合使用）</p>
        <rt-button-v2 type="primary" @click="handleClick('mixin')"
          >其他图表（混合使用）</rt-button-v2
        >
      </div>
    </rt-content>
  </rt-view>
</template>

<script>
export default {
  data() {
    return {
      types: ['line', 'bar', 'pie', 'radar', 'gauge', 'funnel', 'mixin', 'rt-charts']
    };
  },
  methods: {
    handleClick(type) {
      if (!this.types.includes(type)) {
        return;
      }
      this.$router.push({
        name: `echarts-${type}`
      });
    }
  }
};
</script>
