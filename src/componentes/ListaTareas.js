import { useState } from "react";
import "../componentes-estilo/ListaTareasStyle.css";
import Main from "./Main";
import Tareas from "./Tareas";

function ListaTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
      console.log("enviado");
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const editarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        const editado = prompt("Agregue cambio");
        tarea.texto = editado;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <Main onSubmit={agregarTarea}></Main>
      <section className="contenedor__lista">
        {tareas.map((tarea) => (
          <Tareas
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
            editarTarea={editarTarea}
          ></Tareas>
        ))}
      </section>
    </>
  );
}

export default ListaTareas;
