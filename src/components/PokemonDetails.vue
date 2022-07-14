<template>
  <div class="w-full bg-emerald-400 rounded-xl p-4">
    <div 
      v-if="loading"
      class="w-full flex justify-center" 
    >
      <img 
        class="h-40" 
        src="@/assets/loading-gif.gif" 
        alt="loading-gif"
      />
    </div>
    <div v-else>
      <div class="flex justify-center mb-2">
        <div class="w-full md:w-3/4 lg:w-1/2 bg-white text-center border-4 border-gray-400 ring-2 ring-inset ring-gray-300">
          <h1 class="font-pokedex-title text-2xl uppercase py-2">
            {{ pokemon.name }}
          </h1>
          <div class="flex justify-center">
            <LanguageToggler />
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col items-center p-4 bg-white border-4 border-yellow-500 mb-2 w-full md:w-3/4 rounded-lg shadow-lg ring-2 ring-inset ring-orange-300">
          <img 
            :src="pokemon.image.svg || pokemon.image.official_artwork" 
            class="h-64 mb-10" 
            alt="pokemon-image" 
          />
          <div class="grid grid-cols-1 md:grid-cols-2 w-full mb-4 gap-y-3">
            <div class="col-span-2 md:col-span-1">
              <div class="grid grid-cols-2 gap-2">
                <div class="w-full text-center text-lg bg-gray-500 text-white rounded-lg px-2 font-medium">
                  <h3>No.</h3>
                </div>
                <div class="text-lg font-medium">
                  <h3>{{ pokemon.id }}</h3>
                </div>
                <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">
                  <h3>{{ nameLabel }}</h3>
                </div>
                <div class="text-lg font-medium uppercase">
                  <h2>{{ pokemon.name }}</h2>
                </div>
                <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">
                  <h3>{{ weightLabel }}</h3>
                </div>
                <div class="text-lg font-medium uppercase">
                  <h3>{{ pokemonWeight }} {{ weightUnit }}</h3>
                </div>
                <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">
                  <h3>{{ heightLabel }}</h3>
                </div>
                <div class="text-lg font-medium uppercase">
                  <h3>{{ pokemonHeight }} {{ heightUnit }}</h3>
                </div>
                <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">
                  <h3>{{ shapeLabel }}</h3>
                </div>
                <div class="text-lg font-medium uppercase">
                  <h3>{{ pokemon.shape }} pokémon</h3>
                </div>
              </div>
            </div>
            <div class="col-span-2 md:col-span-1">
              <div class="grid grid-col-2 gap-2">
                <div class="col-span-2 w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">
                  <h4>{{ typeLabel }}</h4>
                </div>
                <div 
                  :key="type.url" 
                  v-for="type in pokemon.types"
                >
                  <PokemonType :pokemonType="type.name" />
                </div>
                <div class="col-span-2 w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">
                  <h4>{{ abilityLabel }}</h4>
                </div>
                <div 
                  :key="ability.url" 
                  v-for="ability in pokemonAbilites"
                >
                  <PokemonAbility :ability="ability.name" />
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 w-full mb-4 gap-3">
            <div>
              <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase mb-2">
                <h4>{{ happinessLabel }}</h4>
              </div>
              <div class="h-3 relative">
                <div class="w-full h-full bg-gray-200 absolute rounded-md"></div>
                <div 
                  class="h-full bg-green-500 absolute rounded-md" 
                  :style="{'width':pokemon.happiness + '%'}"
                >
                </div>
              </div>
            </div>
            <div>
              <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase mb-2">
                <h4>{{ captureRateLabel }}</h4>
              </div>
              <div class="h-3 relative">
                <div class="w-full h-full bg-gray-200 absolute rounded-md"></div>
                <div 
                  class="h-full bg-orange-500 absolute rounded-md" 
                  :style="{'width':pokemon.capture_rate + '%'}"
                >
                </div>
              </div>
            </div>
          </div>
          <div class="w-full p-4 text-lg">
            {{ pokemonDescription }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LanguageToggler from './LanguageToggler.vue'
import PokemonType from './PokemonType.vue'
import PokemonAbility from './PokemonAbility.vue'

export default {
  name: 'PokemonDetails',
  components: {
    LanguageToggler,
    PokemonType,
    PokemonAbility
  },
  computed: {
    ...mapGetters({
        loading: 'getLoading',
        language: 'getLanguage'
      }),
    ...mapGetters('pokemon', { pokemon: 'getPokemonDetails' }),
    ...mapGetters('languageSwitch', ['getGeneralContent']),
    nameLabel() {
      return this.getGeneralContent(this.language, 'name')
    },
    weightLabel() {
      return this.getGeneralContent(this.language, 'weight')
    },
    heightLabel() {
      return this.getGeneralContent(this.language, 'height')
    },
    shapeLabel() {
      return this.getGeneralContent(this.language, 'shape')
    },
    typeLabel() {
      return this.getGeneralContent(this.language, 'type')
    },
    abilityLabel() {
      return this.getGeneralContent(this.language, 'ability')
    },
    happinessLabel() {
      return this.getGeneralContent(this.language, 'happiness')
    },
    captureRateLabel() {
      return this.getGeneralContent(this.language, 'capture_rate')
    },
    pokemonWeight() {
      if (this.language === "en") {
        return this.pokemon.weight.lbs
      }
      return this.pokemon.weight.kgs
    },
    pokemonHeight() {
      if (this.language === "en") {
        return this.pokemon.height.ft
      }
      return this.pokemon.height.cms
    },
    pokemonAbilites() {
      if (this.language === "es") {
        return this.pokemon.abilities.es
      }
      return this.pokemon.abilities.en
    },
    pokemonDescription() {
      if (this.language === "es") {
        return this.pokemon.description.es
      }
      return this.pokemon.description.en
    },
    weightUnit() {
      return this.getGeneralContent(this.language, 'weight_unit')
    },
    heightUnit() {
      return this.getGeneralContent(this.language, 'height_unit')
    }
  }

}
</script>

<style>

</style>