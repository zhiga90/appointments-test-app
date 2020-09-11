<template lang="pug">
  .logo(:style="fontSize")
    .text1 app
    .text2
      i.el-icon-time
    .text3 intsments
</template>

<script>
export default {
  name: 'logo',
  props: {
    size: { type: Number, default: 3 },
  },
  computed: {
    fontSize () { return `font-size: ${this.size * 8}px;` },
  },
}
</script>

<style scoped lang="sass">
.logo
  display: flex
  justify-content: center
  .text1
    color: $--color-danger
  .text2
    color: $--color-primary
  .text3
    color: $--color-primary
</style>
