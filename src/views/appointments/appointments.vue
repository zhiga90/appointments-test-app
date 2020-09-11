<template lang="pug">
  .appointments
    el-card.no-data(v-if="isNoAppointments")
      .no-data-title
        span Your appointments list is empty.
        br
        span You can relax and wait for
      .no-data-action
        el-button(type="primary" icon="el-icon-time") New appointment
      .no-data-image
        img(src="@/assets/relax.png")
    el-card(v-else)
      .header
        .header-title
          span Your appointments list
        .header-right
          el-button.header-button(icon="el-icon-plus" circle)

      .list
        .list-item(v-for="appointment in appointments")
          .appointment
            .appointment-before
              el-checkbox(v-model="appointment.isHappen").appointment-toggle
            .appointment-body
              .appointment-date {{appointment.date}}
              .appointment-title {{appointment.title}}
            .appointment-after
              el-button.appointment-remove(icon="el-icon-delete" circle)
</template>

<script>
export default {
  name: 'appointments',

  data: () => ({
    appointments: [],
  }),
  computed: {
    isNoAppointments () { return !this.appointments.length },
  },
}
</script>

<style lang="sass" scoped>
.appointments
  .no-data
    text-align: center
    &-title
      padding-top: 10px
      color: $black2
      padding-bottom: 30px
    img
      padding-top: 20px
      width: 100%
      max-width: 400px
  .header
    display: flex
    align-items: center
    padding: 0 20px 20px 20px
    border-bottom: solid 1px $gray2
    margin: 0 -20px 20px -20px
    &-title
      flex: 1 0 0
    &-right
      flex: 0 0 0

  .list
    .list-item
      padding-bottom: 20px
      &:last-child
        padding-bottom: 0px
  .appointment
    display: flex
    align-items: center
    &-before
      flex: 0 0 auto
      padding-right: 20px
    &-body
      flex: 1 0 0
      display: flex
      flex-wrap: nowrap
      align-items: center
      @media (max-width: $to-md)
        flex-wrap: wrap
    &-date
      flex: 0 0 0
      padding-right: 20px
      color: $--color-primary
      font-weight: bold
      @media (max-width: $to-md)
        flex: 1 0 auto
        padding-right: 0px
        padding-bottom: 10px
    &-title
      flex: 1 0 0
      @media (max-width: $to-md)
        flex: 1 0 auto
        width: 100%
    &-after
      flex: 0 0 auto
      padding-left: 20px
    &-remove
      color: $--color-danger
      border-color: lighten($--color-danger, 20%)
      &:hover
        color: white
        border-collor: $--color-danger
        background: $--color-danger

</style>
