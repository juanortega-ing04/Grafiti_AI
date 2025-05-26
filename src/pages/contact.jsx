// src/pages/Contact.jsx
import React from 'react';
import '../Styles/Contact.css';

const integrantes = [
  {
    nombre: 'Juan Esteban Murcia',
    linkedin: 'https://www.linkedin.com/in/gutymurcia/',
  },
  {
    nombre: 'Juan David Ortega',
    linkedin: 'https://www.linkedin.com/in/juandaortegaa',
  },
  {
    nombre: 'Juan Camilo Ortegon',
    linkedin: 'https://www.linkedin.com/in/camilo-0rtegon/',
  },
];

// Función para obtener iniciales del nombre
const getInitials = (name) => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
};

const Contact = () => {
  return (
    <div className="container my-5" style={{ color: 'white' }}>
      <h1 className="mb-4">Contacto</h1>
      <p>Puedes ponerte en contacto con nosotros.</p>

      <div className="row">
        {integrantes.map(({ nombre, linkedin }) => (
          <div key={nombre} className="col-12 col-md-4 mb-4">
            <div className="card bg-dark text-white shadow-sm h-100">
              <div 
                className="d-flex align-items-center justify-content-center mx-auto mt-4 rounded-circle" 
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#6f42c1',
                  fontSize: '32px',
                  fontWeight: '700',
                  userSelect: 'none'
                }}
                aria-label={`Iniciales de ${nombre}`}
              >
                {getInitials(nombre)}
              </div>
              <div className="card-body text-center d-flex flex-column">
                <h5 className="card-title">{nombre}</h5>
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btnLinkedIn"
                                  >
                  Visitar LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

