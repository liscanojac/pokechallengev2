<template>
  <div 
    class="rounded-md uppercase font-bold p-1 text-center"
    :class="typeClass"
  >
    <h4>{{ pokemonTypeLabel }}</h4>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PokemonType',
  props: {
    pokemonType: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({ language: 'getLanguage' }),
    ...mapGetters('languageSwitch', ['getTypeNamesTranslation', 'getTypeColors']),
    pokemonTypeLabel() {
      return this.getTypeNamesTranslation(this.pokemonType, this.language)
    },
    typeClass() {
      return this.getTypeColors(this.pokemonType)
    }
  }
}
</script>
