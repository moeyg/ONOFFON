import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBxtNixDq7bgCzFXzmk8wbp4DbY6ZbltJE',
  authDomain: 'onoffon-f65e1.firebaseapp.com',
  projectId: 'onoffon-f65e1',
  storageBucket: 'onoffon-f65e1.appspot.com',
  messagingSenderId: '729452081497',
  appId: '1:729452081497:web:b64384a055d9fb8fd55c48',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
