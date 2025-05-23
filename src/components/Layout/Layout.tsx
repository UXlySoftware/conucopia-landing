import React from "react";
import { Container, Box } from "@mui/material";
import { motion } from "framer-motion";
import Header from "@coinucopia/components/Layout/Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
      <Container maxWidth="xl">
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </Container>
      <Container maxWidth="xl" disableGutters>
        <Footer />
      </Container>
    </Box>
  );
};

export default Layout;
