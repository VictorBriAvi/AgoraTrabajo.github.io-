import { useState } from "react";
import "../componentes-estilo/MainStyle.css";
import { v4 as uuidv4 } from "uuid";

function Main(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
    console.log("enviado");
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
    console.log("manejarEnvio");
  };
  return (
    <>
      <section className="contenedor__agregar">
        <form className="tarea__formulario" onSubmit={manejarEnvio}>
          <input
            className="tarea__input"
            type="text"
            placeholder="Enter Title"
            name="texto"
            onChange={manejarCambio}
          ></input>
          <button className="tarea__boton">ADD</button>
        </form>
      </section>
    </>
  );
}

export default Main;
