import React, { useState, useEffect } from "react";

import PacmanLoader from "react-spinners/PacmanLoader";

import { Routes, Route, Navigate } from "react-router-dom";

import styled from "styled-components";

import MenuNavigationSmall from "./components/UI/HamburgerMenu";
import MenuNavigationBig from "./components/UI/MenuNavigationBig";
import Landing from "./pages/Landing";
import About from "./pages/About";
import KlimaschutzKonzept from "./pages/KlimaschutzKonzept";
import Ideas from "./pages/Ideas";
import AQI from "./pages/AQI";
import Legal from "./pages/Legal";

const Div = styled.div`
  background: rgb(182, 237, 200);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-family: "Playfair Display", serif;

  h1 {
    margin-bottom: 3rem;
    margin-left: 3rem;
    font-size: 3rem;
    color: rgb(17, 91, 76);
  }
`;

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading && (
        <Div>
          <h1>klimasmart</h1>
          <PacmanLoader
            color={"rgb(17, 91, 76)"}
            loading={isLoading}
            size={25}
          />
        </Div>
      )}
      {!isLoading && (
        <>
          <MenuNavigationSmall />
          <MenuNavigationBig />
          <Routes>
            <Route exact path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Landing />} />
            <Route path="/warum" element={<About />} />
            <Route path="/klimaschutz" element={<KlimaschutzKonzept />} />
            <Route path="/ideen" element={<Ideas />} />
            <Route path="/aqi" element={<AQI />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
