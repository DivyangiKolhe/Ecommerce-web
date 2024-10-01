// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBUO4UiPbfuetX304RzLbxj5klgRjg-qgE',
  authDomain: 'myfirstapp-a8301.firebaseapp.com',
  projectId: 'myfirstapp-a8301',
  storageBucket: 'myfirstapp-a8301.appspot.com',
  messagingSenderId: '788913901223',
  appId: '1:788913901223:web:2a0fe19b78f4eb29261582',
  measurementId: 'G-J1VQN5VRTP',
};

// Initialize Firebase
const fireDB = getFirestore(app);
const auth = getAuth(app);
const app = initializeApp(firebaseConfig);

export { fireDB, auth };
