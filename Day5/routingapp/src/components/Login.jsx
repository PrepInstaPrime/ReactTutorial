import React, { useState } from "react";
import styles from "./Login.module.css";
// import use navigate for navigation
import { useNavigate } from "react-router-dom";
export default function Login() {
  let [user, setUser] = useState("");
  let [pass, setPass] = useState("");
  // decare navigate
  let navigate= useNavigate();
  let handleChange = (e) => {
    // console.log(e.target.name)
    let name = e.target.name;
    let value = e.target.value;
    // console.log(value)
    if (name == "user") {
      setUser(value);
    }
    if (name == "password") {
      setPass(value);
    }
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Welcome ${user}. your password was ${pass}`);
    navigate('/about'); // navigating to about page
  };
  return (
    <>
      <div className={styles.login}>
        Login to Your Account
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="user"
            id={styles.user}
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            id={styles.pass}
            placeholder="Password"
            onChange={handleChange}
          />
          <button className={styles.btn}>Login</button>
          <p className={styles.option}>Don't have account click here</p>
        </form>
      </div>
    </>
  );
}
