import React from "react";
import styled from "styled-components";
import {
  Section,
  ObrasTitle,
  ObrasText,
  ObrasTopContainer,
  PicturesContainer,
} from "../styles/styles";
import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";
import More from "@/components/More";

import img1 from "../../public/assets/images/obras/impermanencia jpg reduce comp/1.jpg";
import img2 from "../../public/assets/images/obras/impermanencia jpg reduce comp/2.jpg";
import img3 from "../../public/assets/images/obras/impermanencia jpg reduce comp/3.jpg";
import img4 from "../../public/assets/images/obras/impermanencia jpg reduce comp/4.jpg";

import AnimatedRowOf2 from "@/components/AnimatedRowOf2";

function Impermanencia() {
  const variants = {
    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0.5,
      x: 10,
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <FramerNavbar />
        <VocesSection>
          <ObrasTopContainer>
            <div className="left">
              <ObrasTitle>
                Imperma
                <br />
                nencia
              </ObrasTitle>
              <ObrasText>
                La ciudad se convierte en un mar de fugaces  y fantasmagóricos
                encuentros, en la que se desvanece la posibilidad de la
                percepción de los otros, prácticamente invisibles, incorpóreos.
                 Una geometría que dibuja en el asfalto el vértigo del tiempo,
                preñado de destiempo y expatriado de toda permanencia. Su cruce
                demora apenas un minuto que es la cifra de la celeridad en la
                que vivimos.
              </ObrasText>
              <More text="obras" link="/obras" />
            </div>
            <motion.div
              className="right"
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              <StyledImageCover src={img1} alt="image1" />
            </motion.div>
          </ObrasTopContainer>

          <ObrasBottomContainer>
            <PicturesContainer>
              <AnimatedRowOf2 image1={img1} image2={img2} />
              <AnimatedRowOf2 image1={img3} image2={img4} />
            </PicturesContainer>
          </ObrasBottomContainer>
        </VocesSection>
        <Footer />
      </motion.div>
    </>
  );
}

const VocesSection = styled(Section)`
  height: auto;
  justify-content: center;
`;

const StyledImageCover = styled(Image)`
  width: 500px;
  height: 500px;
  object-fit: cover;

  @media screen and (max-width: 750px) {
    width: 90%;
    height: auto;
    padding: 10px 0px;
  }
`;

const ObrasBottomContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
`;

export default Impermanencia;
