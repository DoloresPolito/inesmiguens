import React from "react";
import { Section, HotelesContainer, PicturesContainer,  HotelSubtitle, HotelText, TextContainer  } from "../styles/styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Image from "next/image";
import MoreBack from "@/components/MoreBack";
import img1 from "../../public/assets/images/hoteles/la bamba comp/1baja 1 (1).jpg";
import img2 from "../../public/assets/images/hoteles/la bamba comp/2baja (1).jpg";
import img3 from "../../public/assets/images/hoteles/la bamba comp/3baja (1).jpg";
import img4 from "../../public/assets/images/hoteles/la bamba comp/4baja (1).jpg";
import img5 from "../../public/assets/images/hoteles/la bamba comp/5baja (1).jpg";
import img6 from "../../public/assets/images/hoteles/la bamba comp/6baja (1).jpg";
import img7 from "../../public/assets/images/hoteles/la bamba comp/7baja (1).jpg";
import img8 from "../../public/assets/images/hoteles/la bamba comp/8baja (1).jpg";
import img9 from "../../public/assets/images/hoteles/la bamba comp/9baja.jpg";
import img10 from "../../public/assets/images/hoteles/la bamba comp/10baja (1).jpg";
import img11 from "../../public/assets/images/hoteles/la bamba comp/11baja (1).jpg";

import AnimatedRowOf2 from "@/components/AnimatedRowOf2";
import DisableContextMenu from "@/components/DisableContextMenu";
function LaBamba() {
  return (
    <>

        <HotelesSection>
        <DisableContextMenu />
          <HotelesContainer>
            <TextContainer>

      
            <HotelSubtitle>La Bamba de Areco</HotelSubtitle>
            <HotelText>San Antonio de Areco</HotelText>
            <MoreBack text="hoteles" link="/hoteles" />
            </TextContainer>
            <PicturesContainer>
              <AnimatedRowOf2 image1={img1} image2={img2}></AnimatedRowOf2>

              <AnimatedRowOf2 image1={img5} image2={img6}></AnimatedRowOf2>
              <AnimatedRowOf3Vertical
                image1={img3}
                image2={img4}
                image3={img8}
              ></AnimatedRowOf3Vertical>

              <AnimatedRowOf2 image1={img9} image2={img7}></AnimatedRowOf2>
              <AnimatedRowOf2 image1={img11} image2={img10}></AnimatedRowOf2>
            </PicturesContainer>
          </HotelesContainer>
        </HotelesSection>

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

const HotelesSection = styled(Section)``;

const Row3VerticalContainer = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;

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



export default LaBamba;
