<template lang="pug">
  el-table(
    :data="tableData"
    border
  )
    el-table-column(
      prop="dateTime"
      label="曜日"
    )
    el-table-column(
      prop="sunshine"
      label="AM / PM"
    )
    el-table-column(
      prop="price"
      label="値段"
    )
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          dateTime: '日',
          sunshine: '-',
          price: 108
        },
        {
          dateTime: '月',
          sunshine: '午前',
          price: 142
        },
        {
          dateTime: '月',
          sunshine: '午後',
          price: 141
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  width: 60%;
}
</style>
