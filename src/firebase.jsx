import firebase from 'firebase/app';
import 'firebase/firestore';

// App's Firebase configuration (apiKey is domain restricted/secure)
const firebaseConfig = {
  apiKey: '***REMOVED***',
  authDomain: '***REMOVED***',
  databaseURL: '***REMOVED***',
  projectId: 'ptrchoi-portfolio',
  storageBucket: '***REMOVED***',
  messagingSenderId: '***REMOVED***',
  appId: '1:***REMOVED***:web:***REMOVED***',
  measurementId: '***REMOVED***',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();

export default firebase;
