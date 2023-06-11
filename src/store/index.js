import { createStore } from 'vuex'

export default createStore({
  state: {
    user: true
      
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
