<template>
  <Header>

    <div>
      <h2>Gerenciamento de Finanças</h2>
  
  
  
   
    </div>
  </Header>
</template>

<script>
import Header from '@/components/header/Header.vue'


export default {
  components: { Header },
  name: 'About',
  data() {
    return {
      transacoes: []
    }
  },
}

</script>

