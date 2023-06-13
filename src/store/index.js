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

    }
  },
  actions:  {

    salva(description, category, money, date, conta, receita){
      this.description = description,
      this.money = money,
      this.category = category,
      this.date = date,
      this.conta = conta,

      console.log(this.description);
    }
  },
  getters: {
    olha(){
      return this.description
    }
  }
})