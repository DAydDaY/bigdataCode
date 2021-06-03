// /drivertop
<!--
实现数据降序排列并且显示前10个数据，因为不知道后端数据是需要请求还是直接推送
所以直接给定了数据做一个可视化效果先
-->
<template>
  <div class="com-container">
    <div class="com-chart"
         ref="drivertop_ref"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartInstance: null
    }
  },
  mounted () {
    this.initChart()
    this.getData()
    window.addEventListener('resize',)
  },
  methods: {
    // 初始化echarts
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.drivertop_ref, 'chalk')
      // 图表初始化
      const initOption = {
        title: {
          text: '▍企业优秀驾驶员排名TOP10',
          left: 20,
          top: 20
        },
        legend: {
          data: ['安全指标', '经济指标']
        },
        xAxis: {
          type: 'category',
          max: 10
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            realtimeSort: true,
            name: '安全指标',
            type: 'bar',
            stack: '指标',
            emphasis: {
              focus: 'series'
            }
          },
          {
            name: '经济指标',
            type: 'bar',
            stack: '指标',
            emphasis: {
              focus: 'series'
            }
          }
        ]
      }
      this.chartInstance.setOption(initOption)
    },
    getData () {
      this.updateChat()
    },
    updateChat () {
      const dataOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        title: {
          text: '▍企业优秀驾驶员排名TOP10',
          textstyle: {
            color: 'blue'
          },
          left: 20,
          top: 20
        },
        legend: {
          data: ['安全指标', '经济指标']
        },
        xAxis: {
          type: 'category',
          data: ['小红', '小刚', '小明', '小陈', '小李', '小许', '小金', '小赵'],
          max: 10
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            realtimeSort: true,
            name: '安全指标',
            type: 'bar',
            barWidth: 70,
            stack: '指标',
            emphasis: {
              focus: 'series'
            },
            data: [500, 300, 166, 234, 452, 345, 123, 236]
          },
          {
            name: '经济指标',
            type: 'bar',
            barWidth: 70,
            stack: '指标',
            emphasis: {
              focus: 'series'
            },
            data: [50, 30, 16, 34, 52, 45, 23, 36]
          }
        ]
      }
      this.chartInstance.setOption(dataOption)
    }
  }
}
</script>

<style>
</style>
