import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD0PdI2JEJidVGjvdEG182STKpd_Wq1jgc",
  authDomain: "blog-e550d.firebaseapp.com",
  projectId: "blog-e550d",
  storageBucket: "blog-e550d.appspot.com",
  messagingSenderId: "937265833376",
  appId: "1:937265833376:web:e53ad385dd00929ce730c5"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export{ db };