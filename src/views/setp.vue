<template>
  <div>
    <setp v-model="num" :precision="2" :step="0.11" :max="10" ></setp>
  </div>
</template>

<script>
import setp from '../components/setp.vue'
export default {
  components: {
    setp,
  },
  data() {
    return {
      num: 0.777,
    }
  },
}
</script>

<style></style>
