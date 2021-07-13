// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
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
const auth = firebase.auth();

export const createUser = (email, password) => 
    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      sendVerificationEmail();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    });

const sendVerificationEmail = () => {
    return auth.currentUser.sendEmailVerification()
      .then(() => console.log("The verification mail has been send o your email address."))
      .catch((error) => console.log(error.code))
}

export const signInUser = (email, password) => {
  debugger;
  return auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    debugger;
    var user = userCredential.user;
    return user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    console.log(errorCode);
  });

}
