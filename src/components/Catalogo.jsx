import React from 'react';
import './Catalogo.css';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import starsGif from '../assets/stars.gif';
import ImgTiburones from '../assets/Productos/Tiburones.jpg';
import ImgRayquaza from '../assets/Productos/Rayquaza.jpg';

function Catalogo() {
  const navigate = useNavigate();
  // Datos de ejemplo para los productos del catálogo
  const productos = [
    {
      id: 1,
      nombre: 'Tiburones',
      precio: 250,
      imagen: ImgTiburones,
      descripcion: 'Peluche de tiburón de alta calidad, perfecto para coleccionistas.'
    },
    {
      id: 2,
      nombre: 'Rayquaza',
      precio: 200,
      imagen: ImgRayquaza,
      descripcion: 'Peluche suave de oso polar, ideal para regalos.'
    },
    
    /*

    {
      id: 3,
      nombre: 'Dragones',
      precio: 300,
      imagen: 'https://via.placeholder.com/300x200?text=Dragones',
      descripcion: 'Dragón de peluche con detalles artesanales.'
    },
    {
      id: 4,
      nombre: 'Dinosaurios',
      precio: 180,
      imagen: 'https://via.placeholder.com/300x200?text=Dinosaurios',
      descripcion: 'Variedad de dinosaurios de peluche en diferentes tamaños.'
    },
    {
      id: 5,
      nombre: 'Animales Marinos',
      precio: 220,
      imagen: 'https://via.placeholder.com/300x200?text=Animales+Marinos',
      descripcion: 'Set de animales marinos en peluche.'
    },
    {
      id: 6,
      nombre: 'Animales de la Selva',
      precio: 270,
      imagen: 'https://via.placeholder.com/300x200?text=Animales+Selva',
      descripcion: 'Colección de animales de la selva en peluche.'
    }

    */
  ];

  return (
    <div className="catalogo-container" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${starsGif})` }}>
      <NavBar activeTab="catalogo" />
      
      <div className="catalogo-content">
        <h2>Catálogo de Productos</h2>
        <p className="catalogo-descripcion">Explora nuestra colección exclusiva de peluches artesanales</p>
        
        <div className="productos-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              <div className="producto-imagen-container">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                  className="producto-imagen"
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
    </div>
  );
}

export default Catalogo;