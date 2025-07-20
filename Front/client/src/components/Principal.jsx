import React, { useState } from 'react';
import './Principal.css';
import productoImg from '../assets/Tiburones.jpg';
import starsGif from '../assets/stars.gif';

function Principal() {
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
      <nav className="nav">
        <a href="#">CV</a>
        <a href="#">CONTACTO</a>
        <a href="#">PRINCIPAL</a>
        <a href="#">SKILLS</a>
        <a href="#">CATALOGO</a>
      </nav>

      <div className="contenido">
        <div className="info-cuadro">
          <textarea
            value={infoText}
            onChange={handleTextChange}
            className="info-textarea"
          />
        </div>

        <div className="producto">
          <img src={productoImg} alt="Producto" />
          <h2>SE VENDE</h2>
          <p className="precio">s/250</p>
        </div>
      </div>

      <div className="botones">
        <a href="https://open.spotify.com/intl-es/track/4RVUw6uwxQGsbLBKAWNiHL?si=37007cd7b8654ea8" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn spotify">
          Cancion mas sonada en Spotify
        </a>
        <a href="https://www.youtube.com/watch?v=VvHCFDUwv4s&list=RDVvHCFDUwv4s&start_radio=1" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn youtube">
          Cancion mas sonada en Youtube
        </a>
      </div>
    </div>
  );
}

export default Principal;