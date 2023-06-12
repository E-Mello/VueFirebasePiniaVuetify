// firebase.js

import 'firebase/auth';

import firebase from 'firebase/app';

//fica aqui


const firebaseConfig = {
  apiKey: "AIzaSyD4XIUTeBKhrOO3_yy9BjV5Tj9S_AJkoUg",
  authDomain: "authandvuetify.firebaseapp.com",
  projectId: "authandvuetify",
  storageBucket: "authandvuetify.appspot.com",
  messagingSenderId: "326095718017",
  appId: "1:326095718017:web:6f005aa63cdf850a1d6f80",
  measurementId: "G-Q9Z9PCL5MM"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
