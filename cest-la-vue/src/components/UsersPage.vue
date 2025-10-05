<script setup>
import { reactive, defineProps, defineEmits } from "vue";

const state = reactive({
  users: [],
});

const props = defineProps({
  userInfo: {
    type: String,
    required: false,
  },
});

const emit = defineEmits(["updateUserInfo"]);

const updateUserInfo = () => {
  emit("updateUserInfo", "Updated user info from UsersPage.vue");
};

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  state.users = await response.json();
}

fetchUsers();
</script>

<template>
  <main>
    <h1>Users</h1>
    {{ props.userInfo }}
    <ul>
      <li v-for="user in state.users" :key="user.id">
        User id: {{ user.id }} - {{ user.name }}
      </li>
    </ul>
    <button @click="updateUserInfo">Update User Info</button>
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
