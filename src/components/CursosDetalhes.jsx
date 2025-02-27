import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CursosDetalhes.module.css";

const urlCursos = "http://localhost:5000/cursos";

export default function CursosDetalhes() {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    fetch(`${urlCursos}/${id}`)
      .then((res) => res.json())
      .then((data) => setCurso(data))
      .catch((error) => console.error("Erro ao buscar curso:", error));
  }, [id]);

  const handleCadastro = (e) => {
    e.preventDefault();
    if (nome.trim() === "" || email.trim() === "") {
      setMensagem("Por favor, preencha todos os campos.");
      return;
    }

    setMensagem("Cadastro realizado com sucesso!");
    setNome("");
    setEmail("");
  };

  if (!curso) {
    return <p className={styles.mensagem}>Carregando curso...</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Detalhes do Curso</h1>

      <div className={styles.cursoCard}>
        <img src={curso.imagemUrl} alt="Curso" className={styles.cursoImagem} />
        <h2 className={styles.cursoNome}>{curso.nome}</h2>
        <p className={styles.cursoDescricao}>{curso.descricao}</p>
        <span className={styles.cursoDuracao}>Duração: {curso.duracao} horas</span>
      </div>

      <div className={styles.formulario}>
        <h3 className={styles.formTitulo}>Cadastre-se para mais informações</h3>
        <form onSubmit={handleCadastro}>
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.botaoCadastro}>
            Cadastrar
          </button>
        </form>

        {mensagem && (
          <p className={`${styles.mensagem} ${mensagem.includes("sucesso") ? styles.sucesso : styles.erro}`}>
            {mensagem}
          </p>
        )}
      </div>
    </div>
  );
}
