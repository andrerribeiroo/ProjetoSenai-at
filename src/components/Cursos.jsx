import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cursos.module.css";

const cursos = [
  { id: 1, nome: "TÉCNICO EM ELETROTÉCNICA", descricao: "Descrição do curso 1", imagem: "eletrica.png" },
  { id: 2, nome: "TÉCNICO EM MANUTENÇÃO AUTOMOTIVA", descricao: "Descrição do curso 2", imagem: "manutencao.jpg" },
  { id: 3, nome: "TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS", descricao: "Descrição do curso 3", imagem: "desenvolvimento.jpg" },
  { id: 4, nome: "TÉCNICO EM MECÂNICA", descricao: "Descrição do curso 4", imagem: "mecanica.jpg" },
  { id: 5, nome: "TÉCNICO EM SEGURANÇA DO TRABALHO", descricao: "Descrição do curso 5", imagem: "seguranca.jpg" },
  { id: 6, nome: "TÉCNICO EM RECURSOS HUMANOS", descricao: "Descrição do curso 6", imagem: "recursos.jpg" },
];

export default function Cursos() {
  return (
    <div className={styles.cursosContainer}>
      <h1>Seja Bem-Vindo</h1>
      <h2>Conheça os cursos disponíveis</h2>

      <div className={styles.cursosGrid}>
        {cursos.map((curso) => (
          <div key={curso.id} className={styles.cursoCard}>
            <img src={curso.imagem} alt={curso.nome} />
            <h3>{curso.nome}</h3>
            <p>{curso.descricao}</p>
            <Link to={`/CursosDetalhes/${curso.id}`} className={styles.cursoBotao}>
              Inscrever
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
