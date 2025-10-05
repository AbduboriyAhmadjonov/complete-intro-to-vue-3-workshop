<script>
// https://pokeapi.co/api/v2/pokemon?limit=151
import { ref } from 'vue'

export default {
  async setup() {
    const regionName = ref('Tashkent')
    const pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((res) =>
      res.json(),
    )
    return { pokedex, regionName }
  },
  methods: {
    changeRegionName() {
      this.regionName = 'Kanto'
    },
  },
}
</script>

<template>
  <div>
    <h2>Pokedex</h2>
    <p>Region: {{ regionName }}</p>
    <button @click="changeRegionName">Change Region Name</button>
    <pre>{{ pokedex }}</pre>
  </div>
</template>
