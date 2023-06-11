<template>
  <Header>
    <Overview />

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
  </Header>

  <div>


 
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import { defineComponent } from 'vue';

// Components
import Overview from '../components/overview/overview.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    Overview,
    Header,
  },
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

});
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
    /* padding-top: 100px; */
    height: 1000px;
  }
  
  .color{
    background: #000000;
    color: #ff1869ab;
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
  