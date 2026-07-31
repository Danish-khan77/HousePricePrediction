import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const predictHousePrice = async (houseData) => {
  try {
    const response = await API.post("/predict", houseData);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Something went wrong.",
      }
    );
  }
};
