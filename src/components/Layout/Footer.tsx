import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import FOOTER_LOGO from "@coinucopia/assets/footer-logo.png";
import LINKEDIN from "@coinucopia/assets/LinkedIn.svg";
import X from "@coinucopia/assets/Twitter.svg";
import YOUTUBE from "@coinucopia/assets/Youtube.svg";

const MotionBox = motion(Box);

const Footer = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{
        background: "#FFF8EC",
        borderTop: "2px solid #111",
        py: { xs: 2, md: 4 },
        px: { xs: 2, md: 4 },
        mt: { xs: 6, md: 10 },
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
            }}
          >
            <Box
              component="img"
              src={FOOTER_LOGO}
              alt="Coinucopia"
              sx={{ height: 77, width: 261, mb: 3 }}
            />

            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 600,
                color: "#B2842B",
                mb: 1,
              }}
            >
              Follow Us
            </Typography>

            <Box display="flex" gap={2}>
              {[X, LINKEDIN, YOUTUBE].map((icon, i) => (
                <motion.img
                  key={i}
                  src={icon}
                  alt={`icon-${i}`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ height: 24, cursor: "pointer" }}
                />
              ))}
            </Box>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              textAlign: "right",
            }}
          >
            <Typography
              sx={{
                color: "#B2842B",
                fontWeight: 700,
                fontSize: 16,
                mb: 3,
              }}
            >
              coinucopia.finance@support.com
            </Typography>

            <Typography
              sx={{
                color: "#B2842B",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              © 2025 Powered by UXly Software
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </MotionBox>
  );
};

export default Footer;
