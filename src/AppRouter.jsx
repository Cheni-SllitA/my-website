// src/Router.jsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>

       {/* <Route path="/" element={<Home />} /> */}
       
        <Route path="/" element={<><Navbar /><Home /></>} /> {/* Yasas */}


      </Routes>
      <Footer />
    </>
  );
}

export default AppRouter;
