import firebase from "firebase";
import "firebase/firestore";

// firebase init goes here
const firebaseConfig = {
  apiKey: "AIzaSyD53iUSZHUMFXYE7PU8_c-xZhZI7p6iqV8",
  authDomain: "shoppinglist-d684b.firebaseapp.com",
  databaseURL: "https://shoppinglist-d684b.firebaseio.com",
  projectId: "shoppinglist-d684b",
  storageBucket: "shoppinglist-d684b.appspot.com",
  messagingSenderId: "1082048122070",
  appId: "1:1082048122070:web:0dff01f3c69722e3744d77",
  measurementId: "G-HYXJ9S3GQX"
};
firebase.initializeApp(firebaseConfig);

// firebase utils
const db = firebase.firestore();

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
};
db.settings(settings);

// firebase collections
const shoppinglist = db.collection("shoppinglist");

export { db, shoppinglist };
