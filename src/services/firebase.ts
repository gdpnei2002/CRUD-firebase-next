import firebase from "firebase/app"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBLmRw4jmktXIoMoBLYG_SlafLU-T3UJLU",
  authDomain: "crud-foto.firebaseapp.com",
  projectId: "crud-foto",
  storageBucket: "crud-foto.appspot.com",
  messagingSenderId: "597347216954",
  appId: "1:597347216954:web:a116a44c2d11b1fd310f03"
};

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }else{
    firebase.app()
  }

  const database= firebase.database()

  export {database,firebase}