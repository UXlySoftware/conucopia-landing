import React from "react";
import { Container, Box } from "@mui/material";
import LOGO from "@coinucopia/assets/Coinucopia-logo.png";
import { CoinucopiaButton } from "@coinucopia/components";
import { motion } from "framer-motion";

type LayoutProps = {
  children: React.ReactNode;
};

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
        <CoinucopiaButton variantType="outlined">Get Started</CoinucopiaButton>
      </motion.div>
    </MotionBox>
  );
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
      <Container maxWidth="xl" sx={{ p: { xs: 2, md: 5 } }}>
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Layout;
