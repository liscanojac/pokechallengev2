import { createStore } from 'vuex'
import { pokemon } from './pokemon'
import { pages } from './pages'

export default createStore({
  state: {
    loading: false as boolean
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    pokemon,
    pages
  }
})
