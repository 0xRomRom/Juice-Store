import cl from "./Login.module.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLSF6SuNkP-F2okC06-eqlsExrPfiholU",
  authDomain: "moon-juice.firebaseapp.com",
  projectId: "moon-juice",
  storageBucket: "moon-juice.appspot.com",
  messagingSenderId: "569051137523",
  appId: "1:569051137523:web:98707dc190d43c2a0d3e86",
  measurementId: "G-RZ67MXE3BH",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const auth = getAuth();

const Login = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const submitHandler = (e) => {
    console.log(usernameRef.current.value);
    console.log(passwordRef.current.value);

    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      usernameRef.current.value + "@gmail.com",
      passwordRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert(user.email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className={cl.app}>
      <form className={cl.form}>
        <label htmlFor="username" className={cl.label1}>
          Gebruikersnaam
        </label>
        <input
          type="text"
          id="username"
          className={cl.username}
          autoComplete="off"
          ref={usernameRef}
        />
        <label htmlFor="password" className={cl.label2}>
          Wachtwoord
        </label>
        <input
          type="password"
          id="password"
          className={cl.password}
          ref={passwordRef}
        />
        <button className={cl.login} onClick={submitHandler}>
          Aanmelden
        </button>
      </form>
    </div>
  );
};

export default Login;
