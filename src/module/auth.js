
import { onAuthStateChanged} from 'firebase/auth'
import { auths, db, provider,  } from '@/main'
import { doc, setDoc, getDoc } from "firebase/firestore";
export default {
    auth(to, from, next){
        

        onAuthStateChanged(auths, async (user) => {

          if (!user) {
            next('/login')
          } else if (user) {
            next()

            const { uid, photoURL, displayName, email } = user
            const userDatas = {uid, photoURL, displayName, email}
            // Armazenar dados do usuário no Local Storage
            const userData = localStorage.getItem('userData')
             if(!userData){
               localStorage.setItem('userData', JSON.stringify(userDatas))
               await setDoc(doc(db, email, 'user'), { uid, photoURL, displayName });

             }
          }
        })
        
    }
}