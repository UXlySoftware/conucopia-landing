import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import RAT1 from "@coinucopia/assets/rat-1.svg";
import RAT2 from "@coinucopia/assets/rat-2.svg";
import RAT3 from "@coinucopia/assets/rat-3.svg";
import { motion } from "framer-motion";
import BLUE_GLOW from "@coinucopia/assets/blue-glow.svg";
import ARROW from "@coinucopia/assets/arrow.svg";
import GLOW from "@coinucopia/assets/glow.svg";
import { CoinucopiaButton } from "@coinucopia/components";

const MotionBox = motion(Box);

const features = [
  "Browse the newest and hottest memecoins",
  "Join exclusive Telegram groups with one tap",
  "Add verified emails or phone numbers for early drops",
  "Generate your Coinucopia.finance wallet instantly",
  "Fund your wallet with stars to cover tx fees",
  "Track memecoin stats and see who’s buying",
];

const MotionButton = motion(CoinucopiaButton);

const Features = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{
        border: "2px solid #111111",
        borderRadius: "50px",
        textAlign: "left",
        padding: "32px 24px 32px 24px",
        position: "relative",
      }}
    >
      <Typography variant="h6" fontWeight="bold" sx={{ fontSize: 32, mb: 1 }}>
        For Creators & Enthusiasts
      </Typography>
      <Typography sx={{ fontSize: 16, mb: 3, fontFamily: "Helvetica" }}>
        Find the Next Big Memecoin. Before everyone Else.
      </Typography>
      {!isMobile && (
        <Box
          component="img"
          src={BLUE_GLOW}
          sx={{ position: "absolute", right: 60, top: 0 }}
        />
      )}
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        sx={{ mb: 2, fontSize: 24, fontFamily: "Helvetica" }}
      >
        Bullet List Features
      </Typography>
      {features.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          key={index}
        >
          <Box sx={{ mb: 2, ml: 2 }}>
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: "Helvetica",
                fontWeight: 500,
                py: 1,
              }}
            >
              • <strong>{item}</strong>
            </Typography>
            {index < features.length - 1 && (
              <Divider sx={{ border: "1px solid #3D81B5" }} />
            )}
          </Box>
        </motion.div>
      ))}
      <Box component="img" src={ARROW} sx={{ height: 124, mb: 2, pl: 1 }} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        flexDirection={isMobile ? "column" : "row"}
        gap={isMobile ? 4 : 0}
      >
        {/* Left: Button + Glow */}
        <Box position="relative" width={isMobile ? "100%" : "unset"}>
          <MotionButton
            variantType="filled"
            fullWidth
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            sx={{
              fontSize: { xs: 16, md: 20 },
              width: { xs: "100%", md: "auto" },
              padding: { xs: ".6rem 1rem" },
              ml: isMobile ? 0 : 2,
            }}
          >
            Explore Memecoins
          </MotionButton>
          <Box
            component="img"
            src={GLOW}
            alt="glow"
            sx={{
              position: "absolute",
              top: "-90px",
              right: "-60px",
            }}
          />
        </Box>

        {!isMobile && (
          <Box
            display="flex"
            flexGrow={1}
            justifyContent="space-evenly"
            alignItems="flex-end"
            sx={{ position: "relative", bottom: 40 }}
          >
            {[RAT1, RAT2, RAT3].map((img, i) => {
              const topOffsets = [20, -40, 20];

              return (
                <motion.div
                  key={i}
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: topOffsets[i], opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  style={{ position: "relative" }}
                >
                  <Box component="img" src={img} alt={`Rat ${i + 1}`} />
                </motion.div>
              );
            })}
          </Box>
        )}
      </Box>
    </MotionBox>
  );
};

export default Features;
