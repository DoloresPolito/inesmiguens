import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Container, SectionTitle } from "../styles/styles";
import Link from "next/link";
import More from "@/components/More";
import img1a from "../../public/assets/images/hoteles/principal/1.jpg";
import img2a from "../../public/assets/images/hoteles/principal/2.jpg";
import img3a from "../../public/assets/images/hoteles/principal/3.jpg";

import AnimatedText from "@/components/AnimatedText";
import AnimatedImage from "@/components/AnimatedImage";
import { motion } from "framer-motion";
import DisableContextMenu from "@/components/DisableContextMenu";
function HotelesSection() {
  return (
    <Container>
      <DisableContextMenu />
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
        }}
      >
        <SectionTitle>HOTELES Y ESTANCIAS</SectionTitle>
      </motion.div>

      <HotelesGrid>
        <AnimatedText>
          <Link href="/cauquenes">
            <HotelItem>
              <ItemContainer>
                <div className="top">
                  <Image src={img1a} alt="Los Cauquenes" />
                </div>

                <div className="bottom">
                  <div>
                    <HotelSubtitle>Los Cauquenes</HotelSubtitle>

                    <More text="ver más" />
                  </div>
                </div>
              </ItemContainer>
            </HotelItem>
          </Link>
        </AnimatedText>

        <AnimatedImage>
          <HotelItem>
            <Link href="/bamba">
              <ItemContainer>
                <div className="top">
                  <Image src={img3a} alt="La Bamba de Areco" />
                </div>

                <div className="bottom">
                  <div>
                    <HotelSubtitle>La Bamba de Areco</HotelSubtitle>

                    <More text="ver más" />
                  </div>
                </div>
              </ItemContainer>
            </Link>
          </HotelItem>
        </AnimatedImage>

        <AnimatedImage>
          <HotelItem>
            <Link href="/diana">
              <ItemContainer>
                <div className="top">
                  <Image src={img2a} alt="Parque Diana" />
                </div>

                <div className="bottom">
                  <div>
                    <HotelSubtitle>Parque Diana</HotelSubtitle>

                    <More text="ver más" />
                  </div>
                </div>
              </ItemContainer>
            </Link>
          </HotelItem>
        </AnimatedImage>
      </HotelesGrid>
    </Container>
  );
}

const HotelesGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;

const HotelItem = styled.div`
  width: 100%;
`;

const ItemContainer = styled.div`
  width: 90%;
  height: 400px;
  margin-bottom: 100px;
  position: relative;

  .top {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.8s ease;
  }

  .top img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
  }

  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background-color: white;
    padding-top: 20px;
    display: flex;
    align-items: flex-start;
    transition: transform 0.8s ease;
    transform: translateY(50%);
    z-index: 1;
  }

  &:hover .bottom {
    height: 20%;
    transform: translateY(80%);
  }

  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;
const HotelSubtitle = styled.h4`
  margin: 0;
  font-family: var(--font-montserrat);
  font-size: 23px;
  color: #4a4747;
  line-height: 120%;
  font-weight: 400;
  max-width: 300px;
  letter-spacing: 0.5px;
`;

export default HotelesSection;
