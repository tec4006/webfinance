<template>
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
import { signInWithPopup } from 'firebase/auth'


export default {
  name:'About',
  data() {
    return {
      email: '',
      senha: '',
      transacoes: []
    }
  },
  // computed: {
  //   usuarioLogado() {
  //     return this.$firebase.auth().currentUser
  //   }
  // },
  // created() {
  //   // Recupere as transações do usuário atual ao carregar o componente
  //   this.recuperarTransacoes()
  // },
  methods: {
  async  login() {
      const { email, senha } = this
        const use = await  signInWithPopup(this.$auth, this.$provider)
        console.log('user', use);
    },
    // sair() {
    //   this.$firebase.auth().signOut()
    //     .then(() => {
    //       console.log('Usuário desconectado com sucesso')
    //     })
    //     .catch(error => {
    //       console.error('Erro ao desconectar usuário:', error)
    //     })
    // },
    // recuperarTransacoes() {
    //   const user = this.$firebase.auth().currentUser

    //   if (user) {
    //     const transacoesRef = this.$firebase.database().ref('transacoes')
    //       .orderByChild('usuarioId')
    //       .equalTo(user.uid)

    //     transacoesRef.on('value', snapshot => {
    //       const transacoes = snapshot.val()
    //       this.transacoes = Object.values(transacoes)
    //     })
    //   } else {
    //     console.error('Nenhum usuário autenticado')
    //   }
    // }
  }
}
</script>

