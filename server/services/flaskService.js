const axios = require("axios");

const FLASK_API_URL = process.env.FLASK_API_URL;

const getPrediction = async (houseData) => {
  try {
    const response = await axios.post(`${FLASK_API_URL}/predict`, houseData);

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || "Failed to connect to Flask API",
    );
  }
};

module.exports = {
  getPrediction,
};
