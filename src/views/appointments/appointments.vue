<template lang="pug">
  .appointments
    el-card.list
      .list-item(v-for="appointment in appointments")
        .appointment
          .appointment-before
            el-checkbox.appointment-toggle
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
    appointments: [
      { title: 'Apointment 1', date: '11.09.2020' },
      { title: 'Apointment 2', date: '12.09.2020' },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.appointments
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
