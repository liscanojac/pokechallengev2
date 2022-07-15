<template>
  <div class="display flex flex-col justify-center items-center mt-12 px-6 sm:px-16 md:px-24 lg:px-44">
    <PokeDex />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PokeDex from '@/components/PokeDex.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    PokeDex
  }
});
</script>
