<!-- 视图区域 -->
<template>
  <div>
    <!--头部操作按钮-->
    <rt-header title="客户">
      <template slot="toolbar">
        <rt-button type="save" v-if="showSave" :loading="loading" @click="onSave('editForm')" />
      </template>
    </rt-header>
    <rt-content>
      <el-form ref="editForm" :model="editForm" :rules="rules" label-width="120px" label-position="left" >
        <!--主档数据编辑Form-->
        <rt-section title="常规">
          <el-row :gutter="50">
            <el-col :span="8">
              <el-form-item label="客户编码" prop="accountnumber">
                <el-input v-model="editForm.accountnumber" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="客户名称" prop="name">
								<el-input v-model="editForm.name" :disabled="disableform"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="客户电话" prop="telephone1">
                <el-input v-model="editForm.telephone1"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="50">
            <el-col :span="8">
              <el-form-item label="传真">
                <el-input v-model="editForm.fax"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="客户分类">
                <!-- picklist组件 -->
                <rt-picklist entity="account" attribute="accountclassificationcode"
                             v-model="editForm.accountclassificationcode" placeholder="请选择" :disabled="true" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="上级客户">
                <!-- lookup组件 -->
                <rt-lookup v-model="accountId" entity="account" id-field="accountid"
                           name-field="name" dialog-filter-fields="name" dialog-return-fields="createdon"
                           :dialog-display-fields="[{ name: 'name', label: '客户姓名' },{ name: 'createdon', label: '创建时间', width: 180 }]"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="50">
            <el-col :span="8">
              <el-form-item label="创建时间">
                <el-date-picker v-model="editForm.createdon" :disabled="true" type="datetime" placeholder="请选择创建时间" ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </rt-section>
        
        <!--明细数据-->
        <rt-section title="联系人" v-if="isVisible">
          <template slot="toolbar">
            <rt-button type="add" @click="detailAdd" />
            <rt-button type="delete" @click="detailDelete" />
          </template>
          <!-- 表格 -->
          <el-table ref="detailData" v-bind:data="detailData" row-key="contactid" stripe
                    v-loading="detailLoading" @row-dblclick="gotoDetailPage" :height="300" >
            <el-table-column type="selection" width="55" />
            <el-table-column prop="fullname" label="全名">
              <template slot-scope="scope">
                <el-button type="text" @click="gotoDetailPage(scope.row)">{{scope.row.fullname}}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="jobtitle" label="职务" />
            <el-table-column prop="emailaddress1" label="电子邮件" width="240px" />
            <el-table-column prop="telephone1" label="商务电话" />
            <el-table-column prop="gendercodeName" label="性别" width="80px" />
            <el-table-column prop="familystatuscodeName" label="婚姻状况" />
            <el-table-column prop="address1_composite" label="地址" width="350px" />
          </el-table>
          <div class="rt-grid__footer">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                           :current-page="detailPageIndex" :page-size="detailPageSize"
                           :page-sizes="detailPageSizes" :layout="detailLayout" :total="detailTotalRecord" />
          </div>
        </rt-section>      
      </el-form>
    </rt-content>
   </div>
</template>

<!-- 脚本区域 -->
<script>
export default {
  data() {
    var checkTelephone = (rule, value, callback) => {
      //国内固定电话格式：带有0的区号+连接符“-”+电话号码
      //区号：前面一个0，后面跟2-3位数字 0\d{2,3}
      //电话号码：7-8位数字：\d{7,8}
      let tel = /^0\d{2,3}-\d{7,8}$/;
      var telephone = this.editForm.telephone1;
      if (telephone &&(telephone.length == 13 || telephone.length == 12) && telephone.indexOf("-") != -1) {
        if (!telephone.match(tel)) {
          callback(new Error("请输入正确的客户电话"));
          return;
        }
      }
      callback();
    };
    return {
      loading: false, //保存按钮
      detailLoading: false, //视图加载
      showSave: true, //是否加载保存按钮
      isVisible: false, //是否隐藏
      disableform: false, //是否禁用
      accountId: {}, //account的值{id:"",name:""}
      detailData: [], //明细数据
      detailPageIndex: 1, //页码
      detailPageSize: 5, //每页显示的条数
      detailPageSizes: [5, 10, 20, 30, 40, 50], //每页显示的条数
      detailLayout: "total, sizes, prev, pager, next, jumper", //分页条布局
      detailTotalRecord: 0, //总条数
      detailPagingCookie: "", //超过5000条的Cookie信息
      editForm: {
        accountid: "", //单据id
        accountnumber: "",
        name: "",
        telephone1: "",
        fax: "",
        accountclassificationcode: 1,
        createdon: null,
      },
      rules: {
        name: [ {required: true, message: "请输入客户名称"} ],
        telephone1: [{ validator: checkTelephone, trigger: "change" }],
      },
    };
  },
  //初始化数据
  mounted() {
    this.loadData();
  },
  methods: {
    //加载数据
    loadData: function () {
      if (!rt.isNullOrWhiteSpace(this.$route.params.id))
        this.editForm.accountid = this.$route.params.id;
        
      if (!rt.isNullOrWhiteSpace(this.editForm.accountid)) {
        this.loadEditData();
        this.loadDetailData();
      }
    },
    //加载主档数据
    loadEditData: function () {
      this.loading = true;
      let url = "../api/portal/Account/GetAccountById";
      let params = {
        accountid: this.editForm.accountid,
      };
      let that = this;
      rt.get(url, params)
        .then((res) => {
          that.editForm = res;
          that.accountId = {
            id: res.parentaccountid,
            name: res.parentaccountidName,
          };
          that.isVisible = true;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          rt.showErrorToast(error);
        });
    },
    //加载明细数据
    loadDetailData: function () {
      this.detailLoading = true;
      let url = "../api/portal/Account/GetContactListByAccountId";
      let params = {
        accountId: this.editForm.accountid,
        pageIndex: this.detailPageIndex,
        pageSize: this.detailPageSize,
        pagingCookie: this.detailPagingCookie,
      };
      let that = this;
      rt.get(url, params)
        .then((res) => {
          that.detailData = res.contactList;
          that.detailPagingCookie = res.pagingCookie;
          that.detailTotalRecord = res.totalRecordCount;
          that.detailLoading = false;
        })
        .catch((error) => {
          that.detailLoading = false;
          rt.showErrorToast(error);
        });
    },
    //保存
    onSave: function (formName) {
      let that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          that.loading = true;
          let url = "../api/portal/Account/SaveAccount";
          if (that.accountId) {
            that.editForm.parentaccountid = that.accountId.id;
          }
          rt.post(url, that.editForm)
            .then((res) => {
              rt.showSuccessToast("保存成功");
              that.editForm.accountid = res;
              that.isVisible = true;
              that.loadEditData();
              that.loading = false;
            })
            .catch((error) => {
              rt.showErrorToast(error);
              that.loading = false;
            });
        } else {
          rt.showErrorToast("请重新维护数据！");
        }
      });
    },
    //添加明细
    detailAdd: function () {
      this.contactId = "";
    },
    //进入明细页
    gotoDetailPage: function (row) {
      this.contactId = row.contactid;
    },
    //删除明细
    detailDelete: function () {
      var selection = this.$refs.detailData.selection;
      if (selection == null || selection.length == 0) {
        rt.showErrorToast("请先选择要删除的单据！");
        return;
      }
      this.$confirm("确定删除？", "提示", {
        confirmButtonText: "确定",
        confirmButtonClass: "ConfirmButtonClass",
        cancelButtonText: "取消",
        cancelButtonClass: "CancelButtonClass",
        type: "warning",
      })
        .then(() => {
          var params = [];
          for (var i in selection) {
            params.push(selection[i].contactid);
          }
          var url = "../api/portal/Account/DeleteContact";
          rt.post(url, params)
            .then((res) => {
              rt.showSuccessToast(res);
              this.loadDetailData();
            })
            .catch((error) => {
              rt.showErrorToast(error);
            });
        })
        .catch((error) => {
          rt.showErrorToast("删除失败：" + error);
        });
    },
    //调整每页显示的条数
    handleSizeChange: function (pageSize) {
      this.detailPageSize = pageSize;
      this.loadDetailData();
    },
    //调整页数
    handleCurrentChange: function (pageIndex) {
      this.detailPageIndex = pageIndex;
      this.loadDetailData();
    },
  },
};
</script>

<!-- 样式区域 -->
<style scoped></style>