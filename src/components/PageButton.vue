<template>
  <button :disabled="loading || disabledByPageNumber"
    class="bg-yellow-200 border-4 border-yellow-600 rounded-md py-4 ml-2 mr-1 flex justify-center"
    :class="loading && 'cursor-wait'" 
    @click="handleClick">
    <slot></slot>
  </button>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex'

function validateButtonType(buttonType) {
  const buttonTypes = ['next', 'prev', 'first', 'last']

  return buttonTypes.includes(buttonType)
}

export default {
  name: 'PageButton',
  props: {
    buttonType: {
      type: String,
      required: true,
      validator: validateButtonType
    }
  },
  computed: {
    ...mapGetters('pages', {
        page: 'getPage',
        totalPages: 'getTotalPages'
      }),
    ...mapGetters({ loading: 'getLoading' }),
    clickAction() {
      
      switch(this.buttonType) {
        case 'next':
          return this.nextPage
        case 'prev':
          return this.prevPage
        case 'first':
          return this.initialPage
        case 'last':
          return this.lastPage
        default:
          return () => console.log('No button type prop passed')
      }
    },
    // disbabledByPageNumber() {
    //   if (this.page === 1 || this.page === this.totalPages) {
    //     return true
    //   }
    //   return false
    // }
  },
  // watch: {
  //   async page(newValue, oldValue) {
  //     if (newValue === this.totalPages || newValue === 1) {
  //       this.disabledByPageNumber = true
  //     }
  //     if (newValue !== oldValue) {
  //       await this.fetchPokemon(newValue)
  //     }
  //   }
  // },
  methods: {
    ...mapActions('pages', ['nextPage', 'prevPage', 'initialPage', 'lastPage']),
    ...mapActions('pokemon', ['fetchPokemon']),
    ...mapActions(['switchLoading']),
    async handleClick() {
      this.switchLoading()
      this.clickAction()
      await this.fetchPokemon(this.page)
      this.switchLoading()
    }
  }
}
</script>

<style>

</style>