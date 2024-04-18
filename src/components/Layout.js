import React from "react";
// import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// import DisableContextMenu from "@/components/DisableContextMenu";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <DisableContextMenu /> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
