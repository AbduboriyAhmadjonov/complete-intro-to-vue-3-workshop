<script>
export default {
  data: () => ({
    users: {},
  }),
  methods: {
    async fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      return await response.json();
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
