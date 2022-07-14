<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <PokeDex />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import PokeDex from '@/components/PokeDex.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    PokeDex
  },
  computed: {
    ...mapGetters({ language: 'getLanguage'}),
    pokedexMessage() {
      
    }
  }
});
</script>
