import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CursosDetalhes.module.css";

const urlCursos = "http://localhost:5000/cursos";

const CursoDetalhes = (props) => {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);

  useEffect(() => {
    fetch(`${urlCursos}/${id}`)
      .then((res) => res.json())
      .then((data) => setCurso(data))
      .catch((error) => console.error("Erro ao buscar curso:", error));
  }, [id]);

  if (!curso) {
    return <p className={styles.mensagem}>Carregando curso...</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Detalhes do Curso</h1>
      <div className={styles.cursoCard}>
        <img
          src={curso.imagemUrl}
          alt={curso.nome}
          className={styles.cursoImagem}
        />
        <h2 className={styles.cursoNome}>{curso.nome}</h2>
        <p className={styles.cursoDescricao}>
          <b>Descrição:</b> <br />
          {curso.descricao}
        </p>
        <span className={styles.cursoDuracao}>
          Duração: {curso.duracao} horas
        </span>
        <span className={styles.cursoPreco}>Preço: R$ {curso.preco}</span>
      </div>

      <div className={styles.formulario}>
        <h3 className={styles.formTitulo}>Cadastre-se para mais informações</h3>
        <form>
          <input type="text" placeholder="Seu nome" className={styles.input} />
          <input
            type="email"
            placeholder="Seu e-mail"
            className={styles.input}
          />
          <button type="submit" className={styles.botaoCadastro}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CursoDetalhes;
