import { Commit } from "vuex"
import { PagesState, page_limit } from "@/interfaces/pages-state"

const state = {
  page: 1,
  totalPages: 0,
} as PagesState

const getters = {
  getPage: (state: PagesState) => state.page,
  getTotalPages: (state: PagesState) => state.totalPages
}

const actions = {
  nextPage({ commit } : { commit: Commit }) {
    commit("setNextPage")
  },
  prevPage({ commit } : { commit: Commit }) {
    commit("setPrevPage")
  },
  initialPage({ commit } : { commit: Commit }) {
    commit("setInitialPage")
  },
  lastPage({ commit } : { commit: Commit }) {
    commit("setLastPage")
  },
  totalPages({ commit } : { commit: Commit }, totalPokemon: number) {
    commit("setTotalPages", totalPokemon)
  }
}

const mutations = {
  setNextPage: (state: PagesState) => {
    if (state.page < state.totalPages) {
      state.page = state.page + 1
    }
  },
  setPrevPage: (state: PagesState) => {
    if (state.page > 1) {
      state.page = state.page - 1
    }
  },
  setInitialPage: (state: PagesState) => {
    state.page = 1
  },
  setLastPage: (state: PagesState) => {
    state.page = state.totalPages
  },
  setTotalPages: (state: PagesState, totalPokemon: number) => {
    state.totalPages = Math.ceil(totalPokemon / page_limit)
  }
}


export const pages = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}