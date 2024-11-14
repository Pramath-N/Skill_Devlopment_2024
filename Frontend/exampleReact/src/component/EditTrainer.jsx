import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditTrainer({ trainers, onUpdateTrainer }) {
  const { id } = useParams(); // Get the trainer ID from the URL params
  const navigate = useNavigate();
  console.log("Trainer ID from URL: ", id);
  console.log("Trainer List: ", trainers);
  
  // Find the trainer by ID
  const trainer = trainers.find((tr) => tr._id === parseInt(id));

  // Handle case if trainer is not found
//   console.log("Hello" + trainer)
  if (!trainer) {
    return <div>Trainer not found!</div>;
  }

  // Initialize the state with the current trainer's data
  const [trainerName, setTrainerName] = useState(trainer.trainer_name);
  const [trainerLocation, setTrainerLocation] = useState(trainer.trainer_location);
  const [trainerSkills, setTrainerSkills] = useState(trainer.trainer_skills);
  const [trainerPhone, setTrainerPhone] = useState(trainer.trainer_phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the updated trainer object
    const updatedTrainer = {
      _id: trainer._id, // Ensure to pass the same ID as the original trainer
      trainer_name: trainerName,
      trainer_location: trainerLocation,
      trainer_skills: trainerSkills,
      trainer_phone: trainerPhone,
    };

    // Call the function to update the trainer in the parent component
    onUpdateTrainer(updatedTrainer);

    // Redirect back to the list page after the update
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Trainer</h2>
      <div>
        <label>Trainer Name:</label>
        <input
          type="text"
          value={trainerName}
          onChange={(e) => setTrainerName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Trainer Location:</label>
        <input
          type="text"
          value={trainerLocation}
          onChange={(e) => setTrainerLocation(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Trainer Skills:</label>
        <input
          type="text"
          value={trainerSkills}
          onChange={(e) => setTrainerSkills(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Trainer Phone:</label>
        <input
          type="tel"
          value={trainerPhone}
          onChange={(e) => setTrainerPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit">Update Trainer</button>
    </form>
  );
}

export default EditTrainer;