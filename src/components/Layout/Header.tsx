import { Box, Link } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import LOGO from "@coinucopia/assets/Coinucopia-logo.png";
import { CoinucopiaButton } from "@coinucopia/components";
import { ONESHOT_TELEGRAM_LINK } from "@coinucopia/constants/constants";

const MotionBox = motion(Box);

const Header: React.FC = () => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 4,
      }}
      mt={3}
    >
      <Box
        component={motion.img}
        src={LOGO}
        alt="Coinucopia Logo"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        sx={{
          height: { xs: 48, md: 77 },
          width: { xs: 150, md: 260 },
        }}
      />

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href={ONESHOT_TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={{ display: "inline-block", width: "100%" }}
        >
          <CoinucopiaButton variantType="outlined">
            Get Started
          </CoinucopiaButton>
        </Link>
      </motion.div>
    </MotionBox>
  );
};
export default Header;
