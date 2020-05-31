import Vue from 'vue'
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

Vue.component('line-chart', {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    options: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  }
})
