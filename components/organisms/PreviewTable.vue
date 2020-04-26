<template lang="pug">
  .preview-table
    .table-desc
      span 入力する日付をクリックで選択することも可能です
    el-table(
      :data="results"
      border
      size="mini"
      :span-method="objectSpanMethod"
      @cell-click="onClick"
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
export default {
  props: {
    results: {
      type: Array,
      required: true
    }
  },

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

  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          return {
            rowspan: 1,
            colspan: 2
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
      } else if (rowIndex === 0) {
        if (columnIndex === 1) {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    onClick(row, column, cell, event) {
      this.$emit('set-date', row)
    }
  }
}
</script>

<style lang="scss" scoped>
.preview-table {
  width: 40%;
  float: left;
  margin: 2% 5%;
  .table-desc {
    margin-bottom: 1vh;
  }
}
</style>
