<template lang="pug">
  .info
    el-form(
      ref="form"
      :model="form"
      label-width="120px"
      :rules="rules"
    )
      el-form-item(label="Date" prop="date" required)
        el-date-picker(v-model="form.date" type="date" placeholder="Pick a date" style="width: 100%;")
      el-form-item(label="Full name" prop="name")
        el-input(v-model="form.name")
      el-form-item(label="Note" prop="note")
        el-input(v-model="form.note" type="textarea")
      el-form-item
        el-button(type="primary" @click="submitForm()") Next
        el-button(@click="resetForm()") Reset
</template>

<script>
export default {
  name: 'info',

  data: () => ({
    form: {
      title: '',
      date: Date.now(),
      note: '',
    },
    rules: {
      name: [
        { required: true, message: 'Please input appointment name', trigger: 'blur' },
        { min: 3, max: 200, message: 'Length should be 3 to 200', trigger: 'blur' },
      ],
      date: [
        { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' },
      ],
    },
  }),

  methods: {
    async submitForm () {
      const isValid = await this.$refs.form.validate()
      if (!isValid) return
      this.$router.push('/appointments/create/confirm')
    },
    resetForm () {
      this.$refs.form.resetFields()
    },
  },
}
</script>

<style scoped lang="sass">
// .info
</style>
