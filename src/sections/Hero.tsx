import {
  Box,
  Typography,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
  Link,
} from "@mui/material";
import { CoinucopiaButton } from "@coinucopia/components";
import GLOW from "@coinucopia/assets/glow.svg";
import ARROW from "@coinucopia/assets/arrow.svg";
import TELEGRAM from "@coinucopia/assets/telegram.svg";
import HERO_IMAGE from "@coinucopia/assets/hero-image.png";
import BLUE_ARROW from "@coinucopia/assets/blue-arrow.svg";
import { motion } from "framer-motion";
import { ONESHOT_TELEGRAM_LINK } from "@coinucopia/constants/constants";

const MotionButton = motion(CoinucopiaButton);

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container spacing={{ xs: 2, md: 4 }} sx={{ py: 2 }}>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{ pt: { xs: 1, md: 8 }, pl: { xs: 0, md: 3 } }}
        order={{ xs: 2, md: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: 64, md: 80 },
              lineHeight: 1.2,
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <Box
              component="span"
              sx={{ position: "relative", display: "inline-block" }}
            >
              Launch
              {!isMobile && (
                <motion.img
                  src={GLOW}
                  alt="glow"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: "absolute",
                    top: "-80px",
                    right: "-55px",
                  }}
                />
              )}
            </Box>
            <br />
            Memecoins
          </Typography>
          <Box display="flex" gap={1}>
            <Box width="100%">
              <Typography
                variant="body1"
                sx={{
                  my: 2,
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  textAlign: { xs: "center", md: "start" },
                  fontFamily: `Helvetica`,
                }}
              >
                Hype Telegram and go <br />
                on-chain in 1 Tap.
              </Typography>

              <Stack>
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
                {!isMobile && (
                  <Box position="relative" display="inline-block">
                    <Box
                      component="img"
                      src={BLUE_ARROW}
                      alt="arrow"
                      sx={{ pl: 2, pt: 1 }}
                    />

                    <Box
                      component="img"
                      src={TELEGRAM}
                      alt="telegram"
                      sx={{
                        position: "absolute",
                        left: 70,
                        bottom: -50,
                      }}
                    />
                  </Box>
                )}
              </Stack>
            </Box>
            {!isMobile && (
              <Box
                component="img"
                src={ARROW}
                alt="arrow"
                maxWidth={{ sm: 150, lg: "unset" }}
              />
            )}
          </Box>
        </motion.div>
      </Grid>

      <Grid
        size={{ xs: 12, md: 6 }}
        order={{ xs: 1, md: 2 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src={HERO_IMAGE}
            alt="hero"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ height: "auto", width: "100%", maxWidth: 431 }}
          />
          <Typography
            sx={{
              mt: 4,
              fontSize: { xs: "1rem", md: "1.5rem" },
              maxWidth: 500,
              fontFamily: `Helvetica`,
              color: "text.primary",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            <strong>Coinucopia.finance</strong> is the ultimate Telegram-native
            bot that lets you launch, manage, and grow memecoins—straight from
            your phone. No devs. No dashboards. Just good times.
          </Typography>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default Hero;
