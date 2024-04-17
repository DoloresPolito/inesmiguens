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
import { motion, useAnimation } from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";
import MoreBack from "@/components/MoreBack";

import img1 from "../../public/assets/images/obras/hijos del sol/baja1.jpg";
import img2 from "../../public/assets/images/obras/hijos del sol/baja2.jpg";
import img3 from "../../public/assets/images/obras/hijos del sol/baja4.jpg";
import img4 from "../../public/assets/images/obras/hijos del sol/baja7.jpg";
import img5 from "../../public/assets/images/obras/hijos del sol/baja9.jpg";


import { useInView } from "react-intersection-observer";

import AnimatedRowOf2 from "@/components/AnimatedRowOf2";

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
              <ObrasTitle>Hijos del Sol</ObrasTitle>
              <div>

      
              <ObrasText>
              Hijos del sol es el testimonio de la fe de un pueblo, y pretende reflejar su esencia, sus creencias y sus costumbres. Pasado y presente continúan conviviendo en estos herederos de los Incas.
              </ObrasText>
              <MoreBack text="obras" link="/obras" />
              </div>
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
              <AnimatedRowOf3Vertical image1={img4} image2={img5} image3={img5} />
           
              <AnimatedRowOf2 image1={img1} image2={img2} />

            </PicturesContainer>
          </ObrasBottomContainer>
        </VocesSection>
        <Footer />
      </motion.div>
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
