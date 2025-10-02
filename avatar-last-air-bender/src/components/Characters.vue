<script>
export default {
  props: ['characterList'],
  emits: ['favouriteCharacter'],
  methods: {
    favoriteCharacter(character) {
      this.$emit('favouriteCharacter', character)
    },
  },
}
</script>

<template>
  <p v-if="characterList.length === 0">There are no characters</p>
  <h2 v-else>Characters</h2>
  <ul>
    <li v-for="character in characterList">
      <p>{{ character.name }}</p>
      <button @click="favoriteCharacter(character)">⭐ Favorite</button>
    </li>
  </ul>
</template>
