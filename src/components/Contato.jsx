import React from "react";
import { Link } from "react-router-dom";
import styles from "./Contato.module.css";

export default function Contato() {
  return (
    <div className={styles.contato}>
      <h2>Cadastra seus dados para receber mais informações sobre os cursos.</h2>
      <h1>Entre em contato:</h1>

      <form className={styles.formulario2}>
        <label>Nome:</label>
        <input type="text" placeholder="Nome" name="nome" />

        <label>Email:</label>
        <input type="email" placeholder="Email" name="email" />

        <label>Número:</label>
        <input type="number" placeholder="Número" name="numero" />

        <label>CPF 😏:</label>
        <input type="number" placeholder="CPF" name="cpf" />

        <Link to="/" className={styles.botao}>Enviar mensagem</Link>
      </form>
    </div>
  );
}
