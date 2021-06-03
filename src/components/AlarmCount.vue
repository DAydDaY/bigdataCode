
<!--
实现数据降序排列并且显示前10个数据，因为不知道后端数据是需要请求还是直接推送
所以直接给定了数据做一个可视化效果先
-->
<template>
  <div class="com-container">
    <div class="com-chart"
         ref="alarmcount_ref"></div>
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
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    clearInterval(this.timeId)
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {
    // 初始化echarts
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.alarmcount_ref, 'chalk')
      // 图表初始化
      const initOption = {
        title: [{
          text: '▍报警类型统计',
          left: 20,
          top: 20
        },
        {
          text: '统计(位置需要自适应）',
          left: 200,
          top: 20
        }],
        legend: {
          data: ['疲劳驾驶', '超速行驶', '急加速', '急减速', '急转弯', '超经济区运行', '怠速空调', '过长怠速', '空挡滑行', '']
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
            name: 'all',
            type: 'pie',
            stack: '类型',
            emphasis: {
              focus: 'series'
            }
          },
          {
            realtimeSort: true,
            name: '疲劳驾驶',
            type: 'bar',
            stack: '类型',
            emphasis: {
              focus: 'series'
            }
          },
          {
            name: '超速行驶',
            type: 'bar',
            stack: '类型',
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
        legend: {
          data: ['疲劳驾驶', '超速行驶', '急加速', '急减速', '急转弯', '超经济区运行', '怠速空调', '过长怠速', '空挡滑行', '大油门']
        },
        xAxis: {
          type: 'category',
          data: [],
          max: 10
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [500, 300, 166, 234, 452, 345, 123, 236]
          },
          {
            data: [50, 30, 16, 34, 52, 45, 23, 36]
          }
        ]
      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter () {
      // this.$refs.alarmcount_ref.offsetWidth
      const titleFontSize = this.$refs.alarmcount_ref.offsetWidth / 100 * 3.6
      console.log(titleFontSize)
      const adapterOption = {
        tooltip: {
          axisPointer: {
            lineStyle: {
              width: titleFontSize
            }
          }
        },
        title: {
          textStyle: {
            fontSize: titleFontSize * 0.5
          }
        },
        series: [
          {
            barWidth: titleFontSize * 1.7
          },
          {
            barWidth: titleFontSize * 1.7
          }
        ]
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    }
  }
}
</script>

<style>
</style>
