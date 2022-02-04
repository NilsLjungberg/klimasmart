import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import MenuNavigationSmall from "./components/UI/HamburgerMenu";
import MenuNavigationBig from "./components/UI/MenuNavigationBig";
import Landing from "./pages/Landing";
import About from "./pages/About";
import KlimaschutzKonzept from "./pages/KlimaschutzKonzept";
import Ideas from "./pages/Ideas";
import AQI from "./pages/AQI";
import Legal from "./pages/Legal";

function App() {
  return (
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
  );
}

export default App;
