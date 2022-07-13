import { PokemonState } from "@/interfaces/pokemon-state"
import { Pokemon } from "@/interfaces/pokemon"

const state = {
  pokemon: [] as Array<Pokemon>,
  pokemonDetails: {} as Pokemon,
  totalPokemon: 0
} as PokemonState

const getters = {
  getPokemon: (state: PokemonState) => state.pokemon,
  getPokemonDetails: (state: PokemonState) => state.pokemonDetails
}

export const pokemon = {
  namespaced: true,
  state,
  getters
}