import React from "react";
import { Section} from "../styles/styles";
import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import Footer from "@/components/Footer";
import styled from "styled-components";
import { motion } from "framer-motion";
import HotelesInside from "@/sections/HotelesInside";

function Hoteles() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <FramerNavbar />
        <HotelesSection>
          <HotelesInside />
        </HotelesSection>
        <Footer />
      </motion.div>
    </>
  );
}

const HotelesSection = styled(Section)``;



export default Hoteles;
