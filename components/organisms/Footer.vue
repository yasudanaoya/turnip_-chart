<template lang="pug">
  el-footer
    share-btn(
      :page-title="getTitle"
    )
</template>

<script>
import ShareBtn from '../molecules/ShareBtn'
export default {
  components: {
    ShareBtn
  },
  computed: {
    getTitle() {
      return document.title
    }
  }
}
</script>
