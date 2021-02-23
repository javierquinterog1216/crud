import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD5om7QDvVkK7oiVZeXOsVxQZ9pMqDXhSg",
    authDomain: "crud-aae04.firebaseapp.com",
    projectId: "crud-aae04",
    storageBucket: "crud-aae04.appspot.com",
    messagingSenderId: "768391542128",
    appId: "1:768391542128:web:54107750ea2dae5c07cbb5"
  };

  export const firebaseapp = firebase.initializeApp(firebaseConfig)