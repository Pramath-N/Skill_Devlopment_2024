const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./router/catalogRouter");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors()); 

const corsoptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));
app.use("/api/catalog", routes);
app.use(cors(corsoptions)); //
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});