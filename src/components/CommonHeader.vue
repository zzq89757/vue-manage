<!--  -->
<template>
  <div class="header">
    <div class="l-content">
      <el-button icon="el-icon-menu" size="mini" @click="collapse()"></el-button>
      <h3 style="color: #fff">首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown size="mini">
        <span><img :src="usrImg" alt="" /></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  
  created(){
    console.log(this.$store);
  },
  data() {
    return {
      usrImg: require("../assets/images/user.png"),
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    collapse(){
      this.$store.commit('alterCollapse')
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
    width: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
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
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>