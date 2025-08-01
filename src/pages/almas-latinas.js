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
import img13 from "../../public/assets/images/obras/ALMAS/13.png";
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
                  Las imágenes de Almas Latinas simbolizan las creencias y ritos
                  de sus pueblos. Un conjunto de tradiciones, valores y
                  expresiones humanas que conforman la identidad de su pueblo.
                  <br />
                  La devoción de su gente se manifiesta en las multitudinarias
                  peregrinaciones, en las procesiones y en las danzas. La
                  riqueza de sus ritos, sus trajes, el uso del color, y la gran
                  ornamentación, son el reflejo palpable de la mitología
                  enraizada en la creencia popular.
                  <br />A veces su símbolo es religioso, pero siempre su
                  objetivo de fondo es la integración del hombre con la
                  naturaleza y sus rituales asociados a la fertilidad de la
                  tierra.
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
            <AnimatedRowOf2 image1={img7} image2={img6} />
            <AnimatedRowOf2 image1={img13} image2={img12} />
            <AnimatedRowOf2 image1={img11} image2={img5} />
            <AnimatedRowOf2 image1={img8} image2={img9} />
            <AnimatedRowOf2 image1={img10} image2={img2} />
            <AnimatedRowOf2 image1={img3} image2={img4} />
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
