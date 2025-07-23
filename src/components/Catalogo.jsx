import React, { useState, useEffect } from 'react';
import './Catalogo.css';
import NavBar from './NavBar';
import starsGif from '../assets/stars.gif';
import { db, storage } from '../firebase'; // Asegúrate de exportar storage desde firebase.js
import { collection, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';

function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'productos'));
        
        // Usamos Promise.all para manejar las URLs de las imágenes asincrónicamente
        const productosData = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const data = doc.data();
            let imagenUrl = 'https://via.placeholder.com/300x200?text=Imagen+no+disponible';
            
            try {
              // Si la imagen es una referencia gs://, obtenemos la URL de descarga
              if (data.imagenUr1 && data.imagenUr1.startsWith('gs://')) {
                const storageRef = ref(storage, data.imagenUr1);
                imagenUrl = await getDownloadURL(storageRef);
              } else if (data.imagenUr1) {
                // Si ya es una URL válida, la usamos directamente
                imagenUrl = data.imagenUr1;
              }
            } catch (error) {
              console.error("Error obteniendo URL de imagen:", error);
            }

            return {
              id: doc.id,
              nombre: data.name || 'Producto sin nombre',
              precio: data.precio || 0,
              imagen: imagenUrl,
              descripcion: data.descripcion || 'Descripción no disponible'
            };
          })
        );
        
        setProductos(productosData);
      } catch (error) {
        console.error("Error fetching productos: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) {
    return (
      <div className="catalogo-container" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${starsGif})` }}>
        <NavBar activeTab="catalogo" />
        <div className="catalogo-content">
          <h2>Cargando productos...</h2>
        </div>
      </div>
    );
  }

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
                <button className="producto-boton">
                  Añadir al carrito
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