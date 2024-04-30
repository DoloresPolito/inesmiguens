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
import MoreBack from "@/components/MoreBack";
import Image from "next/image";
import img1 from "../../public/assets/images/obras/ECOS/1.jpg";
import img2 from "../../public/assets/images/obras/ECOS/2.jpg";
import img3 from "../../public/assets/images/obras/ECOS/3.jpg";
import img4 from "../../public/assets/images/obras/ECOS/4.jpg";
import img6 from "../../public/assets/images/obras/ECOS/12.jpg";
import img7 from "../../public/assets/images/obras/ECOS/7.jpg";
import img8 from "../../public/assets/images/obras/ECOS/8.jpg";
import img9 from "../../public/assets/images/obras/ECOS/9..jpg";
import img10 from "../../public/assets/images/obras/ECOS/10.jpg";
import DisableContextMenu from "@/components/DisableContextMenu";
import AnimatedRowOf2 from "@/components/AnimatedRowOf2";
import AnimatedText from "@/components/AnimatedText";

function Ecos() {
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
              <ObrasTitle>ECOS EN EL TIEMPO</ObrasTitle>
            </AnimatedText>
            <AnimatedText>
              <div>
                <ObrasText>
                  Tierra de contrastes. <br />
                  Se tiñe de atemporalidad mientras marca un ritmo al son de su
                  música y sus encuentros callejeros.
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
            <AnimatedRowOf2 image1={img2} image2={img3} />
            <AnimatedRowOf2 image1={img6} image2={img7} />
            <AnimatedRowOf2 image1={img4} image2={img8} />
            <AnimatedRowOf2 image1={img9} image2={img10} />
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
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 1100px) {
    margin-bottom: -30px;
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

export default Ecos;
