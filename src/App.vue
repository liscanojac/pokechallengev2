<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=VT323&display=swap');

body {
  background-image: url('assets/pokemon_background.jpg');
}
</style>
