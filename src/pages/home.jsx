// src/pages/Home.jsx
import React from 'react';
import '../Styles/colors.css';


const Home = () => {
  return (
    <div>
      <h1>Bienvenido a Graffiti AI</h1>
      <p>¡Crea arte digital único con nuestra IA!</p>
      <div className="card" >
        <img src="/Images/Graffiti-AI.jpg" class="card-img-top" alt="Logo Graffiti-AI.jpg"/>
        <div class="card-body">
        <h4 class="card-title">Graffiti AI</h4>
        <h5 class="card-text">En ciudades como Medellín, Bogotá y Cali, el grafiti es una expresión cultural poderosa, pero efímera.
      Graffiti AI busca preservar estos murales urbanos mediante inteligencia artificial. Utilizamos técnicas 
      como <strong>Neural Style Transfer</strong> para reinterpretar y transformar obras reales en arte digital estilizado, 
      promoviendo la identidad cultural colombiana en entornos digitales interactivos.</h5>
        <br/>
        <a href="/generator" className="cta-button">🎨 Creemos Arte</a>
    </div>
</div>
    </div>
    
  );
};

export default Home;
