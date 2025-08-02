// src/Router.jsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

function AppRouter() {
  return (
    <Router basename="/my-website">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default AppRouter;
