import React from "react";
import { Section, Container} from "../styles/styles";
import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../public/assets/images/hoteles/cauquenes comp/1baja.jpg";
import img2 from "../../public/assets/images/hoteles/la bamba comp/9baja.jpg";
import img3 from "../../public/assets/images/hoteles/parque diana comp/2bajaa (2).jpg";

function Hoteles() {
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
            <h2>hoteles y estancias</h2>

            <HotelLink href="/cauquenes">
              <HotelSection>
                <Image src={img1} alt="Cauquenes" />
                <HotelSubtitle>Los Cauquenes</HotelSubtitle>
                <HotelText>Bariloche</HotelText>
              </HotelSection>
            </HotelLink>

            <HotelLink href="/bamba">
              <HotelSection2>
                <Image src={img2} alt="La Bamba de Areco" />
                <HotelSubtitle>La Bamba de Areco</HotelSubtitle>
                <HotelText>San Antonio de Areco</HotelText>
              </HotelSection2>
            </HotelLink>

            <HotelLink href="/diana">
            <HotelSection>
              <Image src={img3} alt="Parque Diana" />
              <HotelSubtitle>Parque Diana</HotelSubtitle>
              <HotelText>Neuquen</HotelText>
            </HotelSection>
            </HotelLink>
          </HotelesContainer>
        </HotelesSection>
        <Footer />
      </motion.div>
    </>
  );
}

const HotelesSection = styled(Section)``;

const HotelesContainer = styled(Container)`
  height: auto;
  margin-top: 110px;
  width: 80%;
  h2 {
    font-family: "Montserrat";
    font-size: 70px;
    color: #4A4747;
    line-height: 90%;
    font-weight: 200;
    margin-top: 5px;
    margin-bottom: 45px;
  }
`;

const HotelSection = styled.div`
  height: 430px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
  align-items: flex-end;

  img {
    width: 65%;
    height: 370px;
    object-fit: cover;
  }

 
`;

const HotelSection2 = styled.div`
  height: 430px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  align-items: flex-start;

  img {
    width: 65%;
    height: 370px;
    object-fit: cover;
  }

 
`;

const HotelLink = styled(Link)`
  display: inline-block; /* o 'inline' si es necesario */
  width: 100%; /* o el ancho deseado */
  height: 100%; /* o la altura deseada */
  text-decoration: none; /* opcional, para quitar el subrayado */
`;




const HotelSubtitle = styled.h4`
  margin: 0;
  font-family: "Montserrat";
  font-size: 18px;
  color: #4a4747;
  line-height: 130%;
  font-weight: 400;
  max-width: 200px;
  letter-spacing: 0.5px;
  margin-top: 5px;

`

const HotelText= styled.h5`
      margin: 0;
      font-family: "Montserrat";
      font-size: 12px;
      color: #4a4747;
      line-height: 130%;
      font-weight: 300;
      max-width: 200px;

`



export default Hoteles;
