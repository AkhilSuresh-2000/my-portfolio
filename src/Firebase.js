import firebase from 'firebase'
import 'firebase/firestore';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCnR3eX7kb8mhtiu4DTTtlrRB8un8W9Arg",
    authDomain: "react-contact-from-7213d.firebaseapp.com",
    projectId: "react-contact-from-7213d",
    storageBucket: "react-contact-from-7213d.appspot.com",
    messagingSenderId: "1048776770484",
    appId: "1:1048776770484:web:f7927bdd4cbdb7c2d8a8e1"
});

var db = firebaseApp.firestore();

export{db}