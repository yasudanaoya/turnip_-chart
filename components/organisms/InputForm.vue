<template lang="pug">
  .input-form
    el-select(
      v-model="dateTime"
      clearable
      placeholder="曜日"
    )
      el-option(
        v-for="item in dateOption"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      )
    el-radio(
      v-model="sunshine"
      label="am"
    ) 午前
    el-radio(
      v-model="sunshine"
      label="pm"
    ) 午後
    el-input(
      placeholder="株価(ベル)"
      v-model="price"
      clearable
    )
</template>

<script>
export default {
  data() {
    return {
      dateTime: '',
      price: null,
      sunshine: '',
      dateOption: []
    }
  }
}
</script>

<style lang="scss" scoped>
.input-form {
  text-align: center;
  .el-input {
    width: 50%;
  }
}
</style>
