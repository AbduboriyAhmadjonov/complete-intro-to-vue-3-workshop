<script>
// https://pokeapi.co/api/v2/pokemon?limit=151

export default {
  async setup() {
    const pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((res) =>
      res.json(),
    )
    return { pokedex }
  },
}
</script>

<template>
  <div>
    <h2>Pokedex</h2>
    <pre>{{ pokedex }}</pre>
  </div>
</template>
