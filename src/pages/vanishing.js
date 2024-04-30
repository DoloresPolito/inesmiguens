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
import img4 from "../../public/assets/images/obras/VANISHING/mujermasazul.jpg";
import img5 from "../../public/assets/images/obras/VANISHING/5.jpg";
import img6 from "../../public/assets/images/obras/VANISHING/6.jpg";
import img7 from "../../public/assets/images/obras/VANISHING/new1.jpg";
import img8 from "../../public/assets/images/obras/VANISHING/new2.jpg";
import img9 from "../../public/assets/images/obras/VANISHING/new3..jpg";
import AnimatedRowOf2 from "@/components/AnimatedRowOf2";
import AnimatedText from "@/components/AnimatedText";
import DisableContextMenu from "@/components/DisableContextMenu";

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
        <DisableContextMenu />
        <ObrasTopContainer>
          <div className="left">
            <AnimatedText>
              <ObrasTitle>vanishing landscapes</ObrasTitle>
            </AnimatedText>

            <AnimatedText>
              <div>
                <ObrasText>
                  Mi amor por la naturaleza me llevó una y otra vez a la selva
                  brasilera amazónica. Este me lleva a la más intima
                  contemplación de la vida misma, su riqueza y sus ciclos. <br/>
                  La codicia del hombre, los incendios, la deforestación, la
                  búsqueda de oro esta poniendo en peligro el mayor reservorio
                  de agua dulce del planeta. Los ríos voladores que brindan
                  lluvia a Sudamerica están desapareciendo. Los nativos y sus
                  tribus están siendo desplazados de sus milenarios hogares
                  hacia un refugio incierto. El hombre avanza sobre la tierra
                  que nos cobija. <br/>
                   Supongamos por un momento que podamos
                  garantizar que nuestros hijos hereden esta tierra…  <br/>
                  Atraer la
                  mirada del hombre a este ecosistema, seria la forma de
                  asegurar el futuro?
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
            <AnimatedRowOf2 image1={img6} image2={img7} />
            <AnimatedRowOf2 image1={img8} image2={img9} />
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
  @media screen and (max-width: 1100px) {
    margin-bottom: -40px;
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
