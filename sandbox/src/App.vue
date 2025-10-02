<script>
// https://pokeapi.co/api/v2/pokemon?limit=151

export default {
  data: () => ({
    pokedex: [1, 2, 3],
  }),
  methods: {
    async fetchPokemon() {
      this.pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((res) =>
        res.json(),
      )
    },
  },
}
</script>

<template>
  <h1>App</h1>
  <pre>{{ pokedex }}</pre>
  <button @click="fetchPokemon">Fetch Pokemon</button>
</template>
