import React from 'react';
import './Cv.css';
import fotoCV from '../assets/foto_cv.jpg';
import NavBar from './NavBar';
import starsGif from '../assets/stars.gif';
import { useNavigate } from 'react-router-dom';

function Cv() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contacto'); // Redirige a la página de contacto
  };

  return (
    <div className="principal" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${starsGif})` }}>
      <NavBar activeTab="cv" />
      
      <div className="contenido">
        <div className="cv-card">
          <div className="cv-header">
            <img src={fotoCV} alt="Foto de perfil" className="cv-foto" />
            <div className="cv-info">
              <h1 className="cv-nombre">RODRIGO <span className="apellido">DAVALOS</span></h1>
              <p className="cv-puesto">Software Enginner</p>
              <div className="cv-experiencia">
                <h2>• EXPERIENCIA</h2>
                <p><strong>CEO </strong>Apple Inc</p>
                <p><strong>CTO </strong>Microsoft Corporation</p>
                <p className="cv-fecha">Civitatis Septiembre 2023 – Julio 2025</p>
                <p><strong>... </strong></p>
              </div>
            </div>
          </div>
          <div className="cv-lema" onClick={handleContactClick} style={{ cursor: 'pointer' }}>
            <p>Contrátame para desbloquear <br /> toda mi experiencia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;