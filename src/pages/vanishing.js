import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Section,
  Container,
  ObrasTitle,
  ObrasText,
  ObrasTopContainer,
} from "../styles/styles";
import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import { motion, useAnimation } from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";
import More from "@/components/More";

import img1 from "../../public/assets/images/obras/vanishing jpg reduce comp/1.jpg";
import img2 from "../../public/assets/images/obras/vanishing jpg reduce comp/2.jpg";
import img3 from "../../public/assets/images/obras/vanishing jpg reduce comp/3a.jpg";
import img4 from "../../public/assets/images/obras/vanishing jpg reduce comp/3b.jpg";
import img5 from "../../public/assets/images/obras/vanishing jpg reduce comp/4.jpg";

import { useInView } from "react-intersection-observer";

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
              <ObrasTitle>vanishing landscapes</ObrasTitle>
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

          <PicturesContainer>
            <RowOf2 image1={img2} image2={img3} />
            <RowOf2 image1={img4} image2={img5} />
          </PicturesContainer>
        </VocesSection>
        <Footer />
      </motion.div>
    </>
  );
}

const RowOf2 = ({ image1, image2 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
      <Row2Container ref={ref}>
        <StyledImage
          src={image1}
          alt="image1"
          custom={0}
          animate={controls}
          initial="hidden"
        />
        <StyledImage
          src={image2}
          alt="image1"
          custom={0}
          animate={controls}
          initial="hidden"
        />
      </Row2Container>
    </>
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

  @media screen and (max-width: 1190px) {
    object-fit: cover;
    width: 100%;
    height: 600px;
    padding:10px 0px;
    margin-top: 20px;
  }
  @media screen and (max-width: 750px) {
    width: 90%;
    height: auto;
    padding:10px 0px;
    margin-top: 5px;
  }
`;

const PicturesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 93%;
  @media screen and (max-width: 1100px) {
    margin-bottom: 40px;
  }
`;

const Row2Container = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  /* flex-wrap: wrap; */

  @media screen and (max-width: 1190px) {
    flex-direction: column;
    height: auto;
    margin-top: -60px;
  }

  /* @media screen and (max-width: 750px) {
    flex-direction: column;
    height: auto;
  } */
`;

const StyledImage = styled(Image)`
  width: 700px;
  height: 410px;
  padding:30px 0px;
  object-fit: cover;

  @media screen and (max-width: 1190px) {
    object-fit: cover;
    width: 100%;
    height: 600px;
    padding:10px 0px;
  }
  @media screen and (max-width: 750px) {
    width: 90%;
    height: auto;
    padding:10px 0px;
  }
`;

export default Vanishing;
