const state = {
  localStorageKey: 'dse',
  list: [],
  newAppointment: {
    name: '',
    date: '',
    note: '',
  },
}

const getters = {
  noConfirm (state) {
    return !state.newAppointment.name || state.newAppointment.name.length < 3 || !state.newAppointment.date
  },
}

const actions = {
  addAppointment ({ state, commit, dispatch }) {
    state.list.push(state.newAppointment)
    commit('newAppointment', {
      name: '',
      date: '',
      note: '',
    })
    dispatch('syncData')
  },
  removeAppointment ({ state, dispatch }, index) {
    state.list.splice(index, 1)
    dispatch('syncData')
  },
  getData ({ commit, state }) {
    const localState = JSON.parse(localStorage.getItem(state.localStorageKey))
    if (!localState) return
    for (const key of Object.keys(localState)) {
      commit(key, localState[key])
    }
  },
  syncData ({ state }) {
    const localState = {}
    for (const key of Object.keys(state)) {
      localState[key] = state[key]
    }
    localStorage.setItem(state.localStorageKey, JSON.stringify(localState))
  },
}
export default { state, actions, getters }
