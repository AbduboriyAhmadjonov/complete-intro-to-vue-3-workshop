<script setup>
import Counter from './components/Counter.vue'
import UserCard from './components/UserCard.vue'
</script>

<template>
  <Counter />
  <UserCard :user="{ name: 'Alice', favouriteFood: 'Pizza' }" />
</template>
