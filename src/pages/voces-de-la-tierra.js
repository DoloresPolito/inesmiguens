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

import img1 from "../../public/assets/images/obras/voces de la tierra comp/1baja.jpg";
import img2 from "../../public/assets/images/obras/voces de la tierra comp/2baja.jpg";
import img3 from "../../public/assets/images/obras/voces de la tierra comp/3baja.jpg";
import img4 from "../../public/assets/images/obras/voces de la tierra comp/4baja.jpg";
import img5 from "../../public/assets/images/obras/voces de la tierra comp/6baja.jpg";
import img6 from "../../public/assets/images/obras/voces de la tierra comp/7baja.jpg";
import img7 from "../../public/assets/images/obras/voces de la tierra comp/9baja.jpg";
import img8 from "../../public/assets/images/obras/voces de la tierra comp/11baja.jpg";
import img10 from "../../public/assets/images/obras/voces de la tierra comp/12baja.jpg";
import img11 from "../../public/assets/images/obras/voces de la tierra comp/13baja.jpg";

import { useInView } from "react-intersection-observer";

import AnimatedRowOf2 from "@/components/AnimatedRowOf2";

function Voces() {
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

        <VocesSection>
          <ObrasTopContainer>
            <div className="left">
              <ObrasTitle>Voces de la tierra</ObrasTitle>
              <div>

      
              <ObrasText>
                La ciudad se convierte en un mar de fugaces  y fantasmagóricos
                encuentros, en la que se desvanece la posibilidad de la
                percepción de los otros, prácticamente invisibles, incorpóreos.
                 Una geometría que dibuja en el asfalto el vértigo del tiempo,
                preñado de destiempo y expatriado de toda permanencia. Su cruce
                demora apenas un minuto que es la cifra de la celeridad en la
                que vivimos.
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
              <AnimatedRowOf3Vertical image1={img4} image2={img6} image3={img5} />
           
              <AnimatedRowOf2 image1={img10} image2={img11} />

              <AnimatedRowOf2 image1={img7} image2={img8} />
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

export default Voces;
