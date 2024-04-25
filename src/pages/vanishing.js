import React from "react";
import styled from "styled-components";
import {
  Section,
  ObrasTitle,
  ObrasText,
  ObrasTopContainer,
  PicturesContainer,
} from "../styles/styles";
import { motion } from "framer-motion";
import Image from "next/image";
import MoreBack from "@/components/MoreBack";
import img1 from "../../public/assets/images/obras/VANISHING/1.jpg";
import img2 from "../../public/assets/images/obras/VANISHING/2.jpg";
import img3 from "../../public/assets/images/obras/VANISHING/3.jpg";
import img4 from "../../public/assets/images/obras/VANISHING/4.jpg";
import img5 from "../../public/assets/images/obras/VANISHING/5.jpg";

import AnimatedRowOf2 from "@/components/AnimatedRowOf2";
import AnimatedText from "@/components/AnimatedText";

function Vanishing() {
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
      x: 50,
    },
  };

  return (
    <>
      <VocesSection>
        <ObrasTopContainer>
          <div className="left">
            <AnimatedText>
            <ObrasTitle>vanishing landscapes</ObrasTitle>
            </AnimatedText>
       
       <AnimatedText>
       <div>
              <ObrasText>
                El Amazonas esta en permanente peligro de existencia. Mi fuerte
                conexión con la naturaleza me ha llevado varias veces a
                permanecer allí. Sus enormes flujos de agua, la gran variedad de
                arboles y plantas, el aire límpido que se respira… Hay una
                verdadera sensación de quietud y perfeccion. La abrumadora y
                necesaria conciencia de ser uno con la naturaleza conectado con
                la fuerza de su existencia. De su tierra ella desprende
                humedales, ríos voladores, de los cuales se elevan y producen la
                lluvia que alimenta a todo el ecosistema. La deforestación, la
                búsqueda del oro, los incendios y la tala de los árboles ponen
                en peligro el mayor reservorio de agua dulce del planeta.
              </ObrasText>
              <MoreBack text="obras" link="/obras" />
            </div>
       </AnimatedText>

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
            <AnimatedRowOf2 image1={img5} image2={img3} />
            <AnimatedRowOf2 image1={img4} image2={img2} />
          </PicturesContainer>
        </ObrasBottomContainer>
      </VocesSection>
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

  @media screen and (max-width: 1190px) {
    object-fit: cover;
    width: 100%;
    height: 600px;
    padding: 10px 0px;
    margin-top: 20px;
  }
  @media screen and (max-width: 750px) {
    width: 90%;
    height: auto;
    padding: 10px 0px;
    margin-top: 5px;
  }
`;

const ObrasBottomContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  margin-top: 30px;
  margin-bottom: 80px;
  @media screen and (max-width: 1190px) {
    width: 93%;
    margin-top: 0px !important;
  }
`;

export default Vanishing;
