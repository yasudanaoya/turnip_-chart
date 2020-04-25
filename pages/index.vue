<template lang="pug">
  el-main
    input-form(
      @submit="submit"
    )
    preview-table(
      :results="results"
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
        { dateTime: '日曜日', sunshine: '-', price: 100 },
        { dateTime: '月曜日', sunshine: '午前', price: 0 },
        { dateTime: '月曜日', sunshine: '午後', price: 0 },
        { dateTime: '火曜日', sunshine: '午前', price: 0 },
        { dateTime: '火曜日', sunshine: '午後', price: 0 },
        { dateTime: '水曜日', sunshine: '午前', price: 0 },
        { dateTime: '水曜日', sunshine: '午後', price: 0 },
        { dateTime: '木曜日', sunshine: '午前', price: 0 },
        { dateTime: '木曜日', sunshine: '午後', price: 0 },
        { dateTime: '金曜日', sunshine: '午前', price: 0 },
        { dateTime: '金曜日', sunshine: '午後', price: 0 },
        { dateTime: '土曜日', sunshine: '午前', price: 0 },
        { dateTime: '土曜日', sunshine: '午後', price: 0 }
      ]
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
    }
  }
}
</script>
