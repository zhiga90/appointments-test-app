const state = {
  layout: '',
}

const getters = {
  layout (state) { return state.layout || 'default' },
}

const actions = {
  changeLayout ({ commit }, name) { commit('setLayout', name) },
}

export default { state, getters, actions }
