<template>
    <div id="app">
        <el-col :span="24">
            <div id="main"></div>
        </el-col>
    </div>
</template>

<script>
export default {
  data() {
    return {
      myChart: "",
      option: {
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  },
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("main"))
    this.setOptionEcharts(this.option, this.myChart)
  },
  methods: {
    setOptionEcharts(option, myChart) {
      myChart.clear()
      myChart.hideLoading()
      myChart.setOption(option)
      window.onresize = myChart.resize
    }
  }
};
</script>
<style>
#main {
    width: 100%;
}
</style>
