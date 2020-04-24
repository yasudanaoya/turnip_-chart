<template lang="pug">
  .input-form
    el-select(
      v-model="param.dateTime"
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
      v-model="param.sunshine"
      label="am"
    ) 午前
    el-radio(
      v-model="param.sunshine"
      label="pm"
    ) 午後
    el-input-number(
      placeholder="株価(ベル)"
      v-model.number="param.price"
      autocomplete="off"
      :min="1"
      :controls="false"
    )
    el-button(
      type="primary"
      @click="submit"
    ) 入力
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      dateOption: [],
      param: {
        dateTime: '',
        price: null,
        sunshine: ''
      }
    }
  },
  methods: {
    ...mapMutations('result', ['add']),
    submit() {
      this.add(this.param)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-form {
  text-align: center;
  .el-input {
    width: 10%;
  }
}
</style>
