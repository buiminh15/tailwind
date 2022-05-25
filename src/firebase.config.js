import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAS75f2HLsJnX0Fj9IyqKnGYXkyieGNRFY",
  authDomain: "food-delivery-app-70b9d.firebaseapp.com",
  projectId: "food-delivery-app-70b9d",
  storageBucket: "food-delivery-app-70b9d.appspot.com",
  messagingSenderId: "177639685417",
  appId: "1:177639685417:web:c39fd36918ec916e144b38",
  measurementId: "G-L062R82M0M"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };