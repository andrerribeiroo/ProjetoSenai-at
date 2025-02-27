import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logo}>
          <img src="/senai-logo.png" alt="SENAI Logo" />
        </Link>

        <nav className={styles.navbar}>
          <Link to="/" className={styles.navLink}>
            Cursos
          </Link>
          <Link to="/Historia" className={styles.navLink}>
            Sobre
          </Link>
          <Link to="/Contato" className={styles.navLink}>
            Contato
          </Link>
        </nav>

        <Link to="/Login" className={styles.loginButton}>
          Login
        </Link>
      </div>
    </header>
  );
}
