import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import impermanencia1 from "../../public/assets/images/obras/IMPERMANENCIA/1.jpg";
import impermanencia2 from "../../public/assets/images/obras/IMPERMANENCIA/3.jpg";
import vanishing1 from "../../public/assets/images/obras/VANISHING/2.jpg";
import vanishing2 from "../../public/assets/images/obras/VANISHING/4.jpg";
import voces1 from "../../public/assets/images/obras/VOCES/1.jpg";
import voces2 from "../../public/assets/images/obras/VOCES/2.jpg";
import ecos1 from "../../public/assets/images/obras/ECOS/6.jpg";
import ecos2 from "../../public/assets/images/obras/ECOS/9.jpg";
import hijos1 from "../../public/assets/images/obras/HIJOS/1.jpg";
import hijos2 from "../../public/assets/images/obras/HIJOS/9.jpg";
import { Container, SectionTitle } from "../styles/styles";
import Link from "next/link";
import More from "@/components/More";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Parallax } from "react-scroll-parallax";
import AnimatedText from "@/components/AnimatedText";
import AnimatedImage from "@/components/AnimatedImage";

function ObrasSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <Container>
      <AnimatedText>
        <SectionTitle>OBRAS</SectionTitle>
      </AnimatedText>
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.1,
        }}
      >
        <ObrasContainer>
          <AnimatedImage>
            <Link href="/hijos-del-sol">
              <ObraContainer>
                <HijosImageContainer>
                  <ImageOverlay>
                    <Img1 className="img1" src={hijos1} alt="hijos del sol" />
                    <Parallax speed={5}>
                      <HijosImg2
                        className="img2"
                        src={hijos2}
                        alt="hijos del sol"
                      />
                    </Parallax>
                  </ImageOverlay>
                </HijosImageContainer>
              </ObraContainer>
            </Link>
          </AnimatedImage>

          <AnimatedImage>
            <Link href="/impermanencia">
              <ObraContainer style={{ marginTop: "50px" }}>
                <HijosImageContainer>
                  <ImageOverlay>
                    <ImpermanenciaImg1
                      className="img1"
                      src={impermanencia1}
                      alt="impermanencia"
                    />
                    <Parallax speed={5}>
                      <Img2
                        className="img2"
                        src={impermanencia2}
                        alt="vanishing"
                      />
                    </Parallax>
                  </ImageOverlay>
                </HijosImageContainer>
                {/* <div className="overlay">
            <div className="overlay-text">ver más</div>
          </div> */}
              </ObraContainer>
            </Link>
          </AnimatedImage>
          <AnimatedImage>
            <Link href="/vanishing">
              <ObraContainer>
                <HijosImageContainer>
                  <ImageOverlay>
                    <VanishingImg1
                      className="img1"
                      src={vanishing2}
                      alt="Vanishing Landscapes"
                    />
                    <Parallax speed={5}>
                      <VanishingImg2
                        className="img2"
                        src={vanishing1}
                        alt="Vanishing Landscapes"
                      />
                    </Parallax>
                  </ImageOverlay>
                </HijosImageContainer>
              </ObraContainer>
            </Link>
          </AnimatedImage>



          <AnimatedImage>
            <Link href="/voces-de-la-tierra">
              <ObraContainer>
                <HijosImageContainer>
                  <ImageOverlay>
                    <VanishingImg1
                      className="img1"
                      src={voces1}
                      alt="Voces de la Tierra"
                    />
                    <Parallax speed={5}>
                      <VanishingImg2
                        className="img2"
                        src={voces2}
                        alt="Voces de la Tierra"
                      />
                    </Parallax>
                  </ImageOverlay>
                </HijosImageContainer>
              </ObraContainer>
            </Link>
          </AnimatedImage>


          <AnimatedImage>
            <Link href="/ecos-en-el-tiempo">
              <ObraContainer>
                <HijosImageContainer>
                  <ImageOverlay>
                    <VanishingImg1
                      className="img1"
                      src={ecos2}
                      alt="Ecos en el Tiempo"
                    />
                    <Parallax speed={5}>
                      <VanishingImg2
                        className="img2"
                        src={ecos1}
                        alt="Ecos en el Tiempo"
                      />
                    </Parallax>
                  </ImageOverlay>
                </HijosImageContainer>
              </ObraContainer>
            </Link>
          </AnimatedImage>


        </ObrasContainer>
      </motion.div>
    </Container>
  );
}

const ObrasContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  margin-top: -120px;
  height: auto; /* Ajusta la altura según sea necesario */
  margin-left: 200px;
`;

const ObraContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  padding-bottom: 150px;
  cursor: pointer;

  .overlay {
    position: absolute;
    bottom: 0; /* Cambiar de top: 0 a bottom: 0 */
    left: 0;
    width: 80%;
    height: 80%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.5s ease; /* Ajustar la transición */
    transform: translateY(
      80%
    ); /* Inicialmente ocultar el overlay fuera de la pantalla */
  }

  &:hover {
    .overlay {
      opacity: 1;
      visibility: visible;
      transform: translateY(
        0
      ); /* Mostrar el overlay moviéndolo de abajo hacia arriba */
    }
  }
  .overlay-text {
    margin: 0;
    font-family: var(--font-montserrat);
    font-size: 20px;
    color: #4a4747;
    font-weight: 400;
    max-width: 300px;
    align-self: center;
  }

  @keyframes show {
    from {
      opacity: 0;
      scale: 25%;
    }
    to {
      opacity: 1;
      scale: 100%;
    }
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

//general
const Img1 = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajusta el comportamiento de ajuste de la imagen */
`;

const Img2 = styled(Image)`
  position: absolute;
  width: 100%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-40%, 10%);
  object-fit: cover;
  z-index: 1;
  height: 400px;
  width: 400px;
`;

//impermanencia

const ImpermanenciaImg1 = styled(Image)`
  position: absolute;
  width: 80%;
  height: 100%;
  object-fit: cover; /* Ajusta el comportamiento de ajuste de la imagen */
`;

//hijos

const HijosImageContainer = styled.div`
  height: 450px; /* Ajusta la altura según sea necesario */
  width: 550px; /* Ajusta el ancho según sea necesario */
  position: relative;
`;

const HijosImg2 = styled(Image)`
  position: absolute;
  width: 100%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  object-fit: cover;
  z-index: 1;
  height: 400px;
  width: 450px;
`;

//vanishing

const VanishingImg1 = styled(Image)`
  position: absolute;
  width: 400px;
  height: 100%;
  /* transform: translate(60%, 0%); */
  object-fit: cover; /* Ajusta el comportamiento de ajuste de la imagen */
`;

const VanishingImg2 = styled(Image)`
  position: absolute;
  width: 100%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 30%);
  object-fit: cover;
  z-index: 1;
  height: 400px;
  width: 500px;
`;

export default ObrasSection;
