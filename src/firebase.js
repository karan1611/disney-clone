import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJMXh-TiAFPwmBWbNKGK46OGQ3xvbZP74",
    authDomain: "disneyplus-clo.firebaseapp.com",
    projectId: "disneyplus-clo",
    storageBucket: "disneyplus-clo.appspot.com",
    messagingSenderId: "838542793262",
    appId: "1:838542793262:web:2f4490a36daf733df89dbf",
    measurementId: "G-QMYN0V7M47"
  };

  const firebaseapp= firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

   export { auth, provider, storage};
   export default db;
