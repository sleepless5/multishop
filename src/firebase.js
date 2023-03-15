
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDuf_5leWJzrPBqOqhVNhpfAtK9F20MFj0",
  authDomain: "multishop-18361.firebaseapp.com",
  projectId: "multishop-18361",
  storageBucket: "multishop-18361.appspot.com",
  messagingSenderId: "479451945263",
  appId: "1:479451945263:web:c11bec8a05ac282aa7a9da"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)

export default app