import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/NavBar";
import Footer from "../Components/Common/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* ✅ This is where child routes will render */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
