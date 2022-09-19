<template>
  <div>
    <h1>这是一个插槽组件</h1>
    <!-- <div><slot>默认插槽</slot></div>
    <slot name="header">具名插槽</slot>
    <slot name="center">具名插槽</slot> -->
    <slot v-bind:items="objitems">写法一作用域插槽1{{ objitems.name }}</slot>
    <!-- <slot :objitems="objitems">写法二作用域插槽2{{ objitems.name }}</slot> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      objitems: {
        name: '👌',
        num: '23',
      },
    }
  },
}
</script>

<style></style>