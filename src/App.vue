
<template>




      <Admin  />
      <!-- <div class="fixed"> -->

        <!-- <router-view/> -->
       
      <!-- </div> -->



</template>
<script>
import Admin from './layout/Admin.vue';
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, getAuth } from 'firebase/auth'
import { auth, db, provider,  } from '@/main'
import { doc, setDoc, getDoc } from "firebase/firestore";

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    console.log('onBeforeMount');

    onBeforeMount(async () => {
      console.log('aa');
        
      }
    )
  },
  components: { Admin }
}
</script>




<style scoped>

body, html{
    background: #000000;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* color: #ffffff; */
  background: #000000;
}

</style>
