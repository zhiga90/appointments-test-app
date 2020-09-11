import Vue from 'vue'
import Vuex from 'vuex'
import layout from './layout'
import appointments from './appointments'

Vue.use(Vuex)

const modules = { appointments, layout }

const state = {}

let getters = {}

let mutations = {}

const actions = {}

function setDefaultGetters (state, getters) {
  for (const stateKey of Object.keys(state)) {
    if (!getters[stateKey]) {
      getters[stateKey] = (state) => {
        return state[stateKey]
      }
    }
  }
  return getters
}

function setDefaultMutations (state, mutations) {
  for (const stateKey of Object.keys(state)) {
    if (!mutations[stateKey]) {
      mutations[stateKey] = (state, value) => {
        state[stateKey] = value
      }
    }
  }
  return mutations
}

// set auto mutations and getters of modules by state name
for (const moduleKey of Object.keys(modules)) {
  let moduleMutations = modules[moduleKey].mutations || {}
  moduleMutations = setDefaultMutations(
    modules[moduleKey].state,
    moduleMutations,
  )
  let moduleGetters = modules[moduleKey].getters || {}
  moduleGetters = setDefaultGetters(
    modules[moduleKey].state,
    moduleGetters,
  )
  modules[moduleKey].namespaced = true
  modules[moduleKey].mutations = moduleMutations
  modules[moduleKey].getters = moduleGetters
}
getters = setDefaultMutations(state, getters)
mutations = setDefaultMutations(state, mutations)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
})
