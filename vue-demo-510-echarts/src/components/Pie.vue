<template>
  <div class="hello">
    <div id="pieChart" class="chart-container"></div>
    <div id="lineChart" class="chart-container"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      pieCharts: null,
      pieOption: {
        title: {
          text: '星级分布'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: true,
            label: {
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            data: [
              { value: 335, name: '二星' },
              { value: 310, name: '三星' },
              { value: 234, name: '四星' },
              { value: 135, name: '五星' }
            ]
          }
        ]
      },
      lineCharts: null,
      lineOption: {
        title: {
          text: '消费逐月消费趋势'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['差旅', '个人']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {
              show: false
            }
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
          type: 'value',
          name: '(万)',
          nameLocation: 'start',
          nameTextStyle: {
            fontSize: 14,
            padding: [0, 50, 0, 0]
          }
        },
        series: [
          {
            name: '差旅',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '个人',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310, 120, 132, 101, 134, 90, 230, 210]
          }
        ]
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.pieCharts = this.$echarts.init(document.getElementById('pieChart'))
      this.pieCharts.setOption(this.pieOption)
      window.addEventListener('resize', this.handleResize)
      this.lineCharts = this.$echarts.init(document.getElementById('lineChart'))
      this.lineCharts.setOption(this.lineOption)
      window.addEventListener('resize', this.handleResize)
    })
  },
  methods: {
    handleResize () {
      this.pieCharts.resize()
      this.lineCharts.resize()
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
    this.pieCharts.dispose()
    this.lineCharts.dispose()
  }
}
</script>

<style>
.chart-container {
  border-radius: 4px;
  height: 400px;
  background: #fff;
  box-shadow: 0 1px 10px 2px rgba(182, 191, 196, 0.5);
  padding: 20px;
}
</style>
