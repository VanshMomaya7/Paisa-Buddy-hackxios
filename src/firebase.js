import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAgfTGPwIgB9GXZ6c9huUFIRyDetLkT5do",
    authDomain: "fincogina.firebaseapp.com",
    projectId: "fincogina",
    storageBucket: "fincogina.firebasestorage.app",
    messagingSenderId: "679165330452",
    appId: "1:679165330452:web:e23c39f3ca40a62b025301" // Inferred web app ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
