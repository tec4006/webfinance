
<template>
    <v-app id="inspire" color="secondary">
        <v-navigation-drawer v-model="drawer" color="secondary">
           <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        </v-navigation-drawer>
    
        <v-app-bar color="primary" >
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="primary ">Finance<strong>Dkrv</strong> 

          </v-toolbar-title>
          <v-toolbar-title class="primary  d-flex justify-end ">
            <v-avatar
             class="ma-10"
              size="large"
              :image="this.photoURL"
            >
            </v-avatar>
          </v-toolbar-title>
        </v-app-bar>
   
        <v-main class="color">
            <slot></slot>
        </v-main>
    </v-app>
  
  </template>
  
  <script>
  name: 'Header'
    export default {
      data: () => ({ 
        photoURL:  "",
        drawer: false ,
       }),
    
    mounted() {
      const userData = localStorage.getItem('userData')

        const { uid, photoURL, displayName } = JSON.parse(userData)
        this.photoURL = photoURL
        // console.log(this.photoURL );
    },
    }
  </script>
  
  <style scoped>
  
  .fixed{
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
  .card{
    position: fixed;
    bottom: 80px;
    right: 80px;
  }
  .red{
    background: #222222;
  }
  
  main{
    position: relative;
    padding-top: 100px;
    height: 1000px;
  }

  .color{
    background: #000000;
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
  