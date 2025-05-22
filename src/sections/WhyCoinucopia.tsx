import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const WhyCoinucopia = () => {
  return (
    <Grid container justifyContent="center" sx={{ my: { xs: 3, md: 10 } }}>
      <Grid size={12}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            backgroundColor: "#FDEAC3",
            borderRadius: "16px",
            border: "2px solid #111111",
            padding: { xs: 3, md: 5 },
            textAlign: "center",
          }}
        >
          <MotionTypography
            variant="h6"
            fontWeight="bold"
            mb={1}
            fontSize={{ xs: 32, md: 36 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Why Coinucopia.finance?
          </MotionTypography>

          <MotionTypography
            variant="subtitle1"
            fontWeight={700}
            mb={2}
            fontSize={20}
            sx={{ fontFamily: "Helvetica" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Telegram is where Web3 lives. Coinucopia.finance is how it grows.
          </MotionTypography>

          <MotionTypography
            color="text.secondary"
            sx={{ fontSize: 18, fontFamily: "Helvetica" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            With over 1 billion monthly users and the most active Web3
            communities, Telegram is the heart of crypto culture. But until now,
            there’s been no simple way to bring real onchain actions into the
            chat.
          </MotionTypography>
        </MotionBox>
      </Grid>
    </Grid>
  );
};

export default WhyCoinucopia;
