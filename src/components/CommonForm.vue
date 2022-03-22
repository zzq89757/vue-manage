<!-- 用户管理顶部新增用户和搜索模块组件 -->
<template>
  <div>
    <div class="message">
      <div>
        <span>姓名</span>
        <el-input></el-input>
      </div>
      <div>
        <span>年龄</span>
        <el-input></el-input>
      </div>
      <div>
        <span>性别</span>
        <el-input></el-input>
      </div>
      <div>
        <span>生日</span>
        <el-date-picker v-model="birthDate" type="date" placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="addr">
        <span>住址</span>
        <el-input></el-input>
      </div>
    </div>
    <div class="btn_box">
      <el-button type="primary">确认</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      birthDate: "",
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style lang='less' scoped>
.message {
  display: flex;
  flex-wrap: wrap;
  div {
    width: 48%;
    display: flex;
    align-items: center;
    span {
      margin: 20px;
    }
  }
}
.btn_box {
  margin: 4px;
  display: flex;
  justify-content: flex-end;
  button {
    margin: 8px;
  }
}
</style>