import { useState } from "react";
import Style from "./Add_trainer.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add_trainer({ onAddTrainer }) {
  const [trainer_name, setTrainerName] = useState("");
  const [trainer_phno, setTrainerPhno] = useState("");
  const [trainer_location, setTrainerLocation] = useState("");
  const [trainer_skills, setTrainerSkills] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTrainer = {
      trainer_name,
      trainer_location,
      trainer_skills,
      trainer_phno,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/trainer/",
        newTrainer
      );

      if (response.status === 201) {
        onAddTrainer(response.data);
        setTrainerName("");
        setTrainerLocation("");
        setTrainerSkills("");
        setTrainerPhno("");
        navigate("/");
      }
    } catch (error) {
      console.error("Error adding trainer:", error);
      alert("An error occurred while adding the trainer.");
    }
  };

  return (
    <div className={Style.container}>
      <h4 className="mb-3">Trainer Details</h4>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="col-sm-6">
          <label htmlFor="firstName" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={trainer_name}
            onChange={(e) => setTrainerName(e.target.value)}
            required
          />
          <div className="invalid-feedback">Valid name is required.</div>
        </div>

        <div className="col-sm-6">
          <label htmlFor="phno" className="form-label">
            Phone Number:
          </label>
          <input
            type="number"
            className="form-control"
            id="phno"
            value={trainer_phno}
            onChange={(e) => setTrainerPhno(e.target.value)}
            required
          />
          <div className="invalid-feedback">
            Valid phone number is required.
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="location" className="form-label">
            Location:
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            value={trainer_location}
            onChange={(e) => setTrainerLocation(e.target.value)}
            required
          />
          <div className="invalid-feedback">Your location is required.</div>
        </div>

        <div className="col-12">
          <label htmlFor="skills" className="form-label">
            Skills:
          </label>
          <input
            type="text"
            className="form-control"
            id="skills"
            value={trainer_skills}
            onChange={(e) => setTrainerSkills(e.target.value)}
            required
          />
          <div className="invalid-feedback">Skills are required.</div>
        </div>

        <button className="btn btn-primary btn-lg" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Add_trainer;
