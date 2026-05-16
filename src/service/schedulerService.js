const axios = require("axios");

const fetchDepots = async (token) => {

  const response = await axios.get(
    "http://4.224.186.213/evaluation-service/depots",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data.depots;
};

const fetchVehicles = async (token) => {

  const response = await axios.get(
    "http://4.224.186.213/evaluation-service/vehicles",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data.vehicles;
};

const optimizeSchedule = (vehicles, maxHours) => {

  const sorted = vehicles.sort(
    (a, b) => (b.Impact / b.Duration) - (a.Impact / a.Duration)
  );

  let totalHours = 0;

  let totalImpact = 0;

  const selected = [];

  for (const task of sorted) {

    if (totalHours + task.Duration <= maxHours) {

      selected.push(task);

      totalHours += task.Duration;

      totalImpact += task.Impact;
    }
  }

  return {
    selectedTasks: selected,
    totalHours,
    totalImpact
  };
};

module.exports = {
  fetchDepots,
  fetchVehicles,
  optimizeSchedule
};