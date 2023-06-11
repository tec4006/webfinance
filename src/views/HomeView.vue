<template>
  <Overview />

  <div>
    <h2>Gerenciamento de Finanças</h2>

    <!-- Formulário de login -->
    <div >
      <h3>Entre na sua conta</h3>
      <form @submit.prevent="login">
        <label>
          E-mail:
          <input type="email" v-model="email">
        </label>
        <label>
          Senha:
          <input type="password" v-model="senha">
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>


 
  </div>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Overview from '../components/overview/overview.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    Overview,
  },
});
</script>
