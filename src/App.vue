
<template>
  <v-app id="inspire" color="secondary">
    <v-navigation-drawer v-model="drawer" color="secondary">
       <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    </v-navigation-drawer>

    <v-app-bar color="primary" >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="primary">Finance<strong>Dkrv</strong></v-toolbar-title>
    </v-app-bar>

    <v-main class="color h-1000" >
      <router-view/>
      <!-- <div class="fixed"> -->

      <v-menu :location="location"  transition="scale-transition" >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          
          v-bind="props"
          class="fixed " 
          icon="mdi-wallet-plus"
          variant="tonal"
          size="x-large"  
        >
          
        </v-btn>
      </template>

      <v-list  class="pa-0">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          class="pa-0 red"
          
        >
          <v-btn 
          width="250"
          color="secondary"
          
           
         ><v-icon
         class="pr-5"
      size="large"
      color="primary"
      :icon="item.icon"
        ></v-icon>{{item.title}}</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>


       
      <!-- </div> -->
    </v-main>
  </v-app>

</template>

<script>
  export default {
    data: () => ({ 
      
      drawer: false ,
      toggl: false,
      items: [
        { title: 'Trasferencia', icon: 'mdi-swap-vertical' },
        { title: 'Receitas' , icon: 'mdi-bank-plus' },
        { title: 'Despesas' , icon: 'mdi-bank-minus' },
        { title: 'Despesas cartão', icon: 'mdi-credit-card-outline'  },
      ],

      location: 'left',
    }),


    
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

body, html{
  /* background: #000000; */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* color: #ffffff; */
  background: #000000;
}
.color{
  /* background: #000000; */
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
