
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

        onAuthStateChanged(auth, async (user) => {
          if (!user) {
            router.replace('/login')
          } else if (route.path === '/login' || user) {
            router.replace('/')
            const uid = user.uid
            const photoURL = user.photoURL
            const displayName = user.displayName
            const email = user.email

            // Armazenar dados do usuário no Local Storage
            const userData = { uid, photoURL, displayName }
            localStorage.setItem('userData', JSON.stringify(userData))

            await setDoc(doc(db, email, 'user'), { uid, photoURL, displayName });
          }
        })
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
