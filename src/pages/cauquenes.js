import React from "react";
import { Section, Container } from "../styles/styles";
import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import styled from "styled-components";
import Image from "next/image";
import More from "@/components/More";
import img1 from "../../public/assets/images/hoteles/cauquenes comp/1baja.jpg";
import img2 from "../../public/assets/images/hoteles/cauquenes comp/2baja.jpg";
import img3 from "../../public/assets/images/hoteles/cauquenes comp/3baja.jpg";
import img4 from "../../public/assets/images/hoteles/cauquenes comp/6baja.jpg";
import img5 from "../../public/assets/images/hoteles/cauquenes comp/6bbaja.jpg";
import img6 from "../../public/assets/images/hoteles/cauquenes comp/7baja.jpg";
import img7 from "../../public/assets/images/hoteles/cauquenes comp/8baja.jpg";
import img8 from "../../public/assets/images/hoteles/cauquenes comp/9baja.jpg";
import img9 from "../../public/assets/images/hoteles/cauquenes comp/89baja.jpg";
import img10 from "../../public/assets/images/hoteles/cauquenes comp/90baja.jpg";
function Cauquenes() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <FramerNavbar />
        <HotelesSection>
          <HotelesContainer>
            <HotelSubtitle>Los Cauquenes</HotelSubtitle>
            <HotelText>Bariloche</HotelText>
            <More text="hoteles" link="/hoteles" />
            <PicturesContainer>
              <RowOf2 image1={img1} image2={img2}></RowOf2>

              <RowOf2 image1={img3} image2={img4}></RowOf2>

              <RowOf2 image1={img5} image2={img6}></RowOf2>

              <RowOf2 image1={img7} image2={img8}></RowOf2>

              <RowOf2 image1={img9} image2={img10}></RowOf2>
            </PicturesContainer>
          </HotelesContainer>
        </HotelesSection>
        <Footer />
      </motion.div>
    </>
  );
}

const RowOf2 = ({ image1, image2 }) => {


  return (
    <>
      <Row2Container>
        <StyledImage
          src={image1}
          alt="image1"

        />
        <StyledImage
          src={image2}
          alt="image1"
  
        />
      </Row2Container>
    </>
  );
};

const HotelesSection = styled(Section)``;

const HotelesContainer = styled(Container)`
  height: auto;
  margin-top: 110px;
  width: 80%;
`;

const Row2Container = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;

  gap: 10px;
  margin-bottom: 40px;

  @media screen and (max-width: 1190px) {
    flex-direction: column;
    height: auto;
    margin-top: -60px;
    gap: 0px;
  }
`;

const StyledImage = styled(Image)`
  height: 500px;
  width: 50%;
  object-fit: cover;

  @media screen and (max-width: 1190px) {
    object-fit: cover;
    width: 100%;
    height: 600px;
    padding: 10px 0px;
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    height: auto;
  }
`;

const PicturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const HotelSubtitle = styled.h4`
  margin: 0;
  font-family: "Montserrat";
  font-size: 23px;
  color: #4a4747;
  line-height: 130%;
  font-weight: 400;
  max-width: 200px;
  letter-spacing: 0.5px;
  margin-top: 5px;
`;

const HotelText = styled.h5`
  margin: 0;
  font-family: "Montserrat";
  font-size: 16px;
  color: #4a4747;
  line-height: 130%;
  font-weight: 300;
  max-width: 200px;
`;

export default Cauquenes;
