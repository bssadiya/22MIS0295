require("dotenv").config();

const Log = require("../../logging_middleware/logger");
const {
  fetchDepots,
  fetchVehicles,
  optimizeSchedule
} = require("../service/schedulerService");

const getSchedule = async (req, res) => {

  try {

    await Log(
      "backend",
      "info",
      "controller",
      "Schedule API called"
    );

    const token = process.env.ACCESS_TOKEN;

    const depots = await fetchDepots(token);

    const vehicles = await fetchVehicles(token);

    const result = depots.map(depot => {

      const optimized = optimizeSchedule(
        vehicles,
        depot.MechanicHours
      );

      return {
        depotId: depot.ID,
        ...optimized
      };
    });

    await Log(
      "backend",
      "info",
      "service",
      "Scheduling completed"
    );

    res.json(result);

  } catch (error) {

    console.log(error.message);

    await Log(
      "backend",
      "error",
      "handler",
      "Scheduling failed"
    );

    res.status(500).json({
      message: "Error generating schedule"
    });
  }
};

module.exports = {
  getSchedule
};