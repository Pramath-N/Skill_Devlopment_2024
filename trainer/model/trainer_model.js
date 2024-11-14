const mongoose = require("mongoose");

const Trainer_db = new mongoose.Schema({
  trainer_name: { type: String, required: true },
  trainer_phno: { type: Number, required: true },
  trainer_location: { type: String, required: true },
  trainer_skills: { type: String, required: true },
});

module.exports = mongoose.model("trainer_db", Trainer_db);
