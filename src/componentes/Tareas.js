import "../componentes-estilo/TareasStyle.css";

import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiFillCheckCircle,
} from "react-icons/ai";

function Tareas({
  id,
  texto,
  completada,
  completarTarea,
  eliminarTarea,
  editarTarea,
}) {
  return (
    <div className="tarea__contenedor">
      <AiFillCheckCircle
        className={
          completada ? "tarea-icono-check completada" : "tarea-icono-check"
        }
        onClick={() => completarTarea(id)}
      />
      <div className="tarea__texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>

      <div className="contenedor__icono">
        <AiOutlineEdit
          className="tarea-icono"
          onClick={() => editarTarea(id)}
        />
        <AiOutlineDelete
          className="tarea-icono"
          onClick={() => eliminarTarea(id)}
        />
      </div>
    </div>
  );
}

export default Tareas;
