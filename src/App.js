import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import Career from './Pages/Career';
import ErrorPage from './Components/Common/Error';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* ✅ All normal routes wrapped inside Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/career" element={<Career />} />
        </Route>

        {/* ✅ Catch-all route OUTSIDE Layout (no navbar/footer) */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
