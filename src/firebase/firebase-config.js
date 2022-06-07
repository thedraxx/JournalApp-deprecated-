import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyCLayGWHTOKpgQ9IUfrwL0DoEL65RqW3Oc",

    authDomain: "react-app-cursos-562e6.firebaseapp.com",

    projectId: "react-app-cursos-562e6",

    storageBucket: "react-app-cursos-562e6.appspot.com",

    messagingSenderId: "288987449701",

    appId: "1:288987449701:web:517e5b93cc9f2f07e8b98c",

    measurementId: "G-VLCD8L1Y4V"

};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase,
}
