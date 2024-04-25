import React from "react";
import styled from "styled-components";
import {
  Section,
  ObrasTitle,
  ObrasText,
  ObrasTopContainer,
  PicturesContainer,
} from "../styles/styles";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import MoreBack from "@/components/MoreBack";

import img1 from "../../public/assets/images/obras/HIJOS/1.jpg";
import img2 from "../../public/assets/images/obras/HIJOS/2.jpg";
import img3 from "../../public/assets/images/obras/HIJOS/3.jpg";
import img4 from "../../public/assets/images/obras/HIJOS/4.jpg";
import img5 from "../../public/assets/images/obras/HIJOS/5.jpg";
import img6 from "../../public/assets/images/obras/HIJOS/6.jpg";
import img7 from "../../public/assets/images/obras/HIJOS/7.jpg";
import img8 from "../../public/assets/images/obras/HIJOS/8.jpg";
import img9 from "../../public/assets/images/obras/HIJOS/9.jpg";
import img10 from "../../public/assets/images/obras/HIJOS/10.jpg";
import img12 from "../../public/assets/images/obras/HIJOS/12.jpg";

import { useInView } from "react-intersection-observer";

import AnimatedRowOf2 from "@/components/AnimatedRowOf2";

import AnimatedText from "@/components/AnimatedText";
import DisableContextMenu from "@/components/DisableContextMenu";

function Hijos() {
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
              <ObrasTitle>Hijos del Sol</ObrasTitle>
            </AnimatedText>

            <AnimatedText>
              <div>
                <ObrasText>
                  Hijos del Sol es el testimonio de un pueblo, sus creencias y
                  sus costumbres. A través de las imágenes intente revelar lo
                  invisible y visibilizar lo imaginado. Pasado y presente
                  continúan conviviendo en los herederos de los Incas.
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
            <StyledImageCover src={img9} alt="image1" />
          </motion.div>
        </ObrasTopContainer>

        <ObrasBottomContainer>
          <PicturesContainer>
            <AnimatedRowOf3Vertical image1={img2} image2={img4} image3={img5} />

            <AnimatedRowOf2 image1={img1} image2={img3} />

            <AnimatedRowOf3Vertical image1={img6} image2={img7} image3={img8} />
            <AnimatedRowOf2 image1={img10} image2={img12} />
          </PicturesContainer>
        </ObrasBottomContainer>
      </VocesSection>
    </>
  );
}

const RowOf3Vertical = ({ image1, image2, image3 }) => {
  return (
    <>
      <Row3VerticalContainer>
        <StyledImageVertical src={image1} alt="image1" />
        <StyledImageVertical src={image2} alt="image1" />
        <StyledImageVertical src={image3} alt="image1" />
      </Row3VerticalContainer>
    </>
  );
};

const AnimatedRowOf3Vertical = ({ image1, image2, image3 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <RowOf3Vertical image1={image1} image2={image2} image3={image3} />
    </motion.div>
  );
};

const VocesSection = styled(Section)`
  height: auto;
  justify-content: center;
`;

const StyledImageCover = styled(Image)`
  width: 500px;
  height: 500px;
  object-fit: cover;

  @media screen and (max-width: 950px) {
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

const Row3VerticalContainer = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 30px;

  @media screen and (max-width: 1190px) {
    flex-direction: column;
    height: auto;
    margin-top: -60px;
    gap: 0px;
  }
`;
const StyledImageVertical = styled(Image)`
  height: auto;
  width: 32%;
  object-fit: cover;

  @media screen and (max-width: 1190px) {
    object-fit: cover;
    width: 100%;
    height: auto;
    padding: 10px 0px;
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    height: auto;
  }
`;

export default Hijos;
