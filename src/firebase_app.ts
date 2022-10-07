
import { initializeApp } from "firebase/app";
import {  getAuth,  GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import  firebaseConfig from './config'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUIkovWEYKDnohGYrfVm8wk3XkO2ry5Pk",
    authDomain: "netflix-website-clone-97765.firebaseapp.com",
    projectId: "netflix-website-clone-97765",
    storageBucket: "netflix-website-clone-97765.appspot.com",
    messagingSenderId: "680863570989",
    appId: "1:680863570989:web:5bba70b18f6b0fa93c2ca4",
    measurementId: "G-5ZZQ2XM5H7"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider= new GoogleAuthProvider();


  


  


// const signInUser =  async (email, password)=> {
//   await signInWithEmailAndPassword(auth, email, password)
//   .then((authUser) => {
//     console.log(authUser);
//   })
//   .catch((error) => {
//     alert(error.message);
//   });
// }
// const registerUser =  async(email,password)=>{
//   await createUserWithEmailAndPassword(auth, email, password)
//   .then((authUser) => {
//     console.log(authUser);
//   })
//   .catch((error) => {
//     alert(error.message);
//     // ..
//   });
// }

// const logOutUser = async()=>{
//  await signOut(auth).then(() => {
  
//   }).catch((error) => {
//     alert(error.message);
//   });
// }

// export {auth, signInUser,registerUser, logOutUser, app};
// export default db;