<script>
import Pokedex from './components/Pokedex.vue'
export default {
  components: { Pokedex },
}
</script>

<template>
  <h1>App</h1>
  <Suspense>
    <Pokedex :regionName="Toshkent" />
    <template #fallback>Loading Pokedex...</template>
  </Suspense>
</template>
