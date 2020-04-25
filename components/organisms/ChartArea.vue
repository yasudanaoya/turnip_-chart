<template lang="pug">
  .chart-area
    line-chart(
      :chartData="getResult"
      :options="chartOption"
    )
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      required: true
    }
  },

  computed: {
    getResult() {
      const horizontal = []
      const bells = []
      this.results.forEach((element) => {
        horizontal.push(element.dateTime + ' ' + element.sunshine)
        bells.push(element.price)
      })

      return {
        labels: horizontal,
        datasets: [
          {
            label: 'カブ価',
            data: bells,
            backgroundColor: 'rgba(198, 226, 255, 0.5)',
            borderColor: [
              'rgba(198, 226, 255, 1)',
              'rgba(211, 156, 181, 1)',
              'rgba(211, 156, 181, 1)',
              'rgba(207, 114, 80, 1)',
              'rgba(207, 114, 80, 1)',
              'rgba(213, 234, 216, 1)',
              'rgba(213, 234, 216, 1)',
              'rgba(74, 154, 152, 1)',
              'rgba(74, 154, 152, 1)',
              'rgba(255, 251, 0, 1)',
              'rgba(255, 251, 0, 1)',
              'rgba(159, 160, 160, 1)',
              'rgba(159, 160, 160, 1)'
            ],
            borderWidth: 1
          }
        ],
        chartOption: {
          maintainAspectRatio: false
        }
      }
    }
  },

  methods: {
    addClass() {
      document
        .querySelector('.chartjs-size-monitor')
        .parentElement.setAttribute('class', 'half-width')
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-area {
  float: right;
  position: relative;
  width: 40%;
  height: 50%;
  margin: 0 5%;
}
</style>
