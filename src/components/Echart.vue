<!--  -->
<template>
  <div id="main" style="width: 100%; height: 260px" ref="echart"></div>
</template>

<script>
import * as echarts from "echarts";
//带xy轴的Echart类
class AxisChart {
  constructor(data) {
    this.option = {
      legend: {
        // 图例文字颜色
        textStyle: {
          color: "#333",
        },
      },
      grid: {
        left: "20%",
      },
      // 提示框
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category", // 类目轴
        data: data.Xais,
        axisLine: {
          lineStyle: {
            color: "#17b3a3",
          },
        },
        axisLabel: {
          interval: 0,
          color: "#333",
        },
      },
      yAxis: [
        {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
        },
      ],
      color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
      series: data.series,
    }
  }

};
//不带xy轴的Echart类
class NormalChart {
  constructor(data) {
    this.option = {
      tooltip: {
        trigger: "item",
      },
      color: [
        "#0f78f4",
        "#dd536b",
        "#9462e5",
        "#a6a6a6",
        "#e1bb22",
        "#39c362",
        "#3ed1cf",
      ],
      series: [{ type: 'pie', data: data.series }],
    }
  }
}
export default {
  watch: {
    chartData: {
      handler: function () {
        this.initChart(this.chartData)
      },
      deep: true
    }
  },
  props: {
    chartData: {
      type: Object,
      required: true,
      default:
        () => { },
    },
  },
  methods: {
    //初始化Echart
    initChart(data) {
      const myChart = echarts.init(this.$refs.echart);
      //如果有坐标相关信息则为折线图或者柱状图，没有则为饼图
      let option = data.Xais ? new AxisChart(data).option : new NormalChart(data).option;
      myChart.setOption(option);
      // console.log(option);
    }
  },
};
</script>