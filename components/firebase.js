import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getReactNativePersistence, initializeAuth} from 'firebase/auth/react-native';

const firebaseConfig = {
  apiKey: "AIzaSyAxRrLMN1HUvGSSaZjYjKpqYcnB6sSoh2E",
  authDomain: "uber-app-5bfa9.firebaseapp.com",
  projectId: "uber-app-5bfa9",
  storageBucket: "uber-app-5bfa9.appspot.com",
  messagingSenderId: "104761631561",
  appId: "1:104761631561:web:29432b333b6f56e5f23098",
  measurementId: "G-TVLCTGM8WH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;