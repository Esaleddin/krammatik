<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
  <HomePage />
</template>

<script>
//import TheTwoColumnsLayout from "./layouts/TheTwoColumnsLayout.vue";
import HomePage from "./pages/HomePage.vue";

export default {
  name: "App",
  components: {
    //TheTwoColumnsLayout, 
    HomePage,
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~animate.css/animate.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bg-vue-left {
  background-color: rgb(65, 100, 125);
}

.bg-vue-right {
  background-color: rgb(220, 210, 70);
}

nav {
  padding: 35px;
  background-color: rgb(255, 0, 200);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
