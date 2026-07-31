const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const predictionRoutes = require("./routes/predictionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", predictionRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "House Price Prediction Express Server Running",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
