<template lang="pug">
  el-table(
    :data="results"
    border
    size="mini"
    :span-method="objectSpanMethod"
  )
    el-table-column(
      prop="dateTime"
      label="曜日"
    )
    el-table-column(
      prop="sunshine"
      label="午前 / 午後"
    )
    el-table-column(
      prop="price"
      label="値段"
    )
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      weekdays: [
        '日曜日',
        '月曜日',
        '火曜日',
        '水曜日',
        '木曜日',
        '金曜日',
        '土曜日'
      ]
    }
  },

  computed: {
    ...mapState('result', ['results'])
  },

  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          return {
            rowspan: 1,
            colspan: 1
          }
        } else if (rowIndex % 2 === 1) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  width: 33%;
  margin: 0 33%;
}
</style>
