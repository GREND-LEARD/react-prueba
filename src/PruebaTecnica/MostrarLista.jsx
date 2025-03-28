import { useState, useEffect } from 'react';

function MostrarLista() {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Simulación de una llamada a una API
  useEffect(() => {
    // Simulamos un pequeño retraso para imitar una llamada a la API
    const timeoutId = setTimeout(() => {
      try {
        // Estos serían los datos que recibiríamos de la API
        const datosSimulados = [
          { id: 1, nombre: "Producto A", precio: 25.99, disponible: true },
          { id: 2, nombre: "Producto B", precio: 14.50, disponible: false },
          { id: 3, nombre: "Producto C", precio: 32.75, disponible: true },
          { id: 4, nombre: "Producto D", precio: 9.99, disponible: true },
          { id: 5, nombre: "Producto E", precio: 42.00, disponible: false }
        ];
        
        setDatos(datosSimulados);
        setCargando(false);
      } catch (err) {
        setError("Error al cargar los datos");
        setCargando(false);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Mostrar Lista de Datos</h2>
      
      {cargando && <p>Cargando datos...</p>}
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {!cargando && !error && (
        <div>
          <h3>Lista de Productos:</h3>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>ID</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Nombre</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Precio</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Disponible</th>
              </tr>
            </thead>
            <tbody>
              {datos.map(item => (
                <tr key={item.id}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.id}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.nombre}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>${item.precio.toFixed(2)}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    {item.disponible ? 
                      <span style={{ color: 'green' }}>Sí</span> : 
                      <span style={{ color: 'red' }}>No</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MostrarLista; 