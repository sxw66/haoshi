<template>
  <div class="rt-charts">
    <v-chart :options="options" />
  </div>
</template>

<script>
export default {
  name: 'RtCharts',
  props: {
    options: Object,
    require: true,
  },
}
</script>
