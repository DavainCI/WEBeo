import React, { useState } from 'react';
import './Principal.css';
import starsGif from '../assets/stars.gif';
import ImgTiburones from '../assets/Productos/Tiburones.jpg';
import Cv from './Cv';
import Contacto from './Contacto';
import Catalogo from './Catalogo';
import NavBar from './NavBar'; // Importa el componente NavBar

function Principal() {
  const [activeTab, setActiveTab] = useState('principal');

  const renderContent = () => {
    switch(activeTab) {
      case 'cv':
        return <Cv />;
      case 'contacto':
        return <Contacto />;
      case 'catalogo':
        return <Catalogo />;
      case 'principal':
      default:
        return (
          <>
            <div className="info-cuadro">
              <textarea
                value={infoText}
                onChange={handleTextChange}
                className="info-textarea"
                aria-label="Información personal editable"
              />
            </div>
            <div className="producto">
              <img src={ImgTiburones} alt="Tiburones - Producto en venta" />
              <h2>SE VENDE</h2>
              <p className="precio">s/250</p>
            </div>
          </>
        );
    }
  };


  const [infoText, setInfoText] = useState(`¡Hola! Soy Rodrigo Dávalos Benito, un apasionado por la tecnología y el desarrollo de software, actualmente estudiante de Ingeniería de Software en la Universidad Nacional Mayor de San Marcos (UNMSM). Desde muy joven, he cultivado un fuerte interés por la innovación, la programación y la resolución de problemas, lo que me ha llevado a formarme en una de las instituciones más prestigiosas del país.

Mis fortalezas y habilidades:
• Formación académica sólida: Como estudiante de San Marcos, he desarrollado una base técnica robusta en programación, algoritmos, bases de datos y desarrollo de software, complementada con una actitud autodidacta para aprender nuevas tecnologías.
• Experiencia práctica: He participado en proyectos académicos y personales aplicando lenguajes como Java, Python y JavaScript, así como en el diseño de soluciones eficientes.
• Trabajo en equipo: Gracias a mi experiencia en proyectos universitarios, sé colaborar eficazmente bajo metodologías ágiles, comunicando ideas y aportando soluciones creativas.
• Responsabilidad y adaptabilidad: Combino mi disciplina como estudiante con la capacidad de asumir retos técnicos y cumplir metas en entornos desafiantes.

Mis objetivos:
Actualmente, busco oportunidades para aplicar mis conocimientos en desarrollo de software, ya sea en pasantías, proyectos freelance o colaboraciones tecnológicas, con el fin de seguir creciendo profesionalmente mientras contribuyo con soluciones innovadoras.
Estoy seguro de que mi dedicación, habilidades técnicas y pasión por la programación pueden ser un gran aporte para cualquier equipo o proyecto. ¡Estoy ansioso por conectar y explorar nuevas oportunidades!`);

  const handleTextChange = (e) => {
    setInfoText(e.target.value);
  };


  return (
    <div className="principal" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${starsGif})` }}>
      <NavBar activeTab={activeTab} /> {/* Usa el componente NavBar */}
      
      <div className="contenido">
        {renderContent()}
      </div>

      {activeTab === 'principal' && (
        <div className="botones">
          <a href="https://open.spotify.com/intl-es/track/4RVUw6uwxQGsbLBKAWNiHL?si=37007cd7b8654ea8" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn spotify"
            aria-label="Escuchar canción más sonada en Spotify"
          >
            Canción más sonada en Spotify
          </a>
          <a href="https://www.youtube.com/watch?v=VvHCFDUwv4s&list=RDVvHCFDUwv4s&start_radio=1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn youtube"
            aria-label="Ver canción más sonada en YouTube"
          >
            Canción más sonada en YouTube
          </a>
        </div>
      )}

    </div>
  );
}

export default Principal;