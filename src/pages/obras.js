import React from "react";

import { motion } from "framer-motion";

// import ObrasSection from "@/sections/Obras";
import ObrasSection from "@/sections/Obras2";
import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import Footer from "@/components/Footer";
import DisableContextMenu from "@/components/DisableContextMenu";
function Obras() {
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

        <ObrasSection />
        <Footer />
      </motion.div>
    </>
  );
}

export default Obras;
