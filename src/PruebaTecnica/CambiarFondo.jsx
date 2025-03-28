import { useState } from 'react';

function CambiarFondo() {
  const [colorFondo, setColorFondo] = useState('#ffffff');

  const cambiarColor = () => {
    // Generar un color aleatorio
    const nuevoColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColorFondo(nuevoColor);
    document.body.style.backgroundColor = nuevoColor;
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Cambiar Color de Fondo</h2>
      <button onClick={cambiarColor}>Cambiar Color</button>
      <p>Color actual: {colorFondo}</p>
    </div>
  );
}

export default CambiarFondo; 