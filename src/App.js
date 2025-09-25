import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
// import Contact from "./Pages/Contact";
// import About from "./Pages/About";
// import Blog from "./Pages/Blog";
// import Error404 from "./Pages/Error404";
// import PrivacyPolicy from "./Pages/PrivacyPolicy";
// import ServicesPage from "./Pages/Services";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home page with multiple sections */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/service" element={<ServicesPage />} />



          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}

          {/* ✅ Catch-all route for 404 */}
          {/* <Route path="*" element={<Error404/>} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;