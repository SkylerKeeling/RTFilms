// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_KCYAGShI2Bpx7HsQLh4xy-VLl6LTpAw",
  authDomain: "rtfilms-e92f3.firebaseapp.com",
  projectId: "rtfilms-e92f3",
  storageBucket: "rtfilms-e92f3.appspot.com",
  messagingSenderId: "332972652547",
  appId: "1:332972652547:web:abae093406107251daf636",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
