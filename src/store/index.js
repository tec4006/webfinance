import { defineStore } from 'pinia'



export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      description: '',
      money: '',
      category: '',
      date: '',
      conta: '',
      receita: ''
    }
  },
  actions:  {
    salva(description){
      this.description = description,
      this.money,
      this.category ,
      this.date ,
      this.conta,
      this.receita,
      console.log(this.description);
    }
  },
  getters: {
    olha(){
      return console.log(this.receita);
    }
  }
})