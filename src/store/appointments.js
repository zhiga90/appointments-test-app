const state = {
  isLoading: false,
  list: [],
  newAppointment: {
    name: '',
    date: Date.now(),
    note: '',
  },
}

const getters = {
  noConfirm (state) {
    return !state.newAppointment.name || !state.newAppointment.date
  },
}

const actions = {
  addAppointment ({ state, commit }) {
    state.list.push(state.newAppointment)
    commit('newAppointment', {
      name: '',
      date: Date.now(),
      note: '',
    })
  },
  removeAppointment ({ state }, index) {
    state.list.splice(index, 1)
  },
}
export default { state, actions, getters }
