import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import MenuNavigation from "./components/UI/HamburgerMenu";
import Landing from "./pages/Landing";
import About from "./pages/About";
import KlimaschutzKonzept from "./pages/KlimaschutzKonzept";
import Ideas from "./pages/Ideas";
import AQI from "./pages/AQI";

function App() {
  return (
    <>
      <MenuNavigation />
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/klimaschutz" element={<KlimaschutzKonzept />} />
        <Route path="/ideen" element={<Ideas />} />
        <Route path="/aqi" element={<AQI />} />
      </Routes>
    </>
  );
}

export default App;
