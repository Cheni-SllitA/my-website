import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
