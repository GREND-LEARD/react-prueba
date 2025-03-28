import { useState } from "react";

function Objeto() {
  const [usuario, setUsuario] = useState({
    nombre: "Juan",
    edad: 25,
  });

  function cambiarEdad(parametro) {
    setUsuario({ ...usuario, edad: parametro.target.value }); // cambiar edad
  }

  function cambiarNombre(parametrodiferente) {
    setUsuario({ ...usuario, nombre: parametrodiferente.target.value }); // Modifica solo el nombre
  }

  return (
    <div>
      <h3>Nombre: {usuario.nombre}</h3>
      <h3>Edad: {usuario.edad}</h3>

      <input
        type="text"
        value={usuario.nombre}
        onChange={cambiarNombre}
      />
      <input
        type="text"
        value={usuario.edad}
        onChange={cambiarEdad}
      />
    </div>
  );
}

export default Objeto;
