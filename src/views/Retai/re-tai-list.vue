<!-- 视图区域 -->
<template>
  <!--界面的内容 -->
  <rt-grid ref="grid" :views="['客户']" quicksearch-placeholder="请输入客户名称" :total-record="dataTotalCount"
           @page-change="handlePageChange" @quick-search="handleSearch" @search="handleSearch" @reset="handleReset">
    <!--****工具栏（按钮）****-->
    <template slot="toolbar">
      <rt-button type="add" @click="gotoAddPage" />
      <rt-button type="delete" @click="deleteData" />
    </template>
    <!--****更多筛选****-->
    <template slot="more">
      <el-form ref="queryForm" :model="queryForm" label-position="left" label-width="120px">
        <el-row :gutter="40" type="flex">
          <el-col :span="8">
            <el-form-item label="创建时间 从" prop="dateFrom">
              <el-date-picker type="date" v-model="queryForm.dateFrom"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="创建时间 到" prop="dateTo">
              <el-date-picker type="date" v-model="queryForm.dateTo" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </template>
    <!--****表格****-->
    <el-table ref="gridTable" v-bind:data="accountData" row-key="accountid" stripe 
              v-loading="loading" @row-dblclick="gotoEditPage" @sort-change="handleSortChange" >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="name" label="客户名称" width="200px" sortable>
        <template slot-scope="scope">
          <el-button type="text" @click="gotoEditPage(scope.row)">{{scope.row.name}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="accountnumber" label="客户编码" width="180px" sortable />
      <el-table-column prop="accountclassificationcodeName" label="客户分类" />
      <el-table-column prop="telephone1" label="电话" />
      <el-table-column prop="parentaccountidName" label="上级单位" width="200px" />
      <el-table-column prop="new_accountstaff_idName" label="经销商人员" />
      <el-table-column prop="new_account_idName" label="经销商" />
      <el-table-column prop="createdon" label="创建时间" width="180px" sortable />
    </el-table>
  </rt-grid>
</template>

 <!-- 脚本区域 -->
<script>
export default {
  //定义ViewModel
  data() {
    return {
      accountData: [], //客户数据绑定
      dataTotalCount: 0, //数据总条数
      queryForm: {
        dateFrom: null, //创建时间 从
        dateTo: null, //创建时间 到
      },
      loading: false, //加载
      orderby: "createdon,descending", //排序条件
      pageCookie: "", //超过5000条的Cookie信息
    };
  },
  //界面加载时调用
  mounted() {
    this.fetchData();
  },
  //自定义的方法写在methods里面
  methods: {
    //加载数据
    fetchData() {
      this.loading = true;
      var filter = "";
      //快速搜索
      if (this.$refs.grid.quickSearch != null && this.$refs.grid.quickSearch != "")
        filter = "quicksearch=" + this.$refs.grid.quickSearch + ",";
      //创建时间 从
      if (this.queryForm.dateFrom)
        filter += "dateFrom=" + rt.formatDateTime(this.queryForm.dateFrom, "yyyy-mm-dd") + ",";
      // 创建时间 至
      if (this.queryForm.dateTo)
        filter += "dateTo=" + rt.formatDateTime(this.queryForm.dateTo, "yyyy-mm-dd") + ",";
      if (filter.length > 0) filter = filter.substring(0, filter.length - 1);
      var params = {
        pageIndex: this.$refs.grid.getPageIndex(),
        pageSize: this.$refs.grid.getPageSize(),
        filter: filter,
        orderby: this.orderby,
      };
      var url = "../api/portal/Account/GetAccountList";
      rt.get(url, params)
        .then((res) => {
          this.accountData = res.accountList;
          this.pageCookie = res.pagingCookie;
          this.dataTotalCount = res.totalRecordCount;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          rt.showErrorToast(error);
        });
    },
    //分页
    handlePageChange() {
      this.fetchData();
    },
    //搜索
    handleSearch() {
      this.fetchData();
    },
    //重置查询选项
    handleReset() {
      this.$refs.grid.quickSearch = "";
      this.$refs.queryForm.resetFields();
      this.fetchData();
    },
    //排序
    handleSortChange: function (sort) {
      if (!sort.prop) return;

      this.orderby = sort.prop + "," + sort.order;
      this.accountData = [];
      this.fetchData();
    },
    //删除数据
    deleteData() {
      var selection = this.$refs.gridTable.selection;
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
          this.loading = true;
          var params = [];
          for (var i in selection) {
            params.push(selection[i].accountid);
          }
          var url = "../api/portal/Account/DeleteAccount";
          rt.post(url, params)
            .then((res) => {
              this.loading = false;
              rt.showSuccessToast(res);
              this.fetchData();
            })
            .catch((error) => {
              this.loading = false;
              rt.showErrorToast(error);
            });
        })
        .catch((error) => {
          rt.showErrorToast("删除失败：" + error);
        });
    },
    //新建记录
    gotoAddPage() {
      this.$router.push({
        name: "account-create",
      });
    },
    //1.编辑记录
    //2.双击某一行数据，跳转编辑页面
    gotoEditPage: function (row) {
      this.$router.push({
        name: "account-edit",
        params: {
          id: row.accountid,
        },
      });
    },
  },
};
</script>

<!-- 样式区域 -->
<!-- scoped属性表示局部样式，只在该文件内有效 -->
<style scoped></style>