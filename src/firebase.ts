// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBxtNixDq7bgCzFXzmk8wbp4DbY6ZbltJE',
  authDomain: 'onoffon-f65e1.firebaseapp.com',
  projectId: 'onoffon-f65e1',
  storageBucket: 'onoffon-f65e1.appspot.com',
  messagingSenderId: '729452081497',
  appId: '1:729452081497:web:b64384a055d9fb8fd55c48',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
