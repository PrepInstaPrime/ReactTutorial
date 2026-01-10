import React, { useState,useRef } from "react";
import styles from "./Login.module.css";
export default function Signup() {
  let [user, setUser] = useState("");
  let [pass, setPass] = useState("");
  let [login, setLogin] = useState(false);
  let userRef=useRef(null);
  let passRef=useRef(null);
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(userRef.value)
    setUser(userRef.current.value);
    setPass(passRef.current.value);
    setLogin(true);
    console.log(`Welcome ${user}. your password was ${pass}`);
  };
  return (
    <>
    {!login&&<div className={styles.login}>
        Register to Create Your Account
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="user"
            id={styles.user}
            placeholder="Username"
            ref={userRef}
          />
          <input
            type="password"
            name="password"
            id={styles.pass}
            placeholder="Password"
            ref={passRef}
          />
          <button className={styles.btn}>Login</button>
          <p className={styles.option}>Don't have account click here</p>
        </form>
      </div>}

      {login&&<div>
        <h1>{`Welcome ${user} , now you can explore our services`}</h1>
      </div>}
    </>
  );
}
