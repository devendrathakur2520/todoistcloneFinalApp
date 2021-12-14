
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


const firebaseConfig = firebase.initializeApp({
  // apiKey: "AIzaSyCHU27y5rsMZjBUBDCoPJ7ZxAmbT2JYd4w",
  // authDomain: "todoist-app-416bd.firebaseapp.com",
  // databaseURL: "https://todoist-app-416bd-default-rtdb.firebaseio.com",
  // projectId: "todoist-app-416bd",
  // storageBucket: "todoist-app-416bd.appspot.com",
  // messagingSenderId: "796056810582",
  // appId: "1:796056810582:web:dd095b2c693fb1f7e337f7",
  // measurementId: "G-0GMRZLLYW6",
  apiKey: "AIzaSyCI5hnChx3bNfZY9CfJCAlWIA0cAAPn2OI",
  authDomain: "todoist-app-122fc.firebaseapp.com",
  databaseURL: "https://todoist-app-122fc-default-rtdb.firebaseio.com",
  projectId: "todoist-app-122fc",
  storageBucket: "todoist-app-122fc.appspot.com",
  messagingSenderId: "708014072264",
  appId: "1:708014072264:web:bedb30c6cc39a423d620fd"

});

export {firebaseConfig as firebase}

