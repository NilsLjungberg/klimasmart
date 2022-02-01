import React, { useState } from "react";

import WhyPartOne from "../components/Why/WhyPartOne";
import WhyPartTwo from "../components/Why/WhyPartTwo";
import WhyPartTwoTwo from "../components/Why/WhyPartTwoTwo";
import WhyPartThree from "../components/Why/WhyPartThree";
import WhyPartFour from "../components/Why/WhyPartFour";
import WhyTable from "../components/Why/WhyTable";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const About = () => {
  const [tableIsShown, setTableIsShown] = useState(false);

  const showTableHandler = () => {
    setTableIsShown(true);
  };

  const hideTableHandler = () => {
    setTableIsShown(false);
  };

  return (
    <>
      <WhyPartOne />
      <WhyPartTwo />
      <WhyPartTwoTwo />
      <WhyPartThree />
      <WhyPartFour onShowTable={showTableHandler} />
      {tableIsShown && <WhyTable onHideTable={hideTableHandler} />}
      <Contact />
      <Footer />
    </>
  );
};

export default About;
