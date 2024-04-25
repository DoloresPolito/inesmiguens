import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import impermanencia1 from "../../public/assets/images/obras/IMPERMANENCIA/1.jpg";
import impermanencia2 from "../../public/assets/images/obras/IMPERMANENCIA/3.jpg";
import vanishing1 from "../../public/assets/images/obras/VANISHING/2reduce.jpg";
import vanishing2 from "../../public/assets/images/obras/VANISHING/4reduce.jpg";
import voces1 from "../../public/assets/images/obras/VOCES/mujer gallo.jpg";
import voces2 from "../../public/assets/images/obras/VOCES/mujer flores.jpg";
import ecos1 from "../../public/assets/images/obras/ECOS/4.jpg";
import ecos2 from "../../public/assets/images/obras/ECOS/9.jpg";
import hijos1 from "../../public/assets/images/obras/HIJOS/3.jpg";
import hijos2 from "../../public/assets/images/obras/HIJOS/6.jpg";
import { Container, SectionTitle } from "../styles/styles";
import Link from "next/link";
import More from "@/components/More";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                <ImageContainer>
                  <VanishingImg1
                    className="img1"
                    src={vanishing1}
                    alt="Vanishing Landscapes"
                  />
                  {width > 980 ? (
                    <>
                      {" "}
                      <VanishingImg2
                        className="img1"
                        src={vanishing2}
                        alt="Vanishing Landscapes"
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </ImageContainer>
                <div className="text-container ecos">
                  <h2>VANISHING Landscapes</h2>
                  <More text="ver más" />
                </div>
              </ObraContainer>
            </Link>
          </AnimatedImage>

          <AnimatedImage>
            <Link href="/impermanencia">
              <ObraContainer>
                <ImageContainer>
                  <ImpermanenciaImg1
                    className="img1"
                    src={impermanencia1}
                    alt="impermanencia"
                  />

                  {width > 980 ? (
                    <>
                      {" "}
                      <Img2
                        className="img2"
                        src={impermanencia2}
                        alt="vanishing"
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </ImageContainer>
                <div className="text-container ">
                  <h2>IMPERMANENCIA</h2>
                  <More text="ver más" />
                </div>
              </ObraContainer>
            </Link>
          </AnimatedImage>

          <AnimatedImage>
            <Link href="/voces-de-la-tierra">
              <ObraContainer>
                <ImageContainer>

                <VocesImg1
                        className="img1"
                        src={voces2}
                        alt="Voces de la Tierra"
                      />
                

                  {width > 980 ? (
                    <>
                    <VocesImg2
                    className="img1"
                    src={voces1}
                    alt="Voces de la Tierra"
                  />
           
                    </>
                  ) : (
                    <></>
                  )}
                </ImageContainer>
                <div className="text-container ">
                  <h2>VOCES DE LA TIERRA</h2>
                  <More text="ver más" />
                </div>
              </ObraContainer>
            </Link>
          </AnimatedImage>

          <AnimatedImage>
            <Link href="/ecos-en-el-tiempo">
              <ObraContainer>
                <ImageContainer>
                  {width > 980 ? (
                    <>
                      <EcosImg1
                        className="img1"
                        src={ecos2}
                        alt="Ecos en el Tiempo"
                      />
                    </>
                  ) : (
                    <></>
                  )}

                  <EcosImg2
                    className="img1"
                    src={ecos1}
                    alt="Ecos en el Tiempo"
                  />
                </ImageContainer>
                <div className="text-container ">
                  <h2>ECOS EN EL TIEMPO</h2>
                  <More text="ver más" />
                </div>
              </ObraContainer>
            </Link>
          </AnimatedImage>
          <AnimatedImage>
            <Link href="/hijos-del-sol">
              <ObraContainer>
                <ImageContainer>
                  <HijosImg1
                    className="img1"
                    src={hijos1}
                    alt="Vanishing Landscapes"
                  />
                  {width > 980 ? (
                    <>
                      {" "}
                      <HijosImg2
                        className="img1"
                        src={hijos2}
                        alt="Vanishing Landscapes"
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </ImageContainer>
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
  @media screen and (max-width: 980px) {
    width: 100%;
  }

  .contenedor {
    @media screen and (max-width: 980px) {
      margin: 0 auto;
      width: 95%;
    }
  }
`;

const ObrasTitle = styled(SectionTitle)`
  @media screen and (max-width: 980px) {
    margin-left: 50px;
  }

  @media screen and (max-width: 450px) {
    margin-left: 20px;
  }
`;

const ObrasContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  margin-top: -100px;
  height: auto;
  margin-left: 200px;
  @media screen and (max-width: 1200px) {
    margin-top: 0px;
    margin-left: 0px;
  }

  @media screen and (max-width: 980px) {
    width: 100%;
    margin: 0 auto;
    justify-self: center;
  }
`;

const ObraContainer = styled.div`
  width: 900px;
  margin: 0 auto;
  margin-top: 10px;
  padding-bottom: 50px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 980px) {
    width: 90%;
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
    @media screen and (max-width: 980px) {
      text-align: center;
    }
  }
`;

const Img2 = styled(Image)`
  height: 400px;
  width: 400px;
`;

//impermanencia

const ImpermanenciaImg1 = styled(Image)`
  height: 400px;
  width: 400px;
  object-fit: cover;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

//hijos

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 980px) {
    justify-content: center;
  }
`;

//vanishing

const VanishingImg1 = styled(Image)`
  height: 350px;
  width: 550px;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

const VanishingImg2 = styled(Image)`
  object-fit: cover;

  height: 350px;
  width: 300px;
`;

//hijos

const HijosImg1 = styled(Image)`
  height: 340px;
  width: 500px;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;



const HijosImg2 = styled(Image)`
  object-fit: cover;

  height: 350px;
  width: 300px;
`;

//ecos

const EcosImg1 = styled(Image)`
  height: 350px;
  width: 440px;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;



const EcosImg2 = styled(Image)`
  object-fit: cover;

  height: 350px;
  width: 440px;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;



//voces

const VocesImg1 = styled(Image)`
  height: 350px;
  width: 550px;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

const VocesImg2 = styled(Image)`
  object-fit: cover;

  height: 350px;
  width: 300px;
`;



export default ObrasSection;
