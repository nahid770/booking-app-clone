// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAeZuTjYnsK9BoCdnW1I74CTWE6PJHpGxU",
  authDomain: "booking-app-clone.firebaseapp.com",
  projectId: "booking-app-clone",
  storageBucket: "booking-app-clone.appspot.com",
  messagingSenderId: "826136378970",
  appId: "1:826136378970:web:c5e870c4badfb5c0ec2263"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;