<template lang="pug">
  .appointment-create
    el-card.Card
      .header
        .header-left
          el-button.header-button(icon="el-icon-arrow-left" circle @click="$router.push('/appointments')")
        .header-title
          span Make Appointments
        .header-tabs
          el-tabs(v-model="activeTab")
            el-tab-pane(
              v-for="tab in tabs"
              :key="tab.name"
              :label="tab.label"
              :name="tab.name"
            )
      router-view
</template>

<script>
export default {
  name: 'appointment-create',

  data: () => ({
    tabs: [
      { label: 'Info', name: 'appointment-info', path: 'info' },
      { label: 'Confirmation', name: 'appointment-confirm', path: 'confirm' },
    ],
  }),

  computed: {
    activeTab: {
      get () { return this.$route.name },
      set (tabName) {
        if (this.$route.name !== tabName) {
          const tab = this.tabs.find(tab => tab.name === tabName)
          this.$router.push('/appointments/create/' + tab.path)
        }
      },
    },
  },
}
</script>

<style scoped lang="sass">
// .appointment-create
</style>
