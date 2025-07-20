import React from 'react';
import './Principal.css';
import productoImg from '../assets/Tiburones.jpg'; // Asegúrate de tener esta imagen
import starsGif from '../assets/stars.gif'; // Importa el GIF de fondo

function Principal() {
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
          <p>INFO (MAS TEXTO)</p>
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
          Escuchar en Spotify
        </a>
        <a href="https://www.youtube.com/watch?v=VvHCFDUwv4s&list=RDVvHCFDUwv4s&start_radio=1" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn youtube">
          Ver en YouTube
        </a>
      </div>
    </div>
  );
}

export default Principal;