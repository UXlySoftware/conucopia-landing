import { Box, Typography, Grid, Link } from "@mui/material";
import MOUSE from "@coinucopia/assets/mouse.svg";
import IMAGE from "@coinucopia/assets/hero-image.png";
import { motion } from "framer-motion";
import { CoinucopiaButton } from "@coinucopia/components";
import { ONESHOT_TELEGRAM_LINK } from "@coinucopia/constants/constants";

const MotionBox = motion(Box);
const MotionButton = motion(CoinucopiaButton);

const TryBot = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{
        border: "2px solid #111111",
        borderRadius: "40px",
        padding: "24px",
        backgroundColor: "#FDF1F74D",
      }}
    >
      <Grid container alignItems="center" spacing={4}>
        <Grid size={{ xs: 12, md: 6 }} pl={1} order={{ xs: 2, md: 1 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: 32, mb: 1 }}
          >
            Try the Bot Now
          </Typography>

          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 700,
              mb: 2,
              fontFamily: "Helvetica",
            }}
          >
            Deploy a Token in 30 Seconds
          </Typography>
          <Typography
            sx={{
              fontSize: 18,
              fontFamily: "Helvetica",
              mb: 3,
              color: "text.secondary",
              maxWidth: 450,
            }}
          >
            Check out our guided tutorial to deploy an ERC20 from your phone.
            It’s free to try. Whether you’re a creator or just here for the
            memes—<strong>Coinucopia.finance</strong> makes it effortless.
          </Typography>

          <Box
            display="flex"
            alignItems={{ xs: "center", md: "flex-start" }}
            gap={2}
            flexDirection={{ xs: "column", md: "row" }}
          >
            <Link
              href={ONESHOT_TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{ display: "inline-block", width: "100%" }}
            >
              <MotionButton
                variantType="filled"
                fullWidth
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                sx={{
                  fontSize: { xs: 16, md: 20 },
                  width: { xs: "100%", md: "auto" },
                  padding: { xs: ".6rem 1rem" },
                }}
              >
                Install Now on Telegram
              </MotionButton>
            </Link>
            <motion.img
              src={MOUSE}
              alt="mouse"
              initial={{ rotate: 0, opacity: 0 }}
              whileInView={{ rotate: [0, -10, 10, -10, 10, 0], opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
          <motion.img
            src={IMAGE}
            alt="Bot Coins"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              width: "100%",
              maxWidth: 400,
              display: "block",
            }}
          />
        </Grid>
      </Grid>
    </MotionBox>
  );
};

export default TryBot;
