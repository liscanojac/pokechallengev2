<template>
  <router-link 
    :to="{ name: 'Details', params: { id: pokemon.id } }"
    class="flex flex-col md:flex-row md:justify-between items-center p-4 bg-white border-4 border-yellow-500 mb-2 w-full md:w-3/4 rounded-lg shadow-lg"
  >
    <div class="grid grid-cols-2 gap-2 text-center order-2 md:order-1">
      <div>
        <h3>No {{ pokemon.id }}</h3>
      </div>
      <div>
        <h1 class="uppercase font-bold">
          {{ pokemon.name }}
        </h1>
      </div>
      <div>
        <h3>{{ heightLabel }}</h3>
      </div>
      <div>
        <h3>{{ height }}</h3>
      </div>
      <div>
        <h3>{{ weightLabel }}</h3>
      </div>
      <div>
        <h3>{{ weight }}</h3>
      </div>
      <div
        :key="type.url"
        v-for="type in pokemon.types"
      >
        <PokemonType :pokemonType="type.name" />
      </div>
    </div>
    <img 
      class="w-20 mb-4 order-1 md:order-2 md:mb-0 md:mr-8" 
      :src="pokemon.gif.front || pokemon.image.front_default" 
      alt="pokemon-gif"
    />
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'
import PokemonType from './PokemonType.vue'

export default {
  name: 'PokemonCard',
  components: {
    PokemonType
  },
  props: {
    pokemon: {
      type: import('@/interfaces/pokemon').Pokemon,
      required: true
    }
  },
  computed: {
    ...mapGetters({ language: 'getLanguage' }),
    ...mapGetters('languageSwitch', ['getGeneralContent']),
    heightLabel() {
      return this.getGeneralContent(this.language, 'height')
    },
    height() {
      if (this.language === "en") {
        return this.pokemon.height.ft
      }
      if (this.language === "es") {
        return this.pokemon.height.cms
      }
      return 0
    },
    weightLabel() {
      return this.getGeneralContent(this.language, 'weight')
    },
    weight() {
      if (this.language === "en") {
        return this.pokemon.weight.lbs
      }
      if (this.language === "es") {
        return this.pokemon.weight.kgs
      }
      return 0
    }
  }
}
</script>
