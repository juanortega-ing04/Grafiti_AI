// src/pages/Generator.jsx
import React, { useState} from 'react';
import '../Styles/colors.css';

const Generator = () => {
  const [inputImage, setInputImage] = useState(null);
  const [outputImage, setOutputImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setInputImage(URL.createObjectURL(file));
  };

  const handleGenerate = () => {
    // Aquí conectarías tu API de transferencia de estilo
    setOutputImage(inputImage); // Placeholder para prueba visual
  };
  return (
    <div>
      <h1>Generador de Graffiti</h1>
      <p>¡Genera tu propio graffiti con IA aquí!</p>
      <div className="container text-center my-5">
      <h1>Transforma tu mural</h1>
      <div className="row justify-content-center align-items-center my-4">
        
        <div className="col-md-4">
          <h1>Foto de Mural</h1>
          <label className="upload-box">
            <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
            {inputImage ? (
              <img src={inputImage} alt="Input" className="img-preview" />
            ) : (
              <div className="upload-placeholder">+ Añade Imagen</div>
            )}
          </label>
        </div>

        <div className="col-md-2">
          <button className="btn-create mt-4" onClick={handleGenerate}>
            Crear
          </button>
        </div>

        <div className="col-md-4">
          <h1>Resultado</h1>
          <div className="result-box">
            {outputImage ? (
              <img src={outputImage} alt="Resultado" className="img-preview" />
            ) : (
              <div className="upload-placeholder">Creación</div>
            )}
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Generator;
