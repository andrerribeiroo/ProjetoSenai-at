import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Historia from './components/Historia'; 
import Cursos from './components/Cursos'; 
import Login from './components/Login';
import Footer from './components/Footer';
import CursosDetalhes from './components/CursosDetalhes';
import Contato from './components/Contato';
import Banner from './components/Banner';

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Cursos />} />
        <Route path="/Historia" element={<Historia />} />
        <Route path="/CursosDetalhes/:id" element={<CursosDetalhes />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
