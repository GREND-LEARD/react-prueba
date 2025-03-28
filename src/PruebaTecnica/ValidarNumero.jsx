import { useState } from 'react';

function ValidarNumero() {
  const [numero, setNumero] = useState(0);
  const [esMayor, setEsMayor] = useState(false);

  const validarNumero = (valor) => {
    const num = parseInt(valor);
    setNumero(num);
    setEsMayor(num > 10);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Validar Número</h2>
      
      <div>
        <input 
          type="number" 
          value={numero}
          onChange={(e) => validarNumero(e.target.value)} 
          placeholder="Introduce un número"
        />
        
        <p>
          {esMayor 
            ? <span style={{ color: 'green' }}>El número {numero} es mayor que 10</span> 
            : <span style={{ color: 'red' }}>El número {numero} NO es mayor que 10</span>
          }
        </p>
      </div>
    </div>
  );
}

export default ValidarNumero; 