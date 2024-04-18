import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLAgqWpslY0nkvVxdjOrvOZxUR0gEaYFI",
  authDomain: "electiva1juantobon-c9ff8.firebaseapp.com",
  projectId: "electiva1juantobon-c9ff8",
  storageBucket: "electiva1juantobon-c9ff8.appspot.com",
  messagingSenderId: "85975619334",
  appId: "1:85975619334:web:b572f2200f68ec404ff087"
};

const appFirebase = initializeApp(firebaseConfig);
const auth = getAuth(appFirebase); 
export { auth };
export default appFirebase;