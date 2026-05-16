const axios = require("axios");

const Log = async (stack, level, pkg, message) => {

  try {
      const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",

      {
        stack: stack,
        level: level,
        package: pkg,
        message: message
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
      }
    );

    console.log("Log Created Successfully");

  } catch (error) {

    console.log("Logging Failed");

    if (error.response) {
      console.log(error.response.data);
    }
  }
};

module.exports = Log;