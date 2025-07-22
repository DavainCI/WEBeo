// NavBar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar({ activeTab }) {
  const navigate = useNavigate();

  const handleNavClick = (tab) => {
    if (tab === 'skills') {
      navigate('/skills');
    } else if (tab === 'principal') {
      navigate('/principal');
    }
    // Puedes agregar más rutas según sea necesario
  };

  return (
    <nav className="nav">
      <button 
        onClick={() => handleNavClick('cv')}
        className={`nav-button ${activeTab === 'cv' ? 'active' : ''}`}
        aria-label="Ver curriculum vitae"
      >
        CV
      </button>
      <button 
        onClick={() => handleNavClick('contacto')}
        className={`nav-button ${activeTab === 'contacto' ? 'active' : ''}`}
        aria-label="Ver información de contacto"
      >
        CONTACTO
      </button>
      <button 
        onClick={() => handleNavClick('principal')}
        className={`nav-button ${activeTab === 'principal' ? 'active' : ''}`}
        aria-label="Ver sección principal"
      >
        PRINCIPAL
      </button>
      <button 
        onClick={() => handleNavClick('skills')}
        className={`nav-button ${activeTab === 'skills' ? 'active' : ''}`}
        aria-label="Ver habilidades"
      >
        SKILLS
      </button>
      <button 
        onClick={() => handleNavClick('catalogo')}
        className={`nav-button ${activeTab === 'catalogo' ? 'active' : ''}`}
        aria-label="Ver catálogo"
      >
        CATALOGO
      </button>
    </nav>
  );
}

export default NavBar;