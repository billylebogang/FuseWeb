import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAxe_sHuezTvD3Hi-aGgaGJquo9Xdtsg3k",
    authDomain: "fuseapp-6876b.firebaseapp.com",
    databaseURL: "https://fuseapp-6876b-default-rtdb.firebaseio.com",
    projectId: "fuseapp-6876b",
    storageBucket: "fuseapp-6876b.appspot.com",
    messagingSenderId: "897811826474",
    appId: "1:897811826474:web:75ea467643d822d30a4053"
  };


const app = initializeApp(firebaseConfig);

const username = document.getElementById('Username');
const password = document.getElementById('passw');

//password.style.backgroundColor= "red"

const auth = getAuth();

const button = document.getElementById('button');

button.addEventListener('click', (e)=>{
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location.href = 'index.html'
        console.log('it has worked');
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
    });

})



