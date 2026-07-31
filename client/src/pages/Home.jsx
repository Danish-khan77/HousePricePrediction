import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Paper,
} from "@mui/material";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#1E293B 0%,#0F172A 65%,#020617 100%)",
        overflow: "hidden",
      }}
    >
      {/* ================= NAVBAR ================= */}

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
            to="/predict"
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              borderRadius: "30px",
              px: 3,
            }}
          >
            Predict
          </Button>
        </Toolbar>
      </AppBar>

      {/* ================= HERO ================= */}

      <Container
        maxWidth="lg"
        sx={{
          pt: 18,
          pb: 10,
        }}
      >
        <Grid container spacing={8} alignItems="center">
          {/* LEFT */}

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{
                opacity: 0,
                x: -80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <Typography color="primary" fontWeight={600} mb={2}>
                AI Powered Property Estimation
              </Typography>

              <Typography
                variant="h2"
                fontWeight={700}
                sx={{
                  lineHeight: 1.15,
                }}
              >
                Predict House Prices
                <br />
                Using Machine Learning
              </Typography>

              <Typography
                mt={3}
                color="text.secondary"
                sx={{
                  maxWidth: 500,
                  fontSize: 18,
                }}
              >
                Estimate residential property prices instantly using our trained
                Linear Regression model with intelligent feature scaling.
              </Typography>

              <Button
                component={Link}
                to="/predict"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  mt: 5,
                  px: 5,
                  py: 1.5,
                  borderRadius: "35px",
                }}
              >
                Predict House Price
              </Button>
            </motion.div>
          </Grid>

          {/* RIGHT */}

          <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 260,
                  height: 260,
                }}
              >
                {/* Roof */}

                <motion.div
                  whileInView={{
                    rotate: [0, -8, 0],
                    y: [0, -18, 0],
                  }}
                  transition={{
                    duration: 1.5,
                  }}
                  style={{
                    position: "absolute",
                    left: 55,
                    top: 10,
                    width: 150,
                    height: 150,
                    background: "linear-gradient(135deg,#6366F1,#06B6D4)",
                    transform: "rotate(45deg)",
                    borderRadius: 20,
                  }}
                />

                {/* Body */}

                <motion.div
                  whileInView={{
                    scale: [0.92, 1],
                  }}
                  transition={{
                    duration: 1.3,
                  }}
                  style={{
                    position: "absolute",
                    left: 45,
                    top: 85,
                    width: 170,
                    height: 140,
                    borderRadius: 22,
                    background: "rgba(255,255,255,.08)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,.15)",
                  }}
                />

                {/* Door */}

                <motion.div
                  whileInView={{
                    y: [25, 0],
                    opacity: [0, 1],
                  }}
                  transition={{
                    duration: 1,
                  }}
                  style={{
                    position: "absolute",
                    bottom: 36,
                    left: 108,
                    width: 44,
                    height: 72,
                    background: "#4F46E5",
                    borderRadius: "10px 10px 0 0",
                  }}
                />

                {/* Window */}

                <motion.div
                  whileInView={{
                    opacity: [0, 1],
                    scale: [0.5, 1],
                  }}
                  transition={{
                    delay: 0.3,
                  }}
                  style={{
                    position: "absolute",
                    top: 120,
                    left: 72,
                    width: 38,
                    height: 38,
                    background: "#06B6D4",
                    borderRadius: 10,
                  }}
                />

                <motion.div
                  whileInView={{
                    opacity: [0, 1],
                    scale: [0.5, 1],
                  }}
                  transition={{
                    delay: 0.45,
                  }}
                  style={{
                    position: "absolute",
                    top: 120,
                    right: 72,
                    width: 38,
                    height: 38,
                    background: "#06B6D4",
                    borderRadius: 10,
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
          {/* Scroll Section */}

          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  mt: 10,
                  p: 6,
                  borderRadius: 5,
                  background: "rgba(255,255,255,.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,.08)",
                  textAlign: "center",
                }}
              >
                <Typography variant="h4" fontWeight={700} mb={2}>
                  Smart Prediction Process
                </Typography>

                <Typography color="text.secondary" mb={5}>
                  Every prediction follows the same preprocessing pipeline used
                  while training the model.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    flexWrap: "wrap",
                  }}
                >
                  {["🏠 Property", "⚙️ Scaling", "🧠 AI Model", "💰 Price"].map(
                    (item, index) => (
                      <motion.div
                        key={index}
                        whileInView={{
                          opacity: [0, 1],
                          y: [50, 0],
                          scale: [0.8, 1],
                        }}
                        transition={{
                          delay: index * 0.25,
                          duration: 0.7,
                        }}
                      >
                        <Paper
                          sx={{
                            p: 3,
                            width: 170,
                            borderRadius: 4,
                            background: "rgba(255,255,255,.06)",
                            textAlign: "center",
                            transition: ".3s",
                            "&:hover": {
                              transform: "translateY(-8px)",
                              background: "rgba(79,70,229,.18)",
                            },
                          }}
                        >
                          <Typography fontWeight={600}>{item}</Typography>
                        </Paper>
                      </motion.div>
                    ),
                  )}
                </Box>
              </Paper>
            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  py: 14,
                }}
              >
                <Typography variant="h3" fontWeight={700}>
                  Ready to Predict?
                </Typography>

                <Typography mt={2} mb={5} color="text.secondary">
                  Estimate your property's value in just a few seconds.
                </Typography>

                <Button
                  component={Link}
                  to="/predict"
                  size="large"
                  variant="contained"
                  sx={{
                    px: 6,
                    py: 1.6,
                    borderRadius: "35px",
                  }}
                >
                  Predict House Price
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}

      <Box
        sx={{
          py: 4,
          borderTop: "1px solid rgba(255,255,255,.08)",
          textAlign: "center",
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

export default Home;
