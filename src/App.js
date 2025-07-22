import React from 'react';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Principal from './components/Principal';
import Skills from './components/Skills';
import Cv from './components/Cv';
import Contacto from './components/Contacto';
import Catalogo from './components/Catalogo';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/skills" element={<Skills />} /> 
        <Route path="/cv" element={<Cv />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/catalogo" element={<Catalogo />} />

      </Routes>
    </Router>
  );
}

export default App;