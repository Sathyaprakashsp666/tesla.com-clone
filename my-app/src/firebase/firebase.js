import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCiBf3dyPwWqNC83esP2PYZi2NWi5slkwc",
  authDomain: "tesla-clone-a8bd0.firebaseapp.com",
  projectId: "tesla-clone-a8bd0",
  storageBucket: "tesla-clone-a8bd0.appspot.com",
  messagingSenderId: "923991950069",
  appId: "1:923991950069:web:97107e529d0910fa163bbc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);   

const auth = firebaseApp.auth();

export { auth };
