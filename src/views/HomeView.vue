<template>
  <div class="display flex flex-col justify-center items-center mt-12 px-6">
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
