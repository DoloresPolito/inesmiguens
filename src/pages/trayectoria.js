import React from "react";

import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
// import TrayectoriaSection from "@/sections/Trayectoria"
function Trayectoria() {
  return (
    <>
      <motion.div
         initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <FramerNavbar />
        {/* <Section>
          <Container>
          
          </Container>
        </Section> */}

        {/* <TrayectoriaSection/> */}
        <Footer/>
      </motion.div>
    </>
  );
}

export default Trayectoria;
