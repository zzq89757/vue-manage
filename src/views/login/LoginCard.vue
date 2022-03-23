<!--  -->
<template>
  <div>
    <div class="login_box"></div>
    <div class="login_box box2"></div>
    <el-card class="card">
      <h3>欢迎使用后台管理系统</h3>
      <el-input autofocus></el-input>
      <el-input></el-input>
      <el-button type="primary">登录</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='less' scoped>
.card {
  width: 580px;
  height: 390px;
  background-color: #fffcfce6;
  outline: none;
  position: absolute;
  top: calc(50% + 195px);
  left: calc(50% - 290px);
  z-index: 1000;
  /deep/ .el-card__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 54px;
    * {
      margin-bottom: 20px;
    }
  }
  h3 {
    color: #409eff;
    font-size: 26px;
    font-weight: 400;
  }
  /deep/ .el-input {
    width: 300px;
    .el-input__inner {
      height: 120px;
      height: 46px;
    }
  }
  button {
    width: 300px;
    height: 46px;
  }
}
.login_box {
  width: 580px;
  height: 390px;
  position: absolute;
  top: calc(50% + 184px);
  left: calc(50% - 276px);
  background-color: rgba(240, 248, 255, 0.294);
  border-radius: 4px;
  z-index: 999;
}
.box2 {
  top: calc(50% + 172px);
  left: calc(50% - 264px);
}
</style>