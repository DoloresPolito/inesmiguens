import React from "react";
import {
  Section,
  HotelesContainer,
  PicturesContainer,
  HotelSubtitle,
  HotelText,
  TextContainer,
} from "../styles/styles";
import MoreBack from "@/components/MoreBack";
import img1 from "../../public/assets/images/hoteles/cauquenes comp/1baja.jpg";
import img2 from "../../public/assets/images/hoteles/cauquenes comp/2baja.jpg";
import img3 from "../../public/assets/images/hoteles/cauquenes comp/3baja.jpg";
import img4 from "../../public/assets/images/hoteles/cauquenes comp/6baja.jpg";
import img5 from "../../public/assets/images/hoteles/cauquenes comp/6.jpg";
import img6 from "../../public/assets/images/hoteles/cauquenes comp/7baja.jpg";
import img7 from "../../public/assets/images/hoteles/cauquenes comp/8baja.jpg";
import img8 from "../../public/assets/images/hoteles/cauquenes comp/9baja.jpg";
import img9 from "../../public/assets/images/hoteles/cauquenes comp/89baja.jpg";
import img10 from "../../public/assets/images/hoteles/cauquenes comp/90baja.jpg";
import AnimatedRowOf2 from "@/components/AnimatedRowOf2";
import DisableContextMenu from "@/components/DisableContextMenu";

function Cauquenes() {
  return (
    <>
      <Section>
      <DisableContextMenu />
        <HotelesContainer>
          <TextContainer>
            <HotelSubtitle>Los Cauquenes</HotelSubtitle>
            <HotelText>Ushuaia</HotelText>
            <MoreBack text="hoteles" link="/hoteles" />
          </TextContainer>
          <PicturesContainer>
            <AnimatedRowOf2 image1={img1} image2={img2}></AnimatedRowOf2>
            <AnimatedRowOf2 image1={img3} image2={img4}></AnimatedRowOf2>
            <AnimatedRowOf2 image1={img5} image2={img6}></AnimatedRowOf2>
            <AnimatedRowOf2 image1={img7} image2={img8} />
            <AnimatedRowOf2 image1={img9} image2={img10} />
          </PicturesContainer>
        </HotelesContainer>
      </Section>
    </>
  );
}



export default Cauquenes;
