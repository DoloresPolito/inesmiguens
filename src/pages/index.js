import React from "react";
import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import { motion } from "framer-motion";
import HomeSection from "@/sections/Home";
import Footer from "@/components/Footer";

function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <FramerNavbar />
        <HomeSection />
        <Footer />
      </motion.div>
 
    </>
  );
}

export default Home;
