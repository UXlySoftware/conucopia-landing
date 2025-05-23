import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import IMAGE from "@coinucopia/assets/how-it-works.png";

const steps = [
  {
    number: "1.",
    title: "Start the Coinucopia.finance bot",
    subtitle: "in Telegram",
  },
  {
    number: "2.",
    title: "Choose your role:",
    subtitle: "Creator or Speculator",
  },
  {
    number: "3.",
    title: "Take action:",
    subtitle: "Launch tokens, join groups, stake, or browse coins",
  },
  {
    number: "4.",
    title: "Grow your community",
    subtitle: "using bot-powered mechanics",
  },
  {
    number: "5.",
    title: "Track everything",
    subtitle: "directly in chat—no extra tools needed",
  },
];

const MotionBox = motion(Box);

const HowItWorks = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Grid container spacing={3} alignItems="center">
        {/* Heading */}
        <Grid
          size={12}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ fontSize: { xs: 28, md: 32 }, mb: 2 }}
          >
            How it Works
          </Typography>
          <Typography
            sx={{
              mb: 4,
              fontSize: 20,
              color: "text.secondary",
              fontFamily: "Helvetica",
            }}
          >
            Built for Simplicity. Designed for Hype.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <MotionBox
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 500,
                height: 500,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                background: `
                  radial-gradient(circle at 30% 50%, #D8B5FF 0%, transparent 70%),
                  radial-gradient(circle at 70% 50%, #F7A5D6 0%, transparent 70%)
                `,
                filter: "blur(120px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            <Box
              component="img"
              src={IMAGE}
              alt="How It Works"
              sx={{
                width: "100%",
                maxWidth: 500,
                position: "relative",
                zIndex: 1,
              }}
            />
          </MotionBox>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          {steps.map((step, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              sx={{ mb: 3, display: "flex", alignItems: "center", gap: 2 }}
            >
              <Typography
                sx={{
                  color: "#E771AB",
                  fontWeight: "bold",
                  fontSize: 64,
                  width: 32,
                  flexShrink: 0,
                }}
              >
                {step.number}
              </Typography>
              <Box sx={{ ml: 2 }}>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontWeight: 700,
                    fontFamily: "Helvetica",
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontFamily: "Helvetica",
                    color: "text.secondary",
                  }}
                >
                  {step.subtitle}
                </Typography>
              </Box>
            </MotionBox>
          ))}
        </Grid>
      </Grid>
    </MotionBox>
  );
};

export default HowItWorks;
