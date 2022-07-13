import { Commit } from "vuex"
import { PokemonState } from "@/interfaces/pokemon-state"
import { Pokemon } from "@/interfaces/pokemon"
import { page_limit } from "@/interfaces/pages-state"
import { apiService } from "@/api-service/pokemon"

const state = {
  pokemon: [] as Array<Pokemon>,
  pokemonDetails: {} as Pokemon,
  totalPokemon: 0
} as PokemonState

const getters = {
  getPokemon: (state: PokemonState) => state.pokemon,
  getPokemonDetails: (state: PokemonState) => state.pokemonDetails
}

const actions = {
  async fetchPokemon({ commit } : { commit: Commit }, page: number) {
    const pageOffset = (page * page_limit) - page_limit
    
    const pokemons = await apiService.getPokemons(pageOffset) as Array<Pokemon>

    commit("setPokemon", pokemons)
  },
  async fetchTotalPokemon({ commit } : { commit: Commit }) {

    const totalPokemon = await apiService.getTotalPokemon() as number

    commit("setTotalPokemon", totalPokemon)
  },
  async fetchPokemonDetails({ commit } : { commit: Commit }, id: number) {

    const pokemonDetails = await apiService.getPokemonDetails(id) as Pokemon

    commit("setPokemonDetails", pokemonDetails)
  },
  clearPokemonDetails({ commit } : { commit: Commit }) {
    commit("setPokemonDetailsCleared")
  }
}

const mutations = {
  setPokemon: (state: PokemonState, pokemons: Array<Pokemon>) => {
    state.pokemon = pokemons
  },
  setTotalPokemon: (state: PokemonState, totalPokemon: number) => {
    state.totalPokemon = totalPokemon
  },
  setPokemonDetails: (state: PokemonState, pokemon: Pokemon) => {
    state.pokemonDetails = pokemon
  },
  setPokemonDetailsCleared: (state: PokemonState) => {
    state.pokemonDetails = {} as Pokemon
  }
}

export const pokemon = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}