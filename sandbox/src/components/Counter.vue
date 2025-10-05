<script>
import { newCount } from '../composables/countStore.js'

export default {
  setup() {
    return { newCount }
  },
  data: () => ({
    count: 10,
    counterTitle: 'Counter Standard',
    incrementAmount: 8,
  }),
  computed: {
    displayTitle() {
      if (this.count > 20) {
        return 'Counter Standard Very Long!'
      } else {
        return 'Counter Standard'
      }
    },
    optimizedIncrementAmount() {
      return this.displayTitle.length * this.incrementAmount
    },
  },
  methods: {
    incrementCount(newAmount, event) {
      console.log(newAmount)
      console.log(event)
      this.count += this.optimizedIncrementAmount
      this.newCount += 10
    },
  },
}
</script>

<template>
  <h1>{{ displayTitle }}</h1>
  <h2>New count: {{ newCount }}</h2>
  <p :data-increment-by="incrementAmount">{{ count }}</p>
  <button @click="incrementCount">Increment Count</button>
  <h1>{{ incrementAmount }}</h1>
  <p>{{ optimizedIncrementAmount }}</p>
  <div>
    <label for="incrementAmount">Increment by:</label>
    <input type="text" v-model="incrementAmount" />
  </div>
</template>
