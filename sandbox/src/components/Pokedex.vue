<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  region: {
    type: String,
    default: 'Tashkent',
  },
})

defineEmits(['change-region'])

const regionName = ref(props.region)
const pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((res) => res.json())

const changeRegionName = () => {
  regionName.value = 'Kanto'
  emit('change-region', regionName.value)
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
