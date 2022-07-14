<template>
  <div class="flex flex-col justify-center items-center mt-12 px-6">
    <PokemonDetails />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import PokemonDetails from '@/components/PokemonDetails.vue'

export default {
  name: "DetailsView",
  components: {
    PokemonDetails
  },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  async created() {
    this.switchLoading()
    await this.fetchPokemonDetails(this.id)
    this.switchLoading()
  },
  methods: {
    ...mapActions('pokemon', ['fetchPokemonDetails']),
    ...mapActions(['switchLoading'])
  }
}
</script>
