<!-- 视图区域 -->
<template>
  <!-- 对话框 -->
  <el-dialog title="联系人" :visible="visible" :before-close="detailClose" :close-on-presss-escape="false" >
    <el-form ref="editForm" :model="editForm" :rules="rules" label-width="80px" label-position="left" >
      <el-row :gutter="20" class="rt-portal-form-row">
        <el-col :span="12">
          <el-form-item label="姓" prop="lastname">
            <el-input v-model="editForm.lastname"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="名" prop="firstname">
            <el-input v-model="editForm.firstname"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="rt-portal-form-row">
        <el-col :span="12">
          <el-form-item label="职务" prop="jobtitle">
            <el-input v-model="editForm.jobtitle"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电子邮件" prop="emailaddress1">
            <el-input v-model="editForm.emailaddress1"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="rt-portal-form-row">
        <el-col :span="12">
          <el-form-item label="商务电话" prop="telephone1">
            <el-input v-model="editForm.telephone1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="性别" prop="gendercode">
            <rt-picklist entity="contact" attribute="gendercode" v-model="editForm.gendercode" placeholder="请选择" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="rt-portal-form-row">
        <el-col :span="12">
          <el-form-item label="省份" prop="address1_stateorprovince">
            <el-input v-model="editForm.address1_stateorprovince"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="婚姻状况" prop="familystatuscode">
            <rt-picklist entity="contact" attribute="familystatuscode" v-model="editForm.familystatuscode" placeholder="请选择" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="detailClose">取消</el-button>
      <el-button type="primary" :loading="loading" @click="onSave('editForm')">确定</el-button>
    </div>
  </el-dialog>
</template>

<!-- 脚本区域 -->
<script>
export default {
  props: {
    visible: {
      default: false,
    },
    accountId: {
      type: String,
      required: true,
    },
    contactId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: false, //加载
      editForm: {
        contactid: "",
        firstname: "",
        lastname: "",
        jobtitle: "",
        emailaddress1: "",
        telephone1: "",
        gendercode: null,
        familystatuscode: null,
        address1_stateorprovince: "",
      },
      rules: { 
        firstname: [ { required: true, message: "请输入联系人的名" } ],
        lastname: [ { required: true, message: "请输入联系人的姓" } ],
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    //加载数据
    fetchData() {
      if (rt.isNullOrWhiteSpace(this.contactId)) return;

      let url = "../api/portal/Account/GetContactById";
      let params = {
        contactId: this.contactId,
      };
      rt.get(url, params)
        .then((res) => {
          this.editForm = res;
        })
        .catch((error) => {
          rt.showErrorToast(error);
        });
    },
    //取消
    detailClose() {
      if (this.contactId) {
        this.$refs.editForm.resetFields();
      }
      this.$emit("update:visible", false);
    },
    //确定
    onSave() {
      this.$refs["editForm"].validate((valid) => {
        if (valid) {
          let that = this;
          that.loading = true;
          let url = "../api/portal/Account/SaveContact";
          that.editForm.contactid = this.contactId;
          that.editForm.parentcustomerid = this.accountId;
          rt.post(url, that.editForm)
            .then((res) => {
              rt.showSuccessToast("保存成功");
              that.$refs.editForm.resetFields();
              that.loading = false;
              that.$emit("reload");
              that.$emit("update:visible", false);
            })
            .catch((error) => {
              rt.showErrorToast(error);
              that.loading = false;
            });
        } else {
          rt.showErrorToast("请输入必填项");
        }
      });
    },
  },
};
</script>

<!-- 样式区域 -->
<style scoped></style>