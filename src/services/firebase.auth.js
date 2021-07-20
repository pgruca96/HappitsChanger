import firebase from './firebase.config'
import 'firebase/auth'

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

export const signInUser = (email, password) =>
  auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    console.log(userCredential.user)
    const user = userCredential.user;
    const { email, displayName, phoneNumber, photoURL, refreshToken } = user;
    localStorage.setItem("user", JSON.stringify(user))
    return user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    console.log(errorCode);
    return Promise.reject();
  });

export const signOutUser = () => 
  auth.signOut()
  .then(() => localStorage.removeItem("user"))
  .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
  })