<script setup>
import HomePage from "./components/HomePage.vue";
import LoginPage from "./components/LoginPage.vue";
import UsersPage from "./components/UsersPage.vue";
import { reactive, computed, toRefs } from "vue";

const state = reactive({
  currentPage: "Home",
  userInfo: "This is user info passed as a prop",
});

const pages = { HomePage, LoginPage, UsersPage };
const renderPage = computed(
  () => pages[state.currentPage + "Page"] || HomePage
);

const { userInfo } = toRefs(state);

function showHomePage() {
  state.currentPage = "Home";
}
function showLoginPage() {
  state.currentPage = "Login";
}
function showUsersPage() {
  state.currentPage = "Users";
}
function updateUserInfo(newInfo) {
  state.userInfo = newInfo;
}
</script>

<template>
  <header class="header">
    <span class="logo">
      <img src="@/assets/vue-heart.png" width="30" />C'est La Vue
    </span>
    <nav class="nav">
      <a href="#" @click.prevent="showHomePage">Home</a>
      <a href="#" @click.prevent="showLoginPage">Login</a>
      <a href="#" @click.prevent="showUsersPage">Users</a>
    </nav>
  </header>

  <Suspense>
    <component
      :is="renderPage"
      :userInfo="userInfo"
      @updateUserInfo="updateUserInfo"
    />
    <template #fallback>
      <div style="padding: 1rem">Loading...</div>
    </template>
  </Suspense>
</template>

<style>
* {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
}

span.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

span.logo img {
  margin-right: 8px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  padding: 0.5rem;
  font-size: 0.9rem;
}

.nav a:last-child {
  padding-right: 0;
}
</style>
