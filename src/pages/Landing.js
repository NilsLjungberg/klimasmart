import React from "react";

import Home from "../components/Home/Home";
import InfoCard from "../components/Home/InfoCard";
import NextStep from "../components/Home/NextStep";
import AddedValue from "../components/Home/AddedValue";
import SwiperImage from "../components/Swiper/Swiper";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Landing = () => {
  return (
    <>
      <Home />
      <InfoCard />
      <NextStep />
      <AddedValue />
      <SwiperImage />
      <Contact />
      <Footer />
    </>
  );
};

export default Landing;
