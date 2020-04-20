<template lang="pug">
  el-main
    input-form
    preview-table
    chart-area
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
  }
}
</script>
