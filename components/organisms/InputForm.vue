<template lang="pug">
  .input-form
    el-select(
      v-model="param.dateTime"
      placeholder="曜日"
      size="medium"
    )
      el-option(
        v-for="day in weekdays"
        :key="day"
        :label="day"
        :value="day"
      )
    el-radio(
      v-model="param.sunshine"
      label="午前"
      :disabled="isSunday"
    ) 午前
    el-radio(
      v-model="param.sunshine"
      label="午後"
      :disabled="isSunday"
    ) 午後
    el-input-number(
      placeholder="株価(ベル)"
      v-model.number="param.price"
      autocomplete="off"
      :min="1"
      :controls="false"
      size="medium"
    )
    el-button(
      type="primary"
      @click="submit"
      :disabled="submitValid"
    ) 入力
</template>

<script>
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
      ],
      param: {
        dateTime: '',
        price: 100,
        sunshine: ''
      }
    }
  },

  computed: {
    isSunday() {
      return this.param.dateTime === '日曜日'
    },

    weekDayValid() {
      if (this.isSunday) {
        return false
      } else {
        return !this.param.sunshine
      }
    },

    submitValid() {
      return !this.param.dateTime || this.weekDayValid || !this.param.price
    }
  },

  methods: {
    submit() {
      this.$emit('submit', this.param)
      this.cleanData()
    },

    cleanData() {
      this.param = {
        dateTime: '',
        sunshine: ''
      }
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
