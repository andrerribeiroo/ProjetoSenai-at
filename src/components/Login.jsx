import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>Login</h1>
      <form className={styles.loginForm}>
        <label className={styles.loginLabel}>Email:</label>
        <input type="email" placeholder='Email' name="email" className={styles.loginInput} />

        <label className={styles.loginLabel}>Senha:</label>
        <input type="password" placeholder='Senha' name="senha" className={styles.loginInput} />

        <Link to="/" className={styles.loginButton}>
          Logar
        </Link>
      </form>
    </div>
  );
}
