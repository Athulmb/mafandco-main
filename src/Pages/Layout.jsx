import React from "react";
import Navbar from "../Components/Common/NavBar";
import Footer from "../Components/Common/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;