<template>
  <nav>
    <v-toolbar color="#001020"><v-toolbar-title class="blue--text">Finance<strong>Dkrv</strong></v-toolbar-title></v-toolbar>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </nav>
  <router-view/>
</template>

<style>
body, html{
  background: #001020;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #ffffff; */
  background: #001020;
}

nav {
  padding: 30px;
  color: #42b983;
}

nav a {
  font-weight: bold;

}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
