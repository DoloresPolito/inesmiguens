import React, { useEffect } from "react";
import styled from "styled-components";
import { Section, Container, ObrasTitle, ObrasText, ObrasTopContainer } from "../styles/styles";
import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import { motion, useAnimation } from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";
import More from "@/components/More";

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
              <ObrasTitle>Voces de la tierra</ObrasTitle>
              <ObrasText>
                La ciudad se convierte en un mar de fugaces  y fantasmagóricos
                encuentros, en la que se desvanece la posibilidad de la
                percepción de los otros, prácticamente invisibles, incorpóreos.
                 Una geometría que dibuja en el asfalto el vértigo del tiempo,
                preñado de destiempo y expatriado de toda permanencia. Su cruce
                demora apenas un minuto que es la cifra de la celeridad en la
                que vivimos.
              </ObrasText>
              <More text="obras" link="/obras"/>
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
          {/* <RowOf1 image={img3}/> */}
          <RowOf3Vertical image1={img4} image2={img6} image3={img5} />
            <RowOf2 image1={img2} image2={img3} />
            <RowOf2 image1={img10} image2={img11} />
      
            <RowOf2 image1={img7} image2={img8} />
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

const RowOf3Vertical = ({ image1, image2, image3 }) => {
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
      <Row3ContainerVertical ref={ref}>
        <StyledImageVertical
          src={image1}
          alt="image1"
          custom={0}
          animate={controls}
          initial="hidden"
        />
        <StyledImageVertical
          src={image2}
          alt="image1"
          custom={0}
          animate={controls}
          initial="hidden"
        />
             <StyledImageVertical
          src={image3}
          alt="image3"
          custom={0}
          animate={controls}
          initial="hidden"
        />
      </Row3ContainerVertical>
    </>
  );
};

const RowOf1 = ({image}) => {
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
      <Row1Container ref={ref}>
        <StyledImage
          src={image}
          alt="image1"
          custom={0}
          animate={controls}
          initial="hidden"
        />
      </Row1Container>
    </>
  );
};

const VocesSection = styled(Section)`
  height: auto;
  justify-content: center;
`;



const StyledImage = styled(Image)`
  width: 100%;
  height: 90%;
  object-fit: cover;

`;

const StyledImageVertical = styled(Image)`
  width: 90%;
  height: 100%;
  object-fit: cover;

`;

const StyledImageCover = styled(Image)`
  width: 500px;
  height: 500px;
  object-fit: cover;

  @media screen and (max-width: 950px) {
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
  height: 420px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:10px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    height: auto;
  }
`;

const Row3ContainerVertical = styled.div`
  height: 600px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:10px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    height: auto;
  }
`;

const Row1Container = styled.div`
  height: 500px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default Voces;

