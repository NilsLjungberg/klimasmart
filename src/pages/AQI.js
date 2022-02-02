import React from "react";

import AQIPartOne from "../components/AirQuality/AQIPartOne";
import AirQuality from "../components/AirQuality/AirQuality";
import AQIPartTwo from "../components/AirQuality/AQIPartTwo";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const AQI = () => (
  <>
    <AQIPartOne />
    <AirQuality />
    <AQIPartTwo />
    <Contact />
    <Footer />
  </>
);

export default AQI;
