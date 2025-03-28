import { useState } from 'react';

function ModificarTextos() {
  const [texto1, setTexto1] = useState('Texto 1');
  const [texto2, setTexto2] = useState('Texto 2');
  const [texto3, setTexto3] = useState('Texto 3');

  return (
    <div style={{ padding: '20px' }}>
      <h2>Modificar Textos</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <h3>{texto1}</h3>
        <input 
          type="text" 
          value={texto1}
          onChange={(e) => setTexto1(e.target.value)} 
          placeholder="Modifica el texto 1"
        />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <h3>{texto2}</h3>
        <input 
          type="text" 
          value={texto2}
          onChange={(e) => setTexto2(e.target.value)} 
          placeholder="Modifica el texto 2"
        />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <h3>{texto3}</h3>
        <input 
          type="text" 
          value={texto3}
          onChange={(e) => setTexto3(e.target.value)} 
          placeholder="Modifica el texto 3"
        />
      </div>
    </div>
  );
}

export default ModificarTextos; 