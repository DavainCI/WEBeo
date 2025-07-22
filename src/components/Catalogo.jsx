import React from 'react';
import productoImg from '../assets/Tiburones.jpg';

function Catalogo() {
  return (
    <div className="catalogo-section">
      <h2>Catálogo</h2>
      <div className="catalogo-content">
        {/* Aquí puedes agregar el contenido del catálogo */}
        <div className="producto">
          <img src={productoImg} alt="Tiburones - Producto en venta" />
          <h2>SE VENDE</h2>
          <p className="precio">s/250</p>
        </div>
      </div>
    </div>
  );
}

export default Catalogo;