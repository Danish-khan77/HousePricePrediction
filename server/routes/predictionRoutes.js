const express = require("express");
const router = express.Router();

const { predictHousePrice } = require("../controllers/predictionController");

router.post("/predict", predictHousePrice);

module.exports = router;
