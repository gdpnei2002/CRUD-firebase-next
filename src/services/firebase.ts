import firebase from "firebase/app"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyAEUpruXLvI03UORoFtqdMGDr8VV8ZB7Ic",
    authDomain: "crud-35a7a.firebaseapp.com",
    projectId: "crud-35a7a",
    storageBucket: "crud-35a7a.appspot.com",
    messagingSenderId: "449273808959",
    appId: "1:449273808959:web:0230fe247811eebeaa108a"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }else{
    firebase.app()
  }

  const database= firebase.database()

  export {database,firebase}