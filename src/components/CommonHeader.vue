<!--  -->
<template>
  <div class="header">
    <div class="l-content">
      <el-button
        icon="el-icon-menu"
        size="mini"
        @click="collapse()"
      ></el-button>
      <h3 style="color: #fff">首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown size="mini">
        <span><img :src="usrImg" alt="" /></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut()">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui';
export default {
  data() {
    return {
      usrImg: require("../assets/images/user.png"),
    };
  },
  methods: {
    collapse() {
      this.$store.commit("alterCollapse");
    },
    logOut(){
      this.$store.commit('cleanToken');
      Message({
        type:"success",
        message:"注销成功"
      })
      this.$router.push('login');
    }
  },
};
</script>
<style lang='less' scoped>
.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  .l-content {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 10px;
    }
  }
  .r-content {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      border-radius: 50%;
      height: 40px;
    }
  }
  // 下拉菜单样式
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>