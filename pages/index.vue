<template lang="pug">
  el-main
    input-form(
      @submit="submit"
      ref="input"
    )
    preview-table(
      :results="results"
      @set-date="setDate"
    )
    chart-area(
      :results="results"
    )

</template>

<script>
import InputForm from '../components/organisms/InputForm'
import PreviewTable from '../components/organisms/PreviewTable'
import ChartArea from '../components/organisms/ChartArea'

export default {
  components: {
    InputForm,
    PreviewTable,
    ChartArea
  },

  data() {
    return {
      results: [
        { dateTime: '日曜日', sunshine: '', price: '' },
        { dateTime: '月曜日', sunshine: '午前', price: '' },
        { dateTime: '月曜日', sunshine: '午後', price: '' },
        { dateTime: '火曜日', sunshine: '午前', price: '' },
        { dateTime: '火曜日', sunshine: '午後', price: '' },
        { dateTime: '水曜日', sunshine: '午前', price: '' },
        { dateTime: '水曜日', sunshine: '午後', price: '' },
        { dateTime: '木曜日', sunshine: '午前', price: '' },
        { dateTime: '木曜日', sunshine: '午後', price: '' },
        { dateTime: '金曜日', sunshine: '午前', price: '' },
        { dateTime: '金曜日', sunshine: '午後', price: '' },
        { dateTime: '土曜日', sunshine: '午前', price: '' },
        { dateTime: '土曜日', sunshine: '午後', price: '' }
      ]
    }
  },

  watch: {
    results: {
      deep: true,
      handler(newVal) {
        localStorage.setItem('results', JSON.stringify(newVal))
      }
    }
  },

  mounted() {
    if (localStorage.results) {
      this.results = JSON.parse(localStorage.results)
    }
  },

  methods: {
    submit(param) {
      const targetIndex = this.results.findIndex((element) => {
        if (
          element.dateTime === param.dateTime &&
          element.sunshine === param.sunshine
        ) {
          return true
        } else if (param.dateTime === '日曜日') {
          return true
        }
      })
      Object.assign(this.results[targetIndex], param)
    },

    setDate(date) {
      this.$refs.input.setDate(date)
    }
  }
}
</script>
