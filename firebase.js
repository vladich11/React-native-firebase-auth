import * as firebase from "firebase";
import { firebaseKeys } from './Firebasekeys';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: firebaseKeys.apiKey,
    authDomain: firebaseKeys.authDomain,
    projectId: firebaseKeys.projectId,
    storageBucket: firebaseKeys.storageBucket,
    messagingSenderId: firebaseKeys.messagingSenderId,
    appId: firebaseKeys.appId
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}


const auth = firebase.auth()

export { auth };