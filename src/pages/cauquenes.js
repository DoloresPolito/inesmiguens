import React from "react";
import { Section,  HotelesContainer, PicturesContainer, HotelSubtitle, HotelText } from "../styles/styles";
import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import styled from "styled-components";
import More from "@/components/More";
import img1 from "../../public/assets/images/hoteles/cauquenes comp/1baja.jpg";
import img2 from "../../public/assets/images/hoteles/cauquenes comp/2baja.jpg";
import img3 from "../../public/assets/images/hoteles/cauquenes comp/3baja.jpg";
import img4 from "../../public/assets/images/hoteles/cauquenes comp/6baja.jpg";
import img5 from "../../public/assets/images/hoteles/cauquenes comp/6bbaja.jpg";
import img6 from "../../public/assets/images/hoteles/cauquenes comp/7baja.jpg";
import img7 from "../../public/assets/images/hoteles/cauquenes comp/8baja.jpg";
import img8 from "../../public/assets/images/hoteles/cauquenes comp/9baja.jpg";
import img9 from "../../public/assets/images/hoteles/cauquenes comp/89baja.jpg";
import img10 from "../../public/assets/images/hoteles/cauquenes comp/90baja.jpg";

import AnimatedRowOf2 from "@/components/AnimatedRowOf2";


function Cauquenes() {




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
          <HotelesContainer>
            <HotelSubtitle>Los Cauquenes</HotelSubtitle>
            <HotelText>Bariloche</HotelText>
            <More text="hoteles" link="/hoteles" />
            <PicturesContainer>
    
              <AnimatedRowOf2 image1={img1} image2={img2}></AnimatedRowOf2>
              <AnimatedRowOf2 image1={img3} image2={img4}></AnimatedRowOf2>

              <AnimatedRowOf2 image1={img5} image2={img6}></AnimatedRowOf2>

              <AnimatedRowOf2 image1={img7} image2={img8} />
              <AnimatedRowOf2 image1={img9} image2={img10} />


         
            </PicturesContainer>
          </HotelesContainer>
        </HotelesSection>
        <Footer />
      </motion.div>
    </>
  );
}



const HotelesSection = styled(Section)``;


// const HotelSubtitle = styled.h4`
//   margin: 0;
//   font-family: "Montserrat";
//   font-size: 23px;
//   color: #4a4747;
//   line-height: 130%;
//   font-weight: 400;
//   max-width: 200px;
//   letter-spacing: 0.5px;
//   margin-top: 5px;
// `;

// const HotelText = styled.h5`
//   margin: 0;
//   font-family: "Montserrat";
//   font-size: 16px;
//   color: #4a4747;
//   line-height: 130%;
//   font-weight: 300;
//   max-width: 200px;
// `;




export default Cauquenes;
