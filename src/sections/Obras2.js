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
    <SectionObrasContainer>
      <AnimatedText>
        <ObrasTitle>OBRAS</ObrasTitle>
      </AnimatedText>
      <motion.div
        className="contenedor"
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
                <div className="text-container ecos">
                  <h2>VANISHING Landscapes</h2>
                  <More text="ver más" />
                </div>
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
                <div className="text-container impermanencia">
                  <h2>IMPERMANENCIA</h2>
                  <More text="ver más" />
                </div>
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
                <div className="text-container ecos">
                  <h2>VOCES DE LA TIERRA</h2>
                  <More text="ver más" />
                </div>
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
                <div className="text-container ecos">
                  <h2>ECOS EN EL TIEMPO</h2>
                  <More text="ver más" />
                </div>
              </ObraContainer>
            </Link>
          </AnimatedImage>
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
                <div className="text-container hijos">
                  <h2>HIJOS DEL SOL</h2>
                  <More text="ver más" />
                </div>
              </ObraContainer>
            </Link>
          </AnimatedImage>
        </ObrasContainer>
      </motion.div>
    </SectionObrasContainer>
  );
}

const SectionObrasContainer = styled(Container)`
  @media screen and (max-width: 590px) {
    width: 100%;
  }

  .contenedor {
    @media screen and (max-width: 590px) {
      margin: 0 auto;
      width: 95%;
    }
  }
`;


const ObrasTitle = styled(SectionTitle)`
   @media screen and (max-width: 590px) {
    margin-left: 50px;
   }

   @media screen and (max-width: 450px) {
    margin-left: 20px;
   }

`

const ObrasContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  margin-top: -100px;
  height: auto; /* Ajusta la altura según sea necesario */
  margin-left: 200px;

  @media screen and (max-width: 1200px) {
    width: 80%;
  }

  @media screen and (max-width: 850px) {
    margin-top: -30px;
    margin-left: 0px;
    margin: 0 auto;
  }
  @media screen and (max-width: 590px) {
    width: 100%;
  }
`;

const ObraContainer = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  padding-bottom: 50px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (max-width: 590px) {
    margin: 0 auto;

    align-items: center;
  }

  h2 {
    font-family: var(--font-bebasneue);
    font-size: 30px;
    color: #4a4747;
    line-height: 90%;
    font-weight: 200;
    align-self: flex-start;
    margin-bottom: 0;
  }

  .text-container {
    margin-top: 30px !important;
    @media screen and (max-width: 590px) {
     text-align: center;
    }


  }

  .hijos {
    margin-top: 100px !important;
    @media screen and (max-width: 590px) {
      margin-top: 20px !important;
    }
  }

  .impermanencia {
    margin-top: 0px !important;

  }

  .ecos{
    @media screen and (max-width: 590px) {
      margin-top: 0px !important;
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

  @media screen and (max-width: 590px) {
    height: 350px;
    width: 350px;
    transform: translate(-50%,10%);
  }
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

  @media screen and (max-width: 590px) {
    height: 350px; /* Ajusta la altura según sea necesario */
    width: 350px; /* Ajusta el ancho según sea necesario */
  }
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

  @media screen and (max-width: 590px) {
    height: 300px; /* Ajusta la altura según sea necesario */
    width: 350px; /* Ajusta el ancho según sea necesario */
    transform: translate(-50%, 20%);
  }
`;

//vanishing

const VanishingImg1 = styled(Image)`
  position: absolute;
  width: 400px;
  height: 100%;
  /* transform: translate(60%, 0%); */
  object-fit: cover; /* Ajusta el comportamiento de ajuste de la imagen */

  @media screen and (max-width: 590px) {
    width: 350px;
  }
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

  @media screen and (max-width: 590px) {
    height: 300px;
    width: 350px;
    transform: translate(-50%, 15%);
  }
`;

export default ObrasSection;
