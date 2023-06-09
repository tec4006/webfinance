import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs,addDoc,doc , getDoc, updateDoc, deleteDoc} from "firebase/firestore";
// import dotenv from 'dotenv'
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592


const firebaseConfig = {
    apiKey: "AIzaSyC2YaseeRdmaHGfF26IDrRuhcXh0H8mjt0",
    authDomain: "botfinancas-29527.firebaseapp.com",
    projectId: "botfinancas-29527",
    storageBucket: "botfinancas-29527.appspot.com",
    messagingSenderId: "885551410938",
    appId: "1:885551410938:web:ca1f4b4f15620edf036343"
  };
  
  const app = initializeApp(firebaseConfig)
  
  const db = getFirestore(app);

  const deleteFinance = async (id) => {
    await deleteDoc(doc(db, "revenue", id));

  }


  
  async function addMoneyDB() {
    try {
      const docRef = await addDoc(collection(db, "account"), {
        uuid: 'dad',
        data: 'daniel'
      });
  
      console.log('Documento adicionado com ID:', docRef.id);
      await account(docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Erro ao adicionar documento:", error);
      return null;
    }
  }
  
  addMoneyDB();
  
// getFilterFinance()

  async function getAllFinance() {
    try {
      const citiesRef = collection(db, "revenue")
      const citiesSnapshot = await getDocs(citiesRef);
  
      let dados = []
      citiesSnapshot.forEach((doc) => {
        if (doc.exists()) {
          const cityid = doc.id;
          const cityData = doc.data();
        //   console.log(cityid);
        //   console.log(cityData);

          dados.push(doc.data())
        //   console.log("Dados do documento:", dados);
        
        } else {
          console.log("O documento não existe.");
        }

      });

      return  dados
    } catch (error) {
      console.error("Erro ao obter documentos:", error);
    }
  }

//   getAllFinance()

export {
    getAllFinance,
    deleteFinance
}
