import * as firebase from 'firebase';

export const firebaseconfig = {
   apiKey: "AIzaSyD0r6iv8v7xW6X_AmdJtwtVS2hQs1iqf1I",
   authDomain: "coderschool-final-project.firebaseapp.com",
   databaseURL: "https://coderschool-final-project.firebaseio.com",
   projectId: "coderschool-final-project",
   storageBucket: "coderschool-final-project.appspot.com",
   messagingSenderId: "76551851862"
}

firebase.initializeApp(firebaseconfig);
export const database = firebase.database();
