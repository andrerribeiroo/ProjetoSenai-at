import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h4>Senai</h4>
          <img src="/senai-logo.png" alt="Senai" className={styles.footerLogo} />
        </div>

        <div className={styles.footerSection}>
          <h4>Redes Sociais</h4>
          <p>
            <i className="bx bxs-book-alt"></i>{" "}
            <a href="#" className={styles.footerLink}>
              /SenaiES
            </a>
          </p>
          <p>
            <i className="bx bxs-camera"></i>{" "}
            <a href="#" className={styles.footerLink}>
              @senaies
            </a>
          </p>
          <p>
            <i className="bx bx-play"></i>{" "}
            <a href="#" className={styles.footerLink}>
              SENAIES_Oficial
            </a>
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4>SAC - Serviço de Atendimento ao Cliente</h4>
          <p>
            <i className="bx bx-message-dots"></i>{" "}
            <a href="#" className={styles.footerLink}>
              Fale Conosco
            </a>
          </p>
          <p>
            <i className="bx bx-question-mark"></i>{" "}
            <a href="#" className={styles.footerLink}>
              Perguntas Frequentes
            </a>
          </p>
          <p>
            <i className="bx bx-phone-call"></i> Telefone: 0800 102 0880
          </p>
          <p>
            <i className="bx bxs-time"></i> Segunda a Sexta, 7h às 19h (exceto feriados)
          </p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          Esse site utiliza cookies para melhorar a experiência de usuário. Ao continuar a usar o site, você consente com a utilização de cookies.
        </p>
        <button className={styles.footerButton}>Entendi</button>
      </div>
    </footer>
  );
}
