import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBCLsXItq0npDRefuNeK2cTb-Ig3bWllkQ",
    authDomain: "capstone-78cf8.firebaseapp.com",
    databaseURL: "https://capstone-78cf8.firebaseio.com",
    projectId: "capstone-78cf8",
    storageBucket: "capstone-78cf8.appspot.com",
    messagingSenderId: "634904116953",
    appId: "1:634904116953:web:4102a52520c06cfe32c8c8",
    measurementId: "G-GCDZ30TLHP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;