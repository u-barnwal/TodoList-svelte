import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyAcSlW1bttg9As0oIVHZmhk1vHZGN_LzC8",
  authDomain: "todolist-svelte.firebaseapp.com",
  projectId: "todolist-svelte",
  storageBucket: "todolist-svelte.appspot.com",
  messagingSenderId: "1096926524284",
  appId: "1:1096926524284:web:6285a0747581bdc6c36af9",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
