import { Pokemon } from "./pokemon"

export interface PokemonState {
  pokemon: Array<Pokemon>
  pokemonDetails: Pokemon
  totalPokemon: number
}