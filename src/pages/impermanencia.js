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
import img1 from "../../public/assets/images/obras/IMPERMANENCIA/1.jpg";
import img2 from "../../public/assets/images/obras/IMPERMANENCIA/2.jpg";
import img3 from "../../public/assets/images/obras/IMPERMANENCIA/3.jpg";
import img4 from "../../public/assets/images/obras/IMPERMANENCIA/4.jpg";
import img5 from "../../public/assets/images/obras/IMPERMANENCIA/5.jpg";
import AnimatedRowOf2 from "@/components/AnimatedRowOf2";
import AnimatedText from "@/components/AnimatedText";
import DisableContextMenu from "@/components/DisableContextMenu";
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
      x: 50,
    },
  };

  return (
    <>
      <VocesSection>
        <DisableContextMenu />
        <ObrasTopContainer>
          <div className="left">
            <AnimatedText>
              <ObrasTitle>Impermanencia</ObrasTitle>
            </AnimatedText>

            <AnimatedText>
              <div>
                <ObrasText>
                  La ciudad se convierte en un mar de fugaces  y fantasmagóricos
                  encuentros, en la que se desvanece la posibilidad de la
                  percepción de los otros, prácticamente invisibles,
                  incorpóreos.  Una geometría que dibuja en el asfalto el
                  vértigo del tiempo, preñado de destiempo y expatriado de toda
                  permanencia. Su cruce demora apenas un minuto que es la cifra
                  de la celeridad en la que vivimos.
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
            <AnimatedRowOf2 image1={img5} image2={img2} obra="impermanencia" />
            <AnimatedRowOf2 image1={img3} image2={img4} obra="impermanencia" />
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
  @media screen and (max-width: 1100px) {
    margin-bottom: -30px;
  }
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
  margin-top: 30px;
  margin-bottom: 80px;
  @media screen and (max-width: 1190px) {
    width: 93%;
    margin-top: 0px !important;
  }
`;

export default Impermanencia;
