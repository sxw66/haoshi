<!-- 视图区域 -->
<template>
  <div>
    <rt-button type="add" @click="detailAdd" />
    <!-- 创建/编辑联系人数据 -->
    <ContactDialog
      :account-id="editForm.accountid"
      :contact-id="contactId"
      :visible.sync="needShowDialog"
      v-if="needShowDialog"
      @reload="loadData"
    />
  </div>
</template>

<!-- 脚本区域 -->
<script>
import ContactDialog from '../account/AccountDetail.vue'
export default {
  data() {
    return {
      contactId: '', //联系人id
      needShowDialog: false, //明细新建/编辑
      editForm: {
        accountid: '', //单据id
      },
    }
  },
  //组件
  components: {
    ContactDialog,
  },
  methods: {
    //加载数据
    loadData: function () {},
    //添加明细
    detailAdd: function () {
      this.contactId = ''
      this.needShowDialog = true
    },
  },
}
</script>

<!-- 样式区域 -->
<style scoped></style>
