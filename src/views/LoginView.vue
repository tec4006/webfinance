<template>
  
  <v-app class="color" >

    <v-card

      class="ma-auto"
      max-width="394"
      
      color="primary"
      
      
    >
      <v-img
        src="https://techcrunch.com/wp-content/uploads/2019/10/ShieldsFamily_3x_L4olEeF.max-1000x1000.png"
        height="100px"
        
      ></v-img>
      
      <v-divider :thickness="50"/>

      <v-card-title>
        Faça login com sua conta Google
      </v-card-title>
  
      <v-card-subtitle>
        Ja somos mais de 200 usuarios
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          @click="login"
          color="#ffffff"
          size="x-large"
          variant="tonal"
        >
          Logar
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            Nosso login com conta do Google oferece um ambiente seguro e confiável. Protegemos suas informações pessoais de maneira rigorosa, garantindo a privacidade dos seus dados. Utilizamos medidas de segurança avançadas para manter suas informações seguras durante todo o processo de autenticação. Conte conosco para fornecer um login seguro e protegido. Sua segurança é nossa prioridade máxima.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-app>


 
 
</template>

<script>


// Components
import Overview from '../components/overview/overview.vue'
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth'
export default ({
  name: 'LoginView',

  components: {
    Overview,
  },
  data: () => ({
      show: false,
    }),


  methods: {
    async login() {
      try {
        const result = await signInWithPopup(this.$auth, this.$provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log("credential: ", credential);
        const token = credential.accessToken;
        console.log('token:', token);
        const { uid, photoURL, displayName } = result.user;
        console.log('user01:', uid);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      }
    },
  }
});




</script>
<style scoped>
.color{
  background: black;
}
</style>