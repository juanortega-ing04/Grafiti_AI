// src/pages/Generator.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/colors.css';

const Generator = () => {
  const [inputImage, setInputImage] = useState(null);
  const [inputFile, setInputFile] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setInputImage(URL.createObjectURL(file));
      setInputFile(file);
      setOutputImage(null); // limpiar resultado previo
    }
  };

  const handleGenerate = async () => {
    if (!inputFile) {
      alert('Por favor, sube una imagen primero');
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', inputFile);

      const response = await axios.post(
        'https://c1f7-34-87-24-65.ngrok-free.app/process-image',
        formData,
        { responseType: 'blob' }
      );

      const imageUrl = URL.createObjectURL(response.data);
      setOutputImage(imageUrl);
    } catch (error) {
      console.error('Error procesando imagen:', error);
      alert('Hubo un error al procesar la imagen.');
    } finally {
      setLoading(false);
    }
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
            <button className="btn-create mt-4" onClick={handleGenerate} disabled={loading}>
              {loading ? 'Procesando...' : 'Crear'}
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
