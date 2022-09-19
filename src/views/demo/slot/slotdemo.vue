<template>
  <div>
    <!-- <children> 默认插槽 demo</children> -->
    <hr />
    <!-- <h1>具名插槽</h1>
    <children>
      <template v-slot:header>
        <div class="header">header具名插槽1</div>
      </template>
      <template slot="center">
        <div class="center">center具名插槽1</div>
      </template>
    </children> -->
    <!-- 作用域插槽-获取子组件中的数据 -->
    <children>
      写法一
      <template v-slot:default="itemsProps">
        <div class="default">共计{{ itemsProps.items.num }}人</div>
      </template>
      <!-- 写法二
      <template slot-scope="scope">
        <div>共计 {{ scope.objitems.num }}人</div>
      </template> -->
    </children>
  </div>
</template>

<script>
import children from '@/views/demo/slot/children'
export default {
  components: {
    children,
  },
  data() {
    return {}
  },
}
</script>

<style></style>
