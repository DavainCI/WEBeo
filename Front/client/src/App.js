import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function Principal() {
  return (
    <div style={{ height: '100vh', backgroundColor: '#003366', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Bienvenido a la ruta /principal</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </Router>
  );
}

export default App;
