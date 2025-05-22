import React from "react";
import { Container, Box } from "@mui/material";
import LOGO from "@coinucopia/assets/Coinucopia-logo.png";
import { CoinucopiaButton } from "@coinucopia/components";

type LayoutProps = {
  children: React.ReactNode;
};

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 4,
      }}
    >
      <Box
        component="img"
        src={LOGO}
        alt="Coinucopia Logo"
        sx={{ height: { xs: 54, md: 77 }, width: { xs: 180, md: 260 } }}
      />
      <CoinucopiaButton variantType="outlined">Get Started</CoinucopiaButton>
    </Box>
  );
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
      <Container maxWidth="xl" sx={{ p: { xs: 2, md: 5 } }}>
        <Header />
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
