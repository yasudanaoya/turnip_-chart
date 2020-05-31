<template lang="pug">
  el-container.layout
    el-header
      span あつ森カブ値動きチャート
    nuxt.default
    Footer
</template>

<script>
import Footer from '../components/organisms/Footer'
export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
.layout {
  text-align: center;
  .el-header {
    background-color: #409eff;
    span {
      font-size: xx-large;
    }
  }
}
</style>
