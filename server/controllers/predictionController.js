const { getPrediction } = require("../services/flaskService");

const predictHousePrice = async (req, res) => {
  try {
    const houseData = req.body;

    const prediction = await getPrediction(houseData);

    return res.status(200).json(prediction);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  predictHousePrice,
};
