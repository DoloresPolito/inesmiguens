
import React from "react";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
import Header from '../components/Header';
import NewFooter from "@/components/NewFooter";
const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {children}
      <NewFooter />
    </>
  );
};

export default Layout;
