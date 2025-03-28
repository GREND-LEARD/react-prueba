import { useState } from "react";

function Clase() {

  function cambiarColor() {
    document.body.classList.toggle("rojo"); // Agrega o quita la clase al body
  }

  return (
    <button onClick={cambiarColor}>Cambiar Color</button>
  );
}

export default Clase;
