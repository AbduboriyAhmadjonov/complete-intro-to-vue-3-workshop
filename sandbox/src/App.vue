<script>
export default {
  data() {
    return {
      count: 10,
      counterTitle: 'Counter Standard',
      incrementAmount: 8,
      message: 'Hello it works',
      listOfNumbers: [
        {
          name: 1,
          id: '6a887cd2-f0bf-4321-b192-92016f82a883',
          list: [1, 2, 3],
        },
        {
          name: 2,
          id: '8d14d90b-2d47-473e-8293-d5c324111d0d',
          list: [1, 2, 3],
        },
        {
          name: 3,
          id: 'cd806d65-2309-4625-9104-dcd636cd79b5',
          list: [1, 2, 3],
        },
        {
          name: 4,
          id: '00c939cd-fbf4-46d0-8e61-0bc2ce8a5332',
          list: [1, 2, 3],
        },
        {
          name: 5,
          id: '295a8170-59c1-4462-9de1-3c9cd41cedab',
          list: [1, 2, 3],
        },
      ],
    }
  },
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
    },
  },
  watch: {
    count(newValue) {
      if (newValue > 20) {
        this.counterTitle = 'Counter Standard Very Long!'
      }
    },
  },
}
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <h1>{{ displayTitle }}</h1>
  <p :data-increment-by="incrementAmount">{{ count }}</p>
  <button @click="incrementCount">Increment Count</button>
  <h1>{{ incrementAmount }}</h1>
  <p>{{ optimizedIncrementAmount }}</p>
  <div>
    <label for="incrementAmount">Increment by:</label>
    <input type="text" v-model="incrementAmount" />
  </div>
  <hr />
  <p v-if="message.length % 2 === 0">Even: {{ message.toUpperCase() }}</p>
  <p v-else>Odd: {{ message }}</p>
  <ul v-for="item in listOfNumbers">
    <li>
      {{ item.id }}
      <ul>
        <li v-for="number in item.list">{{ number }}</li>
      </ul>
    </li>
  </ul>

  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
