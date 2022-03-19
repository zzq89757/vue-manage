<!--  -->
<template>
  <div id="main" style="width: 400px; height: 200px" ref="echart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {};
  },
  props: {
    chartOption: {
      type: Object,
      required: true,
      default: {
        series: [
          {
            type: "pie",
            data: [
              {
                value: 335,
                name: "直接访问",
              },
              {
                value: 234,
                name: "联盟广告",
              },
              {
                value: 1548,
                name: "搜索引擎",
              },
            ],
          },
        ],
      },
    },
  },
  components: {},

  computed: {},

  mounted() {
    // 基于准备好的dom，初始化echarts实例
    // const myChart = echarts.init(document.getElementById('main'));
    const myChart = echarts.init(this.$refs.echart);
    // console.log(myChart);
    // 绘制图表
    myChart.setOption(this.chartOption);
  },

  methods: {},
};
</script>
<style lang='scss' scoped>
</style>