<script>
import { reactive } from "vue";

export default {
  async setup() {
    const state = reactive({
      users: [],
    });

    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());
      return response;
    }

    state.users = await fetchUsers();

    return { state, fetchUsers };
  },
};
</script>

<template>
  <main>
    <h1>Users</h1>
    <ul>
      <li v-for="user in state.users" :key="user.id">
        User id: {{ user.id }} - {{ user.name }}
      </li>
    </ul>
  </main>
</template>

<style>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
}

main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
}

li {
  margin-bottom: 5px;
}

button {
  border: 1px solid green;
  padding: 10px;
  color: green;
  background-color: rgb(213, 255, 213);
  cursor: pointer;
}
</style>
