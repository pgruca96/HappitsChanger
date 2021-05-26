// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from 'firebase';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCfyUCi96Ab27xACZhFIjo6tKKdknfvgQU",
    authDomain: "happitschanger.firebaseapp.com",
    projectId: "happitschanger",
    storageBucket: "happitschanger.appspot.com",
    messagingSenderId: "213975731930",
    appId: "1:213975731930:web:382901f0e492216e409fe3",
    measurementId: "G-2H0T5SH1FE"
  };

  firebase.initializeApp(firebaseConfig)

  export const createUser = (email,password) => {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }