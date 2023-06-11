import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginViewView from '../views/LoginView.vue'
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, getAuth } from 'firebase/auth'
import { auth, db, provider } from '@/main'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      auths: true,
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      auths: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginViewView,

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// const user = async () => {

//   return new Promise((resolve, reject) => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const uid = user.uid;
//         console.log(uid);
//         resolve(user);
//       } else {
        
//         reject(new Error('Usuário não autenticado'));
//       }
//     });
//   });

// }
// router.beforeEach( async (to, from, next) => {

  // const users = await user()

  // console.log(users);
  // if (to.meta.auths && users) {next()}
  //   else if (users == '') {
  //     console.log('adniel uid');
  //     next('login');
  //   } else {
  //     next();
  //   }

    
  // });



export default router
