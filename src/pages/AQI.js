import React from "react";

import Header from "../components/Header/Header";
import AQIPartOne from "../components/AirQuality/AQIPartOne";
import AirQuality from "../components/AirQuality/AirQuality";
import AQIPartTwo from "../components/AirQuality/AQIPartTwo";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const AQI = () => (
  <>
    <Header />
    <AQIPartOne />
    <AirQuality />
    <AQIPartTwo />
    <Contact />
    <Footer />
  </>
);

export default AQI;
