import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import MenuNavigation from "./components/UI/HamburgerMenu";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Blog from "./pages/Blog";
import Contact from "./pages/ContactUs";

function App() {
  return (
    <>
      <MenuNavigation />
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/landing" />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
