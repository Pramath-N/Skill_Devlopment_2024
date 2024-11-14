import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./component/Nav";
import Add_trainer from "./component/Add_trainer";
import Get_trainer from "./component/Get_trainer";
import Edit_trainer from "./component/Edit_trainer";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [trainer, setTrainer] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/trainer/");
        setTrainer(response.data);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };
    fetchTrainers();
  }, []);

  const handleAddTrainer = (newTrainer) => {
    setTrainer([...trainer, newTrainer]);
  };

  const handleDeleteTrainer = async (trainerId) => {
    try {
      await axios.delete(`http://localhost:3000/api/trainer/${trainerId}`);
      setTrainer(trainer.filter((t) => t._id !== trainerId));
    } catch (error) {
      console.error("Error deleting trainer:", error);
    }
  };

  const handleUpdateTrainer = (updatedTrainer) => {
    setTrainer(
      trainer.map((t) => (t._id === updatedTrainer._id ? updatedTrainer : t))
    );
  };

  return (
    <BrowserRouter>
      <div className="container">
        <h1>Trainer Management</h1>

        <nav class="navbar bg-primary">
          <form class="container-fluid justify-content-start">
            <button class="btn btn-danger " type="button">
              <Link to="/trainer">TrainerList</Link>
            </button>
            <button class="btn btn-danger" type="button">
              <Link to="/add-trainer">AddTrainer</Link>
            </button>
          </form>
        </nav>
        <Routes>
          <Route
            path="/trainer"
            element={
              <Get_trainer
                trainers={trainer}
                onDeleteTrainer={handleDeleteTrainer}
              />
            }
          />
          <Route
            path="/add-trainer"
            element={<Add_trainer onAddTrainer={handleAddTrainer} />}
          />
          <Route
            path="/edit-trainer/:id"
            element={<Edit_trainer onUpdateTrainer={handleUpdateTrainer} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
