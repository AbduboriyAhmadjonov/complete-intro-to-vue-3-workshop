<script>
export default {
  props: {
    characterList: Array,
    required: true,
  },
  data: () => ({}),
  computed: {
    benderStatistics() {
      const elements = ['Airbending', 'Waterbending', 'Earthbending', 'Firebending']
      const statistics = {
        Airbending: 0,
        Waterbending: 0,
        Earthbending: 0,
        Firebending: 0,
      }

      this.characterList.forEach((character) => {
        elements.forEach((element) => {
          if (character.typeOfMagic.includes(element)) {
            statistics[element] += 1
          }
        })
      })

      return statistics
    },
  },
}
</script>

<template>
  <h2>Statistics</h2>
  <ul>
    <li v-for="(stat, type) in benderStatistics" :key="type">{{ type }}: {{ stat }}</li>
  </ul>
</template>
