import React from "react";

import Home from "../components/Home";
import AirQuality from "../components/AirQuality/AirQuality";
import InfoCard from "../components/InfoCard";
import NextStep from "../components/NextStep";
import AddedValue from "../components/AddedValue";
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
      <AirQuality />
      <Footer />
    </>
  );
};

export default Landing;
