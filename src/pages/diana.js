import React from "react";
import { Section, PicturesContainer, HotelesContainer,  HotelSubtitle, HotelText, TextContainer  } from "../styles/styles";
import styled from "styled-components";
import MoreBack from "@/components/MoreBack";
import img1 from "../../public/assets/images/hoteles/parque diana comp/1bajaa.jpg";
import img2 from "../../public/assets/images/hoteles/parque diana comp/2bajaa (2).jpg";
import img3 from "../../public/assets/images/hoteles/parque diana comp/2bajaa.jpg";
import img4 from "../../public/assets/images/hoteles/parque diana comp/3bajaa.jpg";
import img5 from "../../public/assets/images/hoteles/parque diana comp/4bajaa.jpg";
import img6 from "../../public/assets/images/hoteles/parque diana comp/5bajaa.jpg";
import img7 from "../../public/assets/images/hoteles/parque diana comp/6bajaaa.jpg";
import img9 from "../../public/assets/images/hoteles/parque diana comp/9bajaaa.jpg";

import AnimatedRowOf2 from "@/components/AnimatedRowOf2";
import DisableContextMenu from "@/components/DisableContextMenu";
function Diana() {
  return (
    <>

        <HotelesSection>
        <DisableContextMenu />
          <HotelesContainer>
            <TextContainer>

      
            <HotelSubtitle>Parque Diana</HotelSubtitle>
            <HotelText>Neuquen</HotelText>
            <MoreBack text="hoteles" link="/hoteles" />
            </TextContainer>
            <PicturesContainer>
              <AnimatedRowOf2 image1={img1} image2={img2}></AnimatedRowOf2>

              <AnimatedRowOf2 image1={img3} image2={img4}></AnimatedRowOf2>

              <AnimatedRowOf2 image1={img5} image2={img6}></AnimatedRowOf2>

              <AnimatedRowOf2 image1={img7} image2={img9}></AnimatedRowOf2>

            
            </PicturesContainer>
          </HotelesContainer>
        </HotelesSection>

    </>
  );
}



const HotelesSection = styled(Section)``;


export default Diana;
