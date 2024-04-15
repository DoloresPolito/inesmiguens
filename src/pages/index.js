import React from "react";
import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import { motion } from "framer-motion";
import HomeSection from "@/sections/Home2";
import Footer from "@/components/Footer";
import DisableContextMenu from "@/components/DisableContextMenu";


function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
                <DisableContextMenu />
        <FramerNavbar />
        <HomeSection />
        <Footer />
      </motion.div>
 
    </>
  );
}

export default Home;
