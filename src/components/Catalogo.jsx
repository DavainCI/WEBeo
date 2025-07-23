import React, { useState } from 'react';
import './Catalogo.css';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import starsGif from '../assets/stars.gif';
import ImgTiburones from '../assets/Productos/Tiburones.jpg';
import ImgRayquaza from '../assets/Productos/Rayquaza.jpg';

function Catalogo() {
  const navigate = useNavigate();
  const [imagenAmpliada, setImagenAmpliada] = useState(null);

  const productos = [
    {
      id: 1,
      nombre: 'Tiburones',
      precio: 250,
      imagen: ImgTiburones,
      descripcion: 'Cautivadora escena submarina con siluetas de tiburones bajo una luz brillante en el océano azul profundo. Perfecta para amantes del mar y arte sereno.'
    },
    {
      id: 2,
      nombre: 'Rayquaza',
      precio: 200,
      imagen: ImgRayquaza,
      descripcion: 'Vibrante pintura acrílica de Rayquaza envuelto en una torre bajo un cielo estilizado. Ideal para fans de Pokémon y arte anime.'
    },
  ];

  return (
    <div className="catalogo-container" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${starsGif})` }}>
      <NavBar activeTab="catalogo" />
      
      <div className="catalogo-content">
        <h2>Catálogo de Productos</h2>
        <p className="catalogo-descripcion">Explora mi colección exclusiva de objetos </p>
        
        <div className="productos-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              <div 
                className="producto-imagen-container"
                onClick={() => setImagenAmpliada(producto.imagen)}
              >
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                  className="producto-imagen-ampliada"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/300x200?text=Imagen+no+disponible';
                  }}
                />
              </div>      
              <div className="producto-info">
                <h3 className="producto-nombre">{producto.nombre}</h3>
                <p className="producto-descripcion">{producto.descripcion}</p>
                <p className="producto-precio">s/{producto.precio}</p>
                <button 
                  className="producto-boton" 
                  onClick={() => navigate('/contacto')}
                >
                  LO QUIERO
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      {imagenAmpliada && (
        <div 
          className="imagen-modal" 
          onClick={() => setImagenAmpliada(null)}
        >
          <div className="imagen-modal-contenido">
            <img 
              src={imagenAmpliada} 
              alt="Vista ampliada" 
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalogo;