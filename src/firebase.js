import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB7WNjZQ6yRcvrco-EGJFbkzasQ0tas41U",
    authDomain: "myfirebase1-3c854.firebaseapp.com",
    databaseURL: "https://myfirebase1-3c854.firebaseio.com",
    projectId: "myfirebase1-3c854",
    storageBucket: "myfirebase1-3c854.appspot.com",
    messagingSenderId: "660841096863"
};
firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const itemsRef = databaseRef.child("items") 
