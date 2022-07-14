import axios from "axios"
import { page_limit } from "@/interfaces/pages-state"
import { Pokemon, number_of_pokemon_without_image_pokeAPI } from "@/interfaces/pokemon"
import { Ability, AbilityLanguageNames } from "@/interfaces/ability"
import { Type } from "@/interfaces/type"
import { unitConversion } from "@/utils/unit-conversion"
import { DescriptionEntry } from "@/interfaces/description-entry"

export const apiService = {
  async getPokemons(pageOffset: number) {

    const pokemons = []
    
    const response = await axios(`https://pokeapi.co/api/v2/pokemon?limit=${page_limit}&offset=${pageOffset}`)
      .then(res => res.data.results)
      .catch((e) => console.log(e))

    for (let i = 0; i < response.length; i++) {

      const pokemon = await this.getPokemon(response[i].url)

      pokemons.push(pokemon)
    }
    return pokemons as Array<Pokemon>
  },
  async getPokemon(url: string) {

    const pokemonFullDetails = await axios(url)
      .then(res => res.data)
      .catch(e => console.log(e))

    const pokemon = {
      name: pokemonFullDetails.name,
      id: pokemonFullDetails.id,
      abilities: {
        en: pokemonFullDetails.abilities.map((ability : { ability: Ability }) => ability.ability)
      },
      image: {
        svg: pokemonFullDetails.sprites.other.dream_world.front_default,
        front_default: pokemonFullDetails.sprites.front_default,
        back_default: pokemonFullDetails.sprites.back_default
      },
      gif: {
        front: pokemonFullDetails['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
        back: pokemonFullDetails['sprites']['versions']['generation-v']['black-white']['animated']['back_default']
      },
      types: pokemonFullDetails.types.map((type: {
        slot: number,
        type: Type
      }) => type.type),
      weight: {
        lbs: pokemonFullDetails.weight,
        kgs: unitConversion.convertLbsIntoKgs(pokemonFullDetails.weight)
      },
      height: {
        ft: pokemonFullDetails.height,
        cms: unitConversion.convertFtIntoCms(pokemonFullDetails.height)
      }
    } as Pokemon

    return pokemon
  },
  async getTotalPokemon() {

    try {
      const response = await axios('https://pokeapi.co/api/v2/pokemon')

      const totalPokemon = response.data.count - number_of_pokemon_without_image_pokeAPI

      return totalPokemon

    } catch(err) {
      console.log(err)
    }
  },
  async getPokemonDetails(id: number) {

    const pokemonFullDetails = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.data)
      .catch(e => console.log(e))

    const fullDescription = await axios(pokemonFullDetails.species.url)
      .then(res => res.data)
      .catch(e => console.log(e))

    const full_en_description = fullDescription.flavor_text_entries.find(
      (entry: DescriptionEntry) => entry.language.name === "en");

    const description_en = full_en_description.flavor_text.replace(/(\r\n|\n|\r|\f)/gm, " ");

    const full_es_description = fullDescription.flavor_text_entries.find(
      (entry: DescriptionEntry) => entry.language.name === "es");

    const description_es = full_es_description.flavor_text.replace(/(\r\n|\n|\r)/gm, " ");

    const pokemon = {
      name: pokemonFullDetails.name,
      id: pokemonFullDetails.id,
      abilities: {
        en: pokemonFullDetails.abilities.map((ability : { ability: Ability }) => ability.ability)
      },
      image: {
        svg: pokemonFullDetails.sprites.other.dream_world.front_default,
        official_artwork: pokemonFullDetails['sprites']['other']['official-artwork']['front_default'],
      },
      gif: {
        front: pokemonFullDetails['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
        back: pokemonFullDetails['sprites']['versions']['generation-v']['black-white']['animated']['back_default']
      },
      types: pokemonFullDetails.types.map((type: {
        slot: number,
        type: Type
      }) => type.type),
      weight: {
        lbs: pokemonFullDetails.weight,
        kgs: unitConversion.convertLbsIntoKgs(pokemonFullDetails.weight)
      },
      height: {
        ft: pokemonFullDetails.height,
        cms: unitConversion.convertFtIntoCms(pokemonFullDetails.height)
      },
      happiness: fullDescription.base_happiness > 100 ? 100 : fullDescription.base_happiness,
      capture_rate: fullDescription.capture_rate > 100 ? 100 : fullDescription.capture_rate,
      description: {
        en: description_en,
        es: description_es
      },
      growth_rate: fullDescription.growth_rate.name,
      is_legendary: fullDescription.is_legendary,
      is_mythical: fullDescription.is_mythical,
      shape: fullDescription.shape.name,
      generation: fullDescription.generation.name
    } as Pokemon

    const pokemonAbilities_es = []

    for (let i = 0; i < pokemon.abilities.en.length; i++) {

      const ability_es = await this.getPokemonAbilitiesByLanguage(pokemon.abilities.en[i], "es")

      pokemonAbilities_es.push(ability_es)
    }

    pokemon.abilities.es = pokemonAbilities_es

    return pokemon
  },
  async getPokemonAbilitiesByLanguage(ability: Ability,language: string) {

    const getAbilities_allLanguages = await axios(ability.url)
      .then(res => res.data.names)
      .catch(e => console.log(e))

    const abilityByLanguage = getAbilities_allLanguages.find((ability: AbilityLanguageNames) => ability.language.name === language)

    return {
      name: abilityByLanguage.name,
      url: abilityByLanguage.language.url
    } as Ability
  }
}