<template lang="pug">
  .appointment-confirm
    .confirms
      .confirm(v-for="item in confirm")
        .confirm-label {{item.label}}:
        .confirm-value {{getValue(item.key)}}
    el-button(@click="back") Back
    el-button(type="primary" @click="save") Confirm and save
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'appointment-confirm',

  data: () => ({
    confirm: [
      { label: 'Date', key: 'date' },
      { label: 'Full name', key: 'name' },
      { label: 'Note', key: 'note' },
    ],
    out: false,
  }),

  computed: {
    ...mapGetters('appointments', ['newAppointment', 'noConfirm']),
  },

  mounted () {
    this.checkData()
  },

  methods: {
    ...mapActions('appointments', ['addAppointment']),
    getValue(key) {
      let value = null
      if (key === 'date') {
        value = this.$date.fromMillis(this.newAppointment[key]).toLocaleString(this.$date.DATETIME_MED)
      } else {
        value = this.newAppointment[key]
      }
      return value || 'No data'
    },
    checkData () {
      if (this.noConfirm && !this.out) this.back()
    },
    back () {
      this.$router.push('/appointments/create/info')
    },
    save () {
      this.out = true
      this.addAppointment()
      this.$router.push('/appointments')
    },
  },

  watch: {
    noConfirm () {
      this.checkData()
    },
  },
}
</script>

<style scoped lang="sass">
.appointment-confirm
  .confirms
    padding-bottom: 20px
    .confirm
      font-size: 16px
      padding-bottom: 20px
      &-label
        font-size: 13px
        color: $black3
        padding-bottom: 7px
</style>
