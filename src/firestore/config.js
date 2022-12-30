// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0QaQlnn19kITOActiTcAtXUeM3YNXiik",
  authDomain: "manatour-13252.firebaseapp.com",
  projectId: "manatour-13252",
  storageBucket: "manatour-13252.appspot.com",
  messagingSenderId: "1028303008267",
  appId: "1:1028303008267:web:49b5a368c158bcdc654d0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}