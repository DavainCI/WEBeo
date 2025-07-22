import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './Skills.css';
import NavBar from './NavBar'; // Importa el componente NavBar


function Skills() {
  const [activeTab, setActiveTab] = useState('skills'); // Añade estado para activeTab
  
  // Atributos principales
  const mainAttributes = [
    { name: 'Velocidad', value: 100, color: '#1DB954' },
    { name: 'Potencia', value: 50, color: '#1ED760' },
    { name: 'Precisión', value: 60, color: '#1DB954' },
    { name: 'Resistencia', value: 40, color: '#1ED760' },
    { name: 'Agilidad', value: 30, color: '#1DB954' }
  ];

  // Atributos adicionales
  const additionalAttributes = [
    { name: 'Técnica', value: 20 },
    { name: 'Concentración', value: 0 }
  ];

  // Función para el pentágono
  const getPolygonPoints = () => {
    const center = 150;
    const radius = 120;
    const points = [];
    
    mainAttributes.forEach((attr, index) => {
      const angle = (index * 72 - 90) * (Math.PI / 180);
      const distance = (attr.value / 100) * radius;
      const x = center + distance * Math.cos(angle);
      const y = center + distance * Math.sin(angle);
      points.push(`${x},${y}`);
    });
    
    return points.join(' ');
  };

  return (
    <div className="skills-container">
      {/* Usa el componente NavBar en lugar del nav duplicado */}
      <NavBar activeTab={activeTab} />
      
      <h2>Habilidades</h2>
      
      {/* Contenedor principal lado a lado */}
      <div className="skills-content">
        {/* Sección de barras */}
        <div className="bars-section">
          <div className="skills-bars">
            {mainAttributes.map((attr, index) => (
              <div key={index} className="skill-bar-container">
                <span className="skill-name">{attr.name}</span>
                <div className="skill-bar-background">
                  <div 
                    className="skill-bar-fill" 
                    style={{ 
                      width: `${attr.value}%`,
                      backgroundColor: attr.color
                    }}
                  ></div>
                </div>
                <span className="skill-value">{attr.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sección del pentágono */}
        <div className="pentagon-section">
          <div className="pentagon-container">
            <svg width="300" height="300" viewBox="0 0 300 300">
              <polygon
                points="150,30 270,110 225,270 75,270 30,110"
                fill="none"
                stroke="#ddd"
                strokeWidth="1"
              />
              <polygon
                points={getPolygonPoints()}
                fill="rgba(0, 150, 255, 0.5)"
                stroke="rgba(0, 100, 255, 0.8)"
                strokeWidth="2"
              />
              {mainAttributes.map((attr, index) => {
                const angle = (index * 72 - 90) * (Math.PI / 180);
                const radius = 140;
                const x = 150 + radius * Math.cos(angle);
                const y = 150 + radius * Math.sin(angle);
                
                return (
                  <text
                    key={attr.name}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="attribute-label"
                  >
                    {attr.name}: {attr.value}
                  </text>
                );
              })}
            </svg>
          </div>
        </div>
      </div>

      {/* Atributos adicionales */}
      <div className="additional-attributes">
        <h3>Atributos adicionales:</h3>
        <ul>
          {additionalAttributes.map((attr, index) => (
            <li key={index}>
              <span className="attr-name">{attr.name}:</span>
              <span className="attr-value">{attr.value}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="code-note">
        <p>Nota: Los valores son subjetivos :u</p>
      </div>
    </div>
  );
}

export default Skills;