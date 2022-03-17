<!--  -->
<template>
  <div class="home">
    <div class="main_left">
      <el-card class="user_card"> </el-card>
      <el-card class="brand_card"> </el-card>
    </div>
    <div class="main_right">
      <el-card class="purchase_graph"></el-card>
      <el-card class="line_graph"></el-card>
      <div class="graph">
        <el-card class="mini_graph"></el-card>
        <el-card class="mini_graph"></el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style lang='less' scoped>
.home {
  display: flex;
  justify-content: space-between;
  .main_left {
    display: flex;
    flex-direction: column;
  }
  .main_right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
.user_card {
  width: 400px;
  height: 200px;
  margin-bottom: 20px;
}
.brand_card {
  width: 400px;
  height: 400px;
}
.purchase_graph {
  height: 140px;
  width: 860px;
}
.line_graph {
  height: 180px;
}
.graph {
  display: flex;
  .mini_graph {
    height: 180px;
    width: 430px;
  }
}
// .bar_graph {
//   height: 180px;
//   width: 430px;
// }
// .pie_graph {
//   height: 180px;
//   width: 430px;
// }
</style>