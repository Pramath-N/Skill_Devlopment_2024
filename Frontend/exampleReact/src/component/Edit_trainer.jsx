import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Edit_trainer({ onUpdateTrainer }) {
  const { id } = useParams(); // Get the trainer ID from the route parameter
  const navigate = useNavigate();

  // Define state variables to hold the trainer's current information
  const [trainer_name, setTrainerName] = useState("");
  const [trainer_phno, setTrainerPhno] = useState("");
  const [trainer_location, setTrainerLocation] = useState("");
  const [trainer_skills, setTrainerSkills] = useState("");

  // Fetch the current trainer details
  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/trainer/${id}`
        );
        const {
          trainer_name,
          trainer_phone,
          trainer_location,
          trainer_skills,
        } = response.data;
        setTrainerName(trainer_name);
        setTrainerPhno(trainer_phone);
        setTrainerLocation(trainer_location);
        setTrainerSkills(trainer_skills);
      } catch (error) {
        console.error("Error fetching trainer details:", error);
      }
    };
    fetchTrainer();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTrainer = {
      trainer_name,
      trainer_location,
      trainer_skills,
      trainer_phno,
    };

    try {
      const response = await axios.put(
        `http://localhost:3000/api/trainer/${id}`,
        updatedTrainer
      );
      if (response.status === 200) {
        onUpdateTrainer(response.data); // Notify parent component if necessary
        navigate("/"); // Redirect back to the trainer list page
      }
    } catch (error) {
      console.error("Error updating trainer:", error);
      alert("An error occurred while updating the trainer.");
    }
  };

  return (
    <div className="container">
      <h4>Edit Trainer Details</h4>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="col-sm-6">
          <label htmlFor="trainerName" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="trainerName"
            value={trainer_name}
            onChange={(e) => setTrainerName(e.target.value)}
            required
          />
        </div>

        <div className="col-sm-6">
          <label htmlFor="trainerPhno" className="form-label">
            Phone Number:
          </label>
          <input
            type="number"
            className="form-control"
            id="trainerPhno"
            value={trainer_phno}
            onChange={(e) => setTrainerPhno(e.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="trainerLocation" className="form-label">
            Location:
          </label>
          <input
            type="text"
            className="form-control"
            id="trainerLocation"
            value={trainer_location}
            onChange={(e) => setTrainerLocation(e.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="trainerSkills" className="form-label">
            Skills:
          </label>
          <input
            type="text"
            className="form-control"
            id="trainerSkills"
            value={trainer_skills}
            onChange={(e) => setTrainerSkills(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary btn-lg" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Edit_trainer;
