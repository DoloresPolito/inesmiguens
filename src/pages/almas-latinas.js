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
import img1 from "../../public/assets/images/obras/ALMAS/1.png";
import img2 from "../../public/assets/images/obras/ALMAS/2.png";
import img3 from "../../public/assets/images/obras/ALMAS/3.png";
import img4 from "../../public/assets/images/obras/ALMAS/4.png";
import img5 from "../../public/assets/images/obras/ALMAS/5.png";
import img6 from "../../public/assets/images/obras/ALMAS/6.png";
import img7 from "../../public/assets/images/obras/ALMAS/7.png";
import img8 from "../../public/assets/images/obras/ALMAS/8.png";
import img9 from "../../public/assets/images/obras/ALMAS/9.png";
import img10 from "../../public/assets/images/obras/ALMAS/10.png";
import img11 from "../../public/assets/images/obras/ALMAS/11.png";
import img12 from "../../public/assets/images/obras/ALMAS/12.png";
import AnimatedRowOf2 from "@/components/AnimatedRowOf2";
import AnimatedText from "@/components/AnimatedText";
import DisableContextMenu from "@/components/DisableContextMenu";

function Almas() {
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
              <ObrasTitle>almas latinas</ObrasTitle>
            </AnimatedText>

            <AnimatedText>
              <div>
                <ObrasText>
               
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
            <AnimatedRowOf2 image1={img4} image2={img5} />
            <AnimatedRowOf2 image1={img6} image2={img7} />
            <AnimatedRowOf2 image1={img8} image2={img9} />
            <AnimatedRowOf2 image1={img10} image2={img11} />
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
  /* width: 500px;
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
  } */

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

export default Almas;
