<script>
export default {
  props: {
    favoriteList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<template>
  <h2>Favorite Characters</h2>
  <ol v-if="favoriteList.length > 0">
    <li v-for="character in favoriteList">
      <p>{{ character.name }}</p>
      <p>{{ character.typeOfMagic }}</p>
      <p>{{ character.winRate }}%</p>
      <p>{{ character.weakness }}</p>
    </li>
  </ol>
  <p v-else>No favorite characters yet!</p>
</template>
