import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Section,
  Container,
  ObrasTitle,
  ObrasText,
  ObrasTopContainer,
  PicturesContainer
} from "../styles/styles";
import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import { motion, useAnimation } from "framer-motion";
import Footer from "@/components/Footer";
import More from "@/components/More";
import Image from "next/image";
import img1 from "../../public/assets/images/obras/ecos jpg reduce/baja 7.jpg";
import img2 from "../../public/assets/images/obras/ecos jpg reduce/baja5.jpg";
import img3 from "../../public/assets/images/obras/ecos jpg reduce/baja6.jpg";
import img4 from "../../public/assets/images/obras/ecos jpg reduce/estabaja6a.jpg";
import img5 from "../../public/assets/images/obras/ecos jpg reduce/baja2.jpg";
import img6 from "../../public/assets/images/obras/ecos jpg reduce/baja3.jpg";
import img7 from "../../public/assets/images/obras/ecos jpg reduce/estabaja 1.jpg";
import img8 from "../../public/assets/images/obras/ecos jpg reduce/baja10.jpg";
import img9 from "../../public/assets/images/obras/ecos jpg reduce/baja8.jpg";
import img10 from "../../public/assets/images/obras/ecos jpg reduce/cuba10baja.jpg";

import { useInView } from "react-intersection-observer";

import AnimatedRowOf2 from "@/components/AnimatedRowOf2";

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
              <ObrasTitle>
                Ecos en el <br />
                tiempo
              </ObrasTitle>
              <ObrasText>
                La ciudad se convierte en un mar de fugaces  y fantasmagóricos
                encuentros, en la que se desvanece la posibilidad de la
                percepción de los otros, prácticamente invisibles, incorpóreos.
                 Una geometría que dibuja en el asfalto el vértigo del tiempo,
                preñado de destiempo y expatriado de toda permanencia. Su cruce
                demora apenas un minuto que es la cifra de la celeridad en la
                que vivimos.
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
<ObrasBottomContainer>


          <PicturesContainer>
            <AnimatedRowOf2 image1={img2} image2={img3} />
            <AnimatedRowOf2 image1={img5} image2={img6} />
            <RowOf1 />
            <AnimatedRowOf2 image1={img7} image2={img8} />
            <AnimatedRowOf2 image1={img9} image2={img10} />
          </PicturesContainer>
          </ObrasBottomContainer>
        </VocesSection>
        <Footer />
      </motion.div>
    </>
  );
}



const RowOf1 = () => {
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
          src={img4}
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

const StyledImageCover = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 950px) {
  }
`;





const Row1Container = styled.div`
  height: 380px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ObrasBottomContainer = styled.div`
display: flex;
margin: 0 auto;
width:90%

`

export default Ecos;
