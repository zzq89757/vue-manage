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
                name: "小米",
                value: 2999,
              },
              {
                name: "苹果",
                value: 5999,
              },
              {
                name: "vivo",
                value: 1500,
              },
              {
                name: "oppo",
                value: 1999,
              },
              {
                name: "魅族",
                value: 2200,
              },
              {
                name: "三星",
                value: 4500,
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