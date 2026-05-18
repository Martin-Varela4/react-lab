import BuscadorPeliculas from "./BuscadorPeliculas";
import ToDoList from "./TodoList";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

  <h1 className="dashboard-title">
    Actividad Integradora: Buscador de Películas y ToDo List
  </h1>

  <section className="dashboard">

    <div className="left">
      <BuscadorPeliculas />
    </div>

    <div className="right">
      <ToDoList />
    </div>

  </section>

</div>
  );
}

export default Dashboard;