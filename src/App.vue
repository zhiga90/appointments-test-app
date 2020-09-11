<template lang="pug">
  component(:is="layout + '-layout'")
    router-view.flex-stretch.flex-column
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    'default-layout': () => import('@/layouts/default'),
  },
  computed: {
    ...mapGetters('layout', ['layout']),
  },
}
</script>

<style lang="sass">
@import "style/global"
@import "style/fonts"
</style>
