import TOKEN_CREATOR_LOGO from "@coinucopia/assets/token-creator-logo.svg";
import BLACK_GLOW from "@coinucopia/assets/black-glow.svg";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { CoinucopiaButton } from "@coinucopia/components";
import { motion } from "framer-motion";

const MotionButton = motion(CoinucopiaButton);
const MotionFeatureBox = motion(Box);

const features = [
  {
    points: [
      "Launch your own ERC20 memecoin in seconds",
      "Set token name, ticker, supply, and image",
    ],
  },
  {
    points: [
      "Assign tokens to specific Telegram groups",
      "Create vesting contracts with beneficiary configs",
    ],
  },
  {
    points: [
      "Airdrop, stake, and reward early supporters",
      "Get instant analytics: holders, whales, marketcap, and more",
    ],
  },
  {
    points: [
      "Show off staking leaderboards right in chat",
      "Reward the first N group members with tokens",
    ],
  },
];

const TokeCreators = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        component="img"
        src={TOKEN_CREATOR_LOGO}
        alt="Token Creator"
        sx={{ mb: 3, width: 140 }}
      />

      <Box position="relative">
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: 32, mb: 1 }}>
          For Token Creators
        </Typography>
        {!isMobile && (
          <Box
            component="img"
            src={BLACK_GLOW}
            sx={{
              position: "absolute",
              left: -100,
              top: -60,
            }}
          />
        )}
      </Box>
      <Typography
        variant="body1"
        sx={{ mb: 4, fontSize: 16, fontFamily: "Helvetica" }}
      >
        Your Token. Your Community. One Command Away.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <MotionFeatureBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              sx={{
                backgroundColor: "#F1C1FC",
                borderRadius: "40px",
                border: "2px solid #000000",
                padding: 3,
                textAlign: "left",
                minHeight: 130,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {feature.points.map((line, idx) => (
                <Typography
                  key={idx}
                  sx={{
                    fontSize: 20,
                    mb: 1,
                    textAlign: "center",
                    lineHeight: "28px",
                    fontWeight: 700,
                    fontFamily: "Helvetica",
                  }}
                >
                  • {line}
                </Typography>
              ))}
            </MotionFeatureBox>
          </Grid>
        ))}
      </Grid>

      <MotionButton
        variantType="filled"
        fullWidth
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        sx={{
          fontSize: { xs: 16, md: 20 },
          width: { xs: "100%", md: "auto" },
          padding: { xs: ".6rem 1rem" },
          mt: 5,
        }}
      >
        Create a Token Now
      </MotionButton>
    </Box>
  );
};

export default TokeCreators;
