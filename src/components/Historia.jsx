import React from "react";
import styles from "./Historia.module.css";

export default function Historia() {
  return (
    <div>
      <header className={styles.historiaHeader}>
        <h1>História do SENAI</h1>
      </header>

      <section id="sobre" className={styles.historiaSection}>
        <div className={styles.historiaContainer}>
          <p>
            O Serviço Nacional de Aprendizagem Industrial (SENAI) foi fundado em
            1942 com o objetivo de formar mão-de-obra qualificada para a
            indústria brasileira. Desde sua criação, o SENAI se tornou uma das
            principais instituições de ensino técnico e profissionalizante do
            país, oferecendo cursos e programas em diversas áreas, como
            automação, mecânica, eletrônica, e muito mais. A instituição também
            desempenha um papel importante no desenvolvimento e inovação
            tecnológica do Brasil. Com mais de 70 anos de história, o SENAI
            contribui significativamente para a formação de milhares de
            profissionais e o avanço da indústria brasileira. A instituição tem
            ajudado a capacitar trabalhadores, promovendo o desenvolvimento das
            competências necessárias para o crescimento das indústrias e a
            inovação tecnológica. Além disso, o SENAI tem desempenhado um papel
            essencial na melhoria da qualidade de vida de muitas pessoas ao
            longo das décadas.
          </p>
        </div>
      </section>

      <section id="video" className={styles.historiaVideoSection}>
        <div className={styles.historiaContainer}>
          <h2>Vídeo Institucional</h2>
          <div className={styles.historiaVideo}>
            <iframe
              className={styles.historiaIframe}
              src="https://www.youtube.com/embed/VIDEO_ID"
              title=""
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
