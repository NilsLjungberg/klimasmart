import React from "react";

import MenuNavigation from "./UI/HamburgerMenu";
import { BrowserRouter as Router } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Router>
        <MenuNavigation />
      </Router>
      <div className="home__background">
        <div className="home-title">
          <h2 className="content__title">klimasmart</h2>
          <div className="content__subtitle">make a difference</div>
        </div>
      </div>
    </>
  );
};

export default Home;
