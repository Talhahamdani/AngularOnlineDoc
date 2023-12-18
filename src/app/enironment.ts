import firebase from "firebase/compat/app";
import {Auth} from "@angular/fire/auth";
import {Firestore} from "@angular/fire/firestore";
import {Database} from "@angular/fire/database";
import {Storage} from "@angular/fire/storage";
import {initializeApp} from "@angular/fire/app";

export const environment={
  firebaseConfig:{
  apiKey: "AIzaSyDas28oFS3CtCMPmhnzvoz08iFCHLCOa7Q",
  authDomain: "angular-sign-up-545d6.firebaseapp.com",
  projectId: "angular-sign-up-545d6",
  storageBucket: "angular-sign-up-545d6.appspot.com",
  messagingSenderId: "3027736931",
  appId: "1:3027736931:web:e0f6a8dbf83f25ffe41b56"
},
  production:false,
};

// const app = initializeApp(firebaseConfig);





// export const initialApp = firebase.initializeApp(config);
//
// export const { auth } = firebase;
// export const db = firebase.firestore();
// export const dbr = firebase.database();
// export const storage = firebase.storage();



