import { createStore } from 'vuex'

export default createStore({
  state: {
      
  },
  getters: {
  },
  mutations: {
    transactions(state, data){
      state.transactions = data
    }
  },
  actions: {
  },
  modules: {
  }
})
