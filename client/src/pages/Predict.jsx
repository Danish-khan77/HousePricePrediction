import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  TextField,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import { Link } from "react-router-dom";
import { useState } from "react";
import { predictHousePrice } from "../services/api";

const features = [
  "MSSubClass",
  "LotArea",
  "OverallCond",
  "YearBuilt",
  "YearRemodAdd",
  "BsmtFinSF2",
  "TotalBsmtSF",
  "MSZoning_FV",
  "MSZoning_RH",
  "MSZoning_RL",
  "MSZoning_RM",
  "LotConfig_CulDSac",
  "LotConfig_FR2",
  "LotConfig_FR3",
  "LotConfig_Inside",
  "BldgType_2fmCon",
  "BldgType_Duplex",
  "BldgType_Twnhs",
  "BldgType_TwnhsE",
  "Exterior1st_AsphShn",
  "Exterior1st_BrkComm",
  "Exterior1st_BrkFace",
  "Exterior1st_CBlock",
  "Exterior1st_CemntBd",
  "Exterior1st_HdBoard",
  "Exterior1st_ImStucc",
  "Exterior1st_MetalSd",
  "Exterior1st_Plywood",
  "Exterior1st_Stone",
  "Exterior1st_Stucco",
  "Exterior1st_VinylSd",
  "Exterior1st_Wd Sdng",
  "Exterior1st_WdShing",
];

function Predict() {
  const initialState = {};

  features.forEach((feature) => {
    initialState[feature] = "";
  });

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await predictHousePrice(formData);
      setPrice(response.predicted_price);
    } catch (error) {
      alert(error.message || "Prediction Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#1E293B 0%,#0F172A 65%,#020617 100%)",
      }}
    >
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(15,23,42,.75)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1200px",
            width: "100%",
            mx: "auto",
            justifyContent: "space-between",
          }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <HomeRoundedIcon color="primary" />
            <Typography variant="h6" fontWeight={700}>
              HousePredict AI
            </Typography>
          </Box>

          <Button
            component={Link}
            to="/"
            variant="outlined"
            startIcon={<ArrowBackRoundedIcon />}
          >
            Home
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ pt: 15, pb: 8 }}>
        <Typography variant="h3" align="center" fontWeight={700} mb={1}>
          Predict House Price
        </Typography>

        <Typography align="center" color="text.secondary" mb={6}>
          Enter your property details below.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {features.map((feature) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={feature}>
                <TextField
                  fullWidth
                  label={feature}
                  name={feature}
                  value={formData[feature]}
                  onChange={handleChange}
                  required
                />
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" mt={5}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              sx={{
                px: 5,
                py: 1.5,
                borderRadius: "30px",
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Predict House Price"
              )}
            </Button>
          </Box>
        </form>

        {price !== null && (
          <Card
            sx={{
              mt: 6,
              borderRadius: 4,
              background: "rgba(255,255,255,.05)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <CardContent>
              <Typography align="center" variant="h5">
                Predicted Price
              </Typography>

              <Typography
                align="center"
                variant="h3"
                color="primary"
                fontWeight={700}
                mt={2}
              >
                $ {Number(price).toLocaleString("en-US")}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Container>

      <Box
        sx={{
          py: 4,
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,.08)",
          background: "rgba(255,255,255,.03)",
        }}
      >
        <Typography color="text.secondary">
          © 2026 HousePredict AI • Built with React, Express, Flask &
          Scikit-Learn
        </Typography>
      </Box>
    </Box>
  );
}

export default Predict;
