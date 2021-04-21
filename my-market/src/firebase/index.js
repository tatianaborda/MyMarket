import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAo-seLKHRMvjH6HF5W_Tfxz8wWGwQlOBw",
    authDomain: "eter-tienda.firebaseapp.com",
    projectId: "eter-tienda",
    storageBucket: "eter-tienda.appspot.com",
    messagingSenderId: "347351954248",
    appId: "1:347351954248:web:c9425598fe435df1cab97d"
  })

  export function getFirebase(){
      return app;
  }
  export function getFirestore(){
    return firebase.firestore(app);
}