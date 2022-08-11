<template>
  <div class="homeBox">
    <components :is="componentOn" />
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    > 
      <el-menu-item :index="index+''" v-for="(item,index) in tabledata" :key="index">{{item}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import adminComponent from "./admin";
import userComponent from "./user";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userName"]),
    componentOn() {
      if (this.userName === "admin") {
        return "adminComponent";
      } else {
        return "userComponent";
      }
    }
  },
  data() {
    return {
      activeIndex: "1",
      tabledata: ["首页", "菜单", "我的"]
    };
  },
  components: {
    adminComponent,
    userComponent
  },
  mounted() {
    // window.console.log("刷新");
  },
  methods: {
    handleSelect() {
      window.console.log("刷新");
    }
  }
};
</script>
