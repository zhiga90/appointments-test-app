<template lang="pug">
.layout-default.flex-column
  .header.flex-thin
    .logo-block
      logo
  .main-container.flex-stretch
    slot
</template>

<script>
import logo from '@/components/logo'
export default {
  name: 'layout-default',
  components: { logo },
}
</script>

<style lang="sass" scoped>
html,
body
  height: 100%
.layout-default
  max-width: 950px
  margin: 0 auto
  padding: 60px 20px
  @media (max-width: $to-sm)
    padding: 20px
  .logo-block
    padding-bottom: 40px
    @media (max-width: $to-sm)
      padding-bottom: 20px
</style>
