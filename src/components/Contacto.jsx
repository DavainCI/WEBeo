import React from 'react';
import './Contacto.css';
import NavBar from './NavBar';
import starsGif from '../assets/stars.gif';
import { 
  FaFacebookF, 
  FaWhatsapp, 
  FaInstagram, 
  FaXTwitter, 
  FaGithub,
  FaLinkedinIn, 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot // Icono actualizado
} from 'react-icons/fa6';

function Contacto() {
  return (
    <div className="contacto-container" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${starsGif})` }}>
      <NavBar activeTab="contacto" />

      <div className="contacto-content">
        <div className="contacto-info">
          <h2>CONTÁCTAME</h2>
          
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Correo Electrónico</h3>
              <p>rodrigodavalos2105@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h3>Teléfono</h3>
              <p>+51 951 865 927</p>
            </div>
          </div>

          <div className="info-item">
            <FaLocationDot className="info-icon" />
            <div>
              <h3>Ubicación</h3>
              <p>Lima, Perú</p>
            </div>
          </div>
        </div>

        <div className="contacto-redes">
          <h3>Mis Redes Sociales</h3>
          <div className="redes-buttons">
            <a href="https://www.facebook.com/davalooooois/" target="_blank" rel="noopener noreferrer" className="redes-btn facebook">
              <FaFacebookF className="redes-icon" />
              <span>Facebook</span>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+51951865927&text=Hola%20Quiero%20mas%20informaci%C3%B3n" target="_blank" rel="noopener noreferrer" className="redes-btn whatsapp">
              <FaWhatsapp className="redes-icon" />
              <span>WhatsApp</span>
            </a>
            <a href="https://x.com/Rodrigo71189151" target="_blank" rel="noopener noreferrer" className="redes-btn twitter">
              <FaXTwitter className="redes-icon" />
              <span>Twitter</span>
            </a>
            <a href="https://www.instagram.com/davaloooooooooos/" target="_blank" rel="noopener noreferrer" className="redes-btn instagram">
              <FaInstagram className="redes-icon" />
              <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/in/davainci-rodrigo-26663a376/" target="_blank" rel="noopener noreferrer" className="redes-btn linkedin">
              <FaLinkedinIn className="redes-icon" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/DavainCI" target="_blank" rel="noopener noreferrer" className="redes-btn github">
              <FaGithub className="redes-icon" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;