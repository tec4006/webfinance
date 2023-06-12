import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC2YaseeRdmaHGfF26IDrRuhcXh0H8mjt0",
  authDomain: "botfinancas-29527.firebaseapp.com",
  projectId: "botfinancas-29527",
  storageBucket: "botfinancas-29527.appspot.com",
  messagingSenderId: "885551410938",
  appId: "1:885551410938:web:ca1f4b4f15620edf036343"
};

const app = createApp(App)
console.log('main');
// Função para configurar o Firebase e adicioná-lo como plugin no Vue
function configureFirebase() {
  const firebaseApp = initializeApp(firebaseConfig)
  const auths = getAuth(firebaseApp)
  const db = getFirestore(firebaseApp)
  const provider = new GoogleAuthProvider()

  // Adicione as instâncias do Firebase ao contexto global do Vue
  app.config.globalProperties.$auth = auths
  app.config.globalProperties.$db = db
  app.config.globalProperties.$provider = provider

  return [ auths, db, provider, firebaseApp ]
}

// Chame a função configureFirebase antes de montar a aplicação Vue
const [ auths , db, provider,firebaseApp ]  =  configureFirebase()

import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(router).use(store).use(pinia).use(vuetify).mount('#app')

export {
  auths , db, provider,firebaseApp
}