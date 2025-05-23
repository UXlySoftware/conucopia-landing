import React from "react";
import Hero from "@coinucopia/sections/Hero";
import WhyCoinucopia from "@coinucopia/sections/WhyCoinucopia";
import TokeCreators from "@coinucopia/sections/TokeCreators";
import Features from "@coinucopia/sections/Features";
import { Box, Stack } from "@mui/material";
import HowItWorks from "@coinucopia/sections/HowItWorks";
import TelegramStar from "@coinucopia/sections/TelegramStar";

const Home: React.FC = () => {
  return (
    <Box>
      <Hero />
      <Stack spacing={{ xs: 8, md: 12 }} mt={{ xs: 6, md: 10 }}>
        <WhyCoinucopia />
        <TokeCreators />
        <Features />
        <HowItWorks />
        <TelegramStar />
      </Stack>
    </Box>
  );
};

export default Home;
