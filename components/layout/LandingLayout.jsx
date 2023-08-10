import React from "react";
import LandingTopNavbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const LandingLayout = ({ props }) => {
  return (
    <div className="min-h-screen">
      <LandingTopNavbar />
      <main>{props}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
