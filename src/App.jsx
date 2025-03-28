import { useState } from 'react'
import './App.css'

// Componentes originales
import Estado from './Estado'
import String from './String'
import Booleano from './Booleano'
import Lista from './Lista'
import Objeto from './Objeto'
import Clase from './Clase'

// Componentes de la prueba técnica
import CambiarFondo from './PruebaTecnica/CambiarFondo'
import ModificarTextos from './PruebaTecnica/ModificarTextos'
import ValidarNumero from './PruebaTecnica/ValidarNumero'
import MostrarObjeto from './PruebaTecnica/MostrarObjeto'
import MostrarLista from './PruebaTecnica/MostrarLista'

function App() {
  const [seccion, setSeccion] = useState('componentes-originales');

  return (
    <div className="app-container">
      <header>
        <h1>Prueba React</h1>
        <div className="tabs">
          <button 
            onClick={() => setSeccion('componentes-originales')}
            className={seccion === 'componentes-originales' ? 'active' : ''}
          >
            Componentes Originales
          </button>
          <button 
            onClick={() => setSeccion('prueba-tecnica')}
            className={seccion === 'prueba-tecnica' ? 'active' : ''}
          >
            Prueba Técnica
          </button>
        </div>
      </header>

      <main>
        {seccion === 'componentes-originales' && (
          <div className="componentes-originales">
            <h2>Componentes Originales</h2>
            <div className="componente">
              <h3>Componente Estado</h3>
              <Estado />
            </div>
            <div className="componente">
              <h3>Componente String</h3>
              <String />
            </div>
            <div className="componente">
              <h3>Componente Booleano</h3>
              <Booleano />
            </div>
            <div className="componente">
              <h3>Componente Lista</h3>
              <Lista />
            </div>
            <div className="componente">
              <h3>Componente Objeto</h3>
              <Objeto />
            </div>
            <div className="componente">
              <h3>Componente Clase</h3>
              <Clase />
            </div>
          </div>
        )}

        {seccion === 'prueba-tecnica' && (
          <div className="prueba-tecnica">
            <h2>Prueba Técnica</h2>
            <div className="componente">
              <CambiarFondo />
            </div>
            <div className="componente">
              <ModificarTextos />
            </div>
            <div className="componente">
              <ValidarNumero />
            </div>
            <div className="componente">
              <MostrarObjeto />
            </div>
            <div className="componente">
              <MostrarLista />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App