import { useState } from 'react';

function MostrarObjeto() {
  const [mostrar, setMostrar] = useState(false);
  
  const persona = {
    nombre: "María González",
    edad: 28,
    profesion: "Desarrolladora Frontend",
    hobbies: ["Leer", "Pintar", "Viajar"],
    direccion: {
      calle: "Calle Principal 123",
      ciudad: "Ciudad de México",
      pais: "México"
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Mostrar Datos de Objeto</h2>
      
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar Datos' : 'Mostrar Datos'}
      </button>
      
      {mostrar && (
        <div style={{ marginTop: '15px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
          <h3>Información de la Persona:</h3>
          <p><strong>Nombre:</strong> {persona.nombre}</p>
          <p><strong>Edad:</strong> {persona.edad}</p>
          <p><strong>Profesión:</strong> {persona.profesion}</p>
          <p><strong>Hobbies:</strong> {persona.hobbies.join(', ')}</p>
          <p><strong>Dirección:</strong> {persona.direccion.calle}, {persona.direccion.ciudad}, {persona.direccion.pais}</p>
        </div>
      )}
    </div>
  );
}

export default MostrarObjeto; 