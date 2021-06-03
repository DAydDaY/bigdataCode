<template>
  <div class="com-container">
    <div class="com-chart"
         ref="survey_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.survey_ref, 'chalk')
      // 图表初始化
      const initOption = {
        title: {
          text: '▍企业概况(图例出不来）',
          left: 20,
          top: 20
        },
        legend: {
          data: ['当前企业', '平均值']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '疲劳驾驶' },
            { name: '超速行驶' },
            { name: '急加速' },
            { name: '急减速' },
            { name: '急转弯' },
            { name: '超经济区运行' },
            { name: '怠速空调' },
            { name: '过长怠速' },
            { name: '空挡滑行' },
            { name: '大油门' }

          ]
        },
        series: [
          {
            type: 'radar',
            data: [
              {
                name: '当前企业'
              },
              {
                name: '平均值'
              }
            ]
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
        legend: {
          data: ['当前企业', '平均值']
        },
        series: [
          {
            type: 'radar',
            data: [
              {
                value: [123, 234, 457, 345, 234, 712, 123, 623, 675, 234]
              },
              {
                value: [123, 712, 123, 623, 675, 234, 923, 276, 123, 787]
              }
            ]
          }
        ]
      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter () {
      // this.$refs.drivertop_ref.offsetWidth
      const titleFontSize = this.$refs.survey_ref.offsetWidth / 100 * 3.6
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
