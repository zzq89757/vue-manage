<template>
  <div class="home">
    <el-container style="height: 100vh">
      <el-aside width="auto">
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header>
          <common-header></common-header>
        </el-header>
        <el-main>
          <keep-alive><router-view></router-view></keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>



<script>
// @ is an alias to /src
import CommonAside from "@/components/CommonAside";
import CommonHeader from "@/components/CommonHeader";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: { CommonAside, CommonHeader },
  methods: {},
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.route-active {
  color: red;
}
</style>
