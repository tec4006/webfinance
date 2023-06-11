<template>
    <v-card
    class="mx-auto"
    max-width="398"
    color="secondary"
    
  >
  <v-row>
    <v-col cols="9">
      <v-card-item title="Visão Geral" color="primary">
       
      </v-card-item>

    </v-col>
    <v-col cols="3" class="d-flex align-center">
      <v-btn 
    class="" 
    href="/about" 
    color="secondary"
    elevation="0">
    <v-icon to="/abaut" icon="mdi-dots-vertical" ></v-icon>
  </v-btn>

    </v-col>
  </v-row>
    <!-- <hr color="#FF1867"> -->
    <v-divider color="#FF1867"  :thickness="9"></v-divider>
    <v-btn 
    class="w-100 mt-5" 
    href="/about" 
    color="secondary"
    elevation="0">
      <v-row align="center" >
        <v-col
          class="text-left"
          cols="6">
          
        <v-sheet 
         width="150"
         color="secondary"
         ><v-icon
         class="pr-5"
      size="large"
      color="primary"
      icon="mdi-bank"
    ></v-icon>Contas</v-sheet>
        </v-col>
        <v-spacer></v-spacer>
        <v-col 
        cols="6" 
        class="text-right">

          <v-sheet
         width="150"
         color="secondary"
         >R$ 0,00</v-sheet>
        </v-col>
      </v-row>
    </v-btn>
    <v-btn 
    class="w-100 mt-3" 
    href="/about" 
    color="secondary"
    elevation="0">
      <v-row align="center" >
        <v-col
          class="text-left"
          cols="6">
          
        <v-sheet 
         width="150"
         
         color="secondary"
         > <v-icon
         class="pr-5"
      size="large"
      color="primary"
      icon="mdi-bank-plus"
    ></v-icon>Receitas</v-sheet>
        </v-col>
        <v-spacer></v-spacer>
        <v-col 
        cols="6" 
        class="text-right">

          <v-sheet
         width="150"
         color="secondary"
         >R$ 0,00</v-sheet>
        </v-col>
      </v-row>
    </v-btn>
    <v-btn 
    class="w-100 pt-5" 
    href="/about" 
    color="secondary"
    elevation="0">
      <v-row align="center" >
        <v-col
          class="text-left"
          cols="6">
          
        <v-sheet 
         width="150"
         color="secondary"
         ><v-icon
         class="pr-5"
      size="large"
      color="primary"
      icon="mdi-bank-minus"
    ></v-icon>Despesas</v-sheet>
        </v-col>
        <v-spacer></v-spacer>
        <v-col 
        cols="6" 
        class="text-right">

          <v-sheet
         width="150"
         color="secondary"
         >R$ 0,00</v-sheet>
        </v-col>
      </v-row>
    </v-btn>

    <v-btn 
    class="w-100 my-5" 
    href="/about" 
    color="secondary"
    elevation="0">
      <v-row align="center" >
        <v-col
          class="text-left"
          cols="6">
          
        <v-sheet 
         width="150"
         color="secondary"
         ><v-icon
         class="pr-5"
      size="large"
      color="primary"
      icon="mdi-credit-card-outline"
    ></v-icon>Cartão de crédito</v-sheet>
        </v-col>

      

        <v-col 
        cols="6" 
        class="text-right">

          <v-sheet
         width="150"
         color="secondary"
         >R$ 0,00</v-sheet>
        </v-col>
      </v-row>
    </v-btn>


    

    


  </v-card>
</template>

<script>
export default {
    name:'Overview'

}
</script>

<style>

</style>