import React from "react";
import { Link } from "react-router-dom";
import Style from "./Get_trainer.module.css";
function Get_trainer({ trainers, onDeleteTrainer }) {
  return (
    <div className={Style.container}>
      <ul style={{ textAlign: "justify", listStyleType: "none", padding: 0 }}>
        {trainers.map((trainer) => (
          <li key={trainer._id} style={{ marginBottom: "1rem" }}>
            <strong>Name:</strong> {trainer.trainer_name} <br />
            <strong>Location:</strong> {trainer.trainer_location} <br />
            <strong>Skills:</strong> {trainer.trainer_skills} <br />
            <strong>Phone:</strong> {trainer.trainer_phno} <br />
            <Link to={`/edit-trainer/${trainer._id}`}>
              <button className="btn btn-secondary btn-sm">Edit</button>
            </Link>
            <button
              onClick={() => onDeleteTrainer(trainer._id)}
              className="btn btn-danger btn-sm"
              style={{ marginLeft: "5px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Get_trainer;
