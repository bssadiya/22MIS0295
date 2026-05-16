require("dotenv").config();

const express = require("express");

const cors = require("cors");

const vehicleRoutes = require("./route/vehicleRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", vehicleRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});