import { Commit, createStore } from 'vuex'
import { pokemon } from './pokemon'
import { pages } from './pages'
import { languageSwitch } from './language-switch'
import { RootState } from '@/interfaces/root-state'

export default createStore({
  state: {
    loading: false as boolean,
    language: "en" as string
  },
  getters: {
    getLoading: (state: RootState) => state.loading,
    getLanguage: (state: RootState) => state.language
  },
  mutations: {
    changeLanguage: (state: RootState) => state.language === "en" ? state.language = "es" : state.language = "en",
    changeLoading: (state: RootState) => state.loading = !state.loading
  },
  actions: {
    switchLanguage({ commit } : { commit: Commit }) {
      commit("changeLanguage")
    },
    switchLoading({ commit } : { commit: Commit }) {
      commit("changeLoading")
    }
  },
  modules: {
    pokemon,
    pages,
    languageSwitch
  }
})
