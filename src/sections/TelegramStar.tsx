import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import STAR from "@coinucopia/assets/star.svg";

const MotionBox = motion(Box);

const TelegramStar = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      sx={{
        backgroundColor: "#CBE8FF",
        borderRadius: "40px",
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 6 },
        textAlign: "center",
        maxWidth: "100%",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={1}
        flexWrap="wrap"
        mb={2}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ fontSize: 32 }}>
          Launch with Telegram Stars!
        </Typography>

        <motion.img
          src={STAR}
          alt="star"
          initial={{ rotateY: 0 }}
          whileInView={{ rotateY: 360 }}
          transition={{ duration: 1 }}
          style={{ width: 28, height: 28, marginTop: 2 }}
        />
      </Box>

      <Typography
        sx={{
          fontSize: 18,
          color: "text.primary",
          fontFamily: "Helvetica",
        }}
      >
        Use <strong>Telegram Stars</strong> to launch your coins directly
        through <strong>Coinucopia.finance</strong>. It's fast, easy, and made
        for the <strong>Web3 community</strong>.
      </Typography>
    </MotionBox>
  );
};

export default TelegramStar;
