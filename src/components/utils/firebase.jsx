import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const addContact = async (data) => {
  try {
    const result = await addDoc(collection(db, "contact"), data);
    return result;
  } catch (e) {
    console.log("Error adding document: ", e);
  }
};

export const deleteContact = async (id) => {
  try {
    const result = await deleteDoc(doc(db, "contact", id));
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
