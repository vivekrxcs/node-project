import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAHufixGzYz7gbanI7TUjIGzPihWMIPn78",
  authDomain: "chatapp-365c2.firebaseapp.com",
  databaseURL: "https://chatapp-365c2-default-rtdb.firebaseio.com",
  projectId: "chatapp-365c2",
  storageBucket: "chatapp-365c2.appspot.com",
  messagingSenderId: "1013092125286",
  appId: "1:1013092125286:web:8e0ddccf2c0d19b179fba7",
  measurementId: "G-H3LDETMLC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app)

export {db, storage, auth};

//const analytics = getAnalytics(app);