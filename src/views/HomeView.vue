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
            @click="openDialog"
             
           ><v-icon
           class="pr-5"
        size="large"
        color="primary"
        :icon="item.icon"
        :title="item.title"
          ></v-icon>{{item.title}}</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>

    <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog v-model="dialogVisible" transition="dialog-bottom-transition" width="auto">
      <template v-slot>
        <v-card v-if="title == 'RECEITAS'">
          <v-toolbar color="primary" title="Add Receita"></v-toolbar>
          
          <v-card-actions class="justify-end">
            <v-btn variant="text" @click="closeDialog">Fechar</v-btn>
          </v-card-actions>
        </v-card>
        <v-card color="secondary" v-if="title == 'TRASFERENCIA'" min-width="400px">
          <v-toolbar color="primary" variant="tonal" :title="title"></v-toolbar>
          <v-card-text>
            <v-form  @submit="submitForm">
            <v-text-field color="primary01" clearable label="Descrição" prepend-icon="mdi-bank" variant="plain" v-model="receita.description" ></v-text-field>
            <v-text-field color="primary01" clearable label="R$0,00" prepend-icon="mdi-bank" variant="plain" v-model="receita.money" ></v-text-field>
            <v-text-field color="primary01" clearable label="Data" prepend-icon="mdi-bank" variant="plain" v-model="receita.dete" >{{ this.da }}</v-text-field>
            <v-autocomplete :items="items" prepend-icon="mdi-bank"  label="Conta" variant="plain" v-model="receita.conta" ></v-autocomplete>
            <v-autocomplete :items="items" prepend-icon="mdi-bank"  label="Categotia" variant="plain" v-model="receita.category" ></v-autocomplete>
            <v-btn type="submit" block class="mt-2">Submit</v-btn>
          </v-form>
      </v-card-text>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          
          <v-card-text>
            <v-text-field
       
              :counter="10"
              label="Name"
              
            ></v-text-field>
            <v-text-field
       
              :counter="10"
              label="Name"
              
            ></v-text-field>
            <v-text-field
       
              :counter="10"
              label="Name"
              
            ></v-text-field>
           
          </v-card-text>
        </div>
      </v-expand-transition>
          <v-card-actions class="justify-end">
            <v-btn variant="text" @click="closeDialog">Fechar</v-btn>
            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show" ></v-btn>
          </v-card-actions>
        </v-card>
      
        <v-card v-if="title == 'DESPESAS'">
          <v-toolbar color="primary" :title="title"></v-toolbar>
          <v-card-text>
            <div class="text-h2 pa-12">{{ title }}</div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn variant="text" @click="closeDialog">Fechar</v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-if="title == 'DESPESAS CARTÃO'">
          <v-toolbar color="primary" :title="title"></v-toolbar>
          <v-card-text>
            <div class="text-h2 pa-12">{{ title }}</div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn variant="text" @click="closeDialog">Fechar</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    </v-col>

  </v-row>

  <h4>{{ da }}</h4>

  </Header>

  <div>


 
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import { defineComponent } from 'vue';
import { useStore } from '@/store/index'

// Components
import Overview from '../components/overview/overview.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    Overview,
    Header,
  },
  data: () => ({ 
    receita: {
      description: '',
      money: '',
      category: '',
      date: '',
      conta: ''
    },
    dialogVisible: false,
      drawer: false ,
      show: false,
      toggl: false,
      title: '',
      da: '',
      items: [
        { title: 'Trasferencia', icon: 'mdi-swap-vertical' },
        { title: 'Receitas' , icon: 'mdi-bank-plus' },
        { title: 'Despesas' , icon: 'mdi-bank-minus' },
        { title: 'Despesas cartão', icon: 'mdi-credit-card-outline'  },
      ],

      location: 'left',
    }),
    methods: {
    openDialog(e) {
      this.title = e.target.innerText
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
     submitForm(event) {
      event.preventDefault();
      const storeId = useStore()

      console.log(this.receita);
      storeId.salva(this.receita.description)
      
      
       this.da =  storeId.olha
    }
  },


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
  