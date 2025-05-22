import React, { Fragment } from "react";
import Hero from "@coinucopia/sections/Hero";
import WhyCoinucopia from "@coinucopia/sections/WhyCoinucopia";

const Home: React.FC = () => {
  return (
    <Fragment>
      <Hero />
      <WhyCoinucopia />
    </Fragment>
  );
};

export default Home;
