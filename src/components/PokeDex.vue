<template>
  <div class="w-full bg-emerald-400 rounded-xl p-4">
    <div class="flex justify-center mb-2">
      <div class="w-full md:w-3/4 lg:w-1/2 bg-white text-center border-4 border-gray-400 ring-2 ring-inset ring-gray-300">
        <h1 class="font-pokedex-title text-2xl py-2">
          {{ pokedexGreeting }}
          <span class="uppercase">
            Pokémon
          </span>
        </h1>
        <div class="flex justify-center">
          <LanguageToggler />
        </div>
      </div>
    </div>
    <div 
      v-if="loading" 
      class="flex w-full justify-center"
    >
      <img 
        class="h-40" 
        src="@/assets/loading-gif.gif" 
        alt="loading-gif" 
      />
    </div>
    <div v-else>
      <div 
        :key="pokemon.id" 
        v-for="pokemon in pokemons"
        class="flex justify-center"
      >
        <PokemonCard :pokemon="pokemon" />
      </div>
    </div>
    <div class="grid grid-cols-4 text-center w-full md:w-3/4 mx-auto">
      <PageButton buttonType="first">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
      </PageButton>
      <PageButton buttonType="prev">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 19l-7-7 7-7" />
        </svg>
      </PageButton>
      <PageButton buttonType="next">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 5l7 7-7 7" />
        </svg>
      </PageButton>
      <PageButton buttonType="last">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </PageButton>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PageButton from "./PageButton.vue"
import LanguageToggler from './LanguageToggler.vue'
import PokemonCard from './PokemonCard.vue'

export default {
  name: "PokeDex",
  components: {
    PageButton,
    LanguageToggler,
    PokemonCard
  },
  computed: {
    ...mapGetters({
      language: 'getLanguage',
      loading: 'getLoading'
    }),
    ...mapGetters('languageSwitch', ['getGeneralContent']),
    ...mapGetters('pokemon', {
      pokemons: 'getPokemon',
      totalPokemons: 'getTotalPokemon'
    }),
    ...mapGetters('pages', { page: 'getPage' }),
    pokedexGreeting() {
      return this.getGeneralContent(this.language, 'pokedex')
    }
  },
  async created() {
    this.switchLoading()
    await this.fetchTotalPokemon()
    this.totalPages(this.totalPokemons)
    await this.fetchPokemon(this.page)
    this.switchLoading()
  },
  methods: {
    ...mapActions(['switchLoading']),
    ...mapActions('pokemon', ['fetchTotalPokemon', 'fetchPokemon']),
    ...mapActions('pages', ['totalPages']),
  }
}
</script>
