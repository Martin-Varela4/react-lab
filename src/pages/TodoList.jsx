import { useState } from "react";
import "./TodoList.css";

function ToDoList() {

  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");


  function agregarTarea() {

    if (nuevaTarea.trim() !== "") {

      const tarea = {
        id: Date.now(),
        texto: nuevaTarea.trim(),
        completada: false
      };

      setTareas([...tareas, tarea]);
      setNuevaTarea("");

    }
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  }

  function completarTarea(id) {

    setTareas(tareas.map((tarea) =>tarea.id === id? {...tarea, completada: !tarea.completada} : tarea));

  }


  return (
    <div className="todoList-container">
      <h2>Todo List</h2>
      <ul className="lista-tareas">

        {tareas.map((tarea) => (
            <li
              key={tarea.id}
              className={`tarea-item ${
                tarea.completada ? "completada" : ""
              }`}>
              <span className="tarea-texto">
              {tarea.texto}
              </span>

              <button className="eliminar-button"
                onClick={() => eliminarTarea(tarea.id)}>
                Eliminar
              </button>


              <button className="completar-button"
                onClick={() => completarTarea(tarea.id)}>
              
                { tarea.completada? "Desmarcar" : "Completar"}
              </button>
            </li>))

        }

      </ul>
      <input className="Tarea-input"
        type="text"
        placeholder="Añadir tarea..."
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}/>


      <button className="Tarea-button"
        onClick={agregarTarea}>

        Añadir Tarea

      </button>
    </div>
  );
}

export default ToDoList;