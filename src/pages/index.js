import React from "react";
import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import { motion } from "framer-motion";
import HomeSection from "@/sections/Home2";
import Footer from "@/components/Footer";
import DisableContextMenu from "@/components/DisableContextMenu";
import MovingComponent from "@/components/MovingComponent";
import styled from "styled-components";

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
        {/* <HomeSection /> */}
        <IndexContainer>
          <MovingComponent item="first" />
          <MovingComponent item="second" />
        </IndexContainer>

        <Footer />
      </motion.div>
    </>
  );
}

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top:60px;
  @media only screen and (max-width: 1200px) {
    margin-top:100px;
  }
`;

export default Home;
