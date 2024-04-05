import React from "react";
import { Section, Container } from "../styles/styles";
import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import {motion} from "framer-motion"

function Contacto() {
  return (
    <>
          <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
      <FramerNavbar />
      <Section>
        <Container>
        <h2>Contacto</h2>
        </Container>
      </Section>
      </motion.div>
    </>
  );
}

export default Contacto;