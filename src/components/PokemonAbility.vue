<template>
  <div class="rounded-md uppercase font-bold p-1 text-center bg-yellow-100">
    <h4>{{ ability }}</h4>
  </div>
</template>

<script>
export default {
  name: "PokemonAbility",
  props: {
    ability: {
      type: String,
      required: true
    }
  }
}
</script>