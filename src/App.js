import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import MenuNavigation from "./components/UI/HamburgerMenu";
import Landing from "./pages/Landing";
import About from "./pages/About";
import KlimaschutzKonzept from "./pages/KlimaschutzKonzept";
import Blog from "./pages/Blog";
import Contact from "./pages/ContactUs";

function App() {
  return (
    <>
      <MenuNavigation />
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/klimaschutz" element={<KlimaschutzKonzept />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aqi" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
