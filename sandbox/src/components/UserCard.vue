<script>
import { newCount } from '../composables/countStore.js'

export default {
  setup() {
    return { newCount }
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  emits: ['change-name'],
  methods: {
    changeName() {
      this.$emit('change-name')
    },
  },
}
</script>

<template>
  <h1>User Card</h1>
  <h2>New count: {{ newCount }}</h2>
  <p>Name: {{ user.name }}</p>
  <p>Favourite food: {{ user.favouriteFood }}</p>
</template>
