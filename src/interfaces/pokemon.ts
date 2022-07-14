import { Ability } from "./ability"
import { Type } from "typescript"

export interface Pokemon {
  abilities: {
    es?: Array<Ability>
    en: Array<Ability>
  }
  gif: {
    back?: string
    front?: string,
  },
  height: {
    ft: number
    cms: number
  },
  id: number
  image: {
    front_default?: string
    back_default?: string
    svg?: string
    official_artwork?: string
  }
  name: string
  types: Array<Type>
  weight: {
    lbs: number
    kgs: number
  }
  happiness?: number
  capture_rate: number
  description?: {
    en?: string
    es?: string
  }
  generation?: string
  growth_rate?: string
  is_legendary?: boolean
  is_mythical?: boolean
  shape?: string
}

export const number_of_pokemon_without_image_pokeAPI = 26