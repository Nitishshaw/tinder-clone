// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCIfZI-CEW05SQT2E-PC_Yct79y8xHYQy4",
    authDomain: "tinder-clone-a42b3.firebaseapp.com",
    projectId: "tinder-clone-a42b3",
    storageBucket: "tinder-clone-a42b3.appspot.com",
    messagingSenderId: "303528269408",
    appId: "1:303528269408:web:e8f3f166e9e8ecb03d9505",
    measurementId: "G-VQHNS3DMTM"
  };
   const firebaseApp = firebase.initializeApp(firebaseConfig);
    const database = firebaseApp.firestore();

    export default database;
