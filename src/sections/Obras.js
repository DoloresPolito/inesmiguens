import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import impermanencia1 from "../../public/assets/images/obras/impermanencia jpg reduce comp/1.jpg";
import vanishing1 from "../../public/assets/images/obras/vanishing jpg reduce comp/1.jpg";
import voces2 from "../../public/assets/images/obras/voces de la tierra comp/0baja.jpg";
import ecos from "../../public/assets/images/obras/ecos jpg reduce/estabaja6a.jpg";
import hijos from "../../public/assets/images/obras/hijos del sol/baja1.jpg";
import { Container, SectionTitle } from "../styles/styles";
import Link from "next/link";
import More from "@/components/More";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Parallax } from "react-scroll-parallax";
import AnimatedText from "@/components/AnimatedText";

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



        <ObrasGrid>
          <Parallax speed={-5}>
            <ObrasItem1Animated
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 1 }}
            >
              <Link href="/voces-de-la-tierra">
                <ImpermanenciaContainer>
                  <div className="top">
                    <Image src={voces2} alt="voces" />
                  </div>

                  <div className="bottom">
                    <div>
                      <ObrasSubtitle>voces de la tierra</ObrasSubtitle>
                      <More text="ver más" />
                    </div>
                  </div>
                </ImpermanenciaContainer>
              </Link>
            </ObrasItem1Animated>
          </Parallax>

          <Parallax speed={10}>
            <ObrasItem2Animated
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 1 }}
            >
              <Link href="/vanishing">
                <ImpermanenciaContainer>
                  <div className="top">
                    <Image src={vanishing1} alt="vanishing" />
                  </div>

                  <div className="bottom">
                    <div>
                      <ObrasSubtitle>vanishing landscapes</ObrasSubtitle>
                      <More text="ver más" />
                    </div>
                  </div>
                </ImpermanenciaContainer>
              </Link>
            </ObrasItem2Animated>
          </Parallax>
          <Parallax speed={5}>
            <ObrasItem3>
              <Link href="/impermanencia">
                <ImpermanenciaContainer>
                  <div className="top">
                    <Image src={impermanencia1} alt="impermanencia" />
                  </div>

                  <div className="bottom">
                    <div>
                      <ObrasSubtitle>impermanencia</ObrasSubtitle>
                      <More text="ver más" />
                    </div>
                  </div>
                </ImpermanenciaContainer>
              </Link>
            </ObrasItem3>
          </Parallax>
          <Parallax speed={20}>
            <ObrasItem4>
              <Link href="/ecos-en-el-tiempo">
                <ImpermanenciaContainer>
                  <div className="top">
                    <Image src={ecos} alt="ecos-en-el-tiempo" />
                  </div>

                  <div className="bottom">
                    <div>
                      <ObrasSubtitle>ecos en el tiempo</ObrasSubtitle>
                      <More text="ver más" />
                    </div>
                  </div>
                </ImpermanenciaContainer>
              </Link>
            </ObrasItem4>
          </Parallax>
          <ObrasItem3>
            <Link href="/hijos-del-sol">
              <ImpermanenciaContainer>
                <div className="top">
                  <Image src={hijos} alt="hijos del sol" />
                </div>

                <div className="bottom">
                  <div>
                    <ObrasSubtitle>Hijos del Sol</ObrasSubtitle>
                    <More text="ver más" />
                  </div>
                </div>
              </ImpermanenciaContainer>
            </Link>
          </ObrasItem3>
        </ObrasGrid>


      </Container>

  );
}






const ObrasGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  width: 100%;
  margin-top: 30px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const ObrasItem1 = styled.div`
  width: 100%;
  margin-top: -60px;
`;

const ObrasItem1Animated = motion(ObrasItem1);

const ObrasItem2 = styled.div`
  width: 100%;
  margin-top: 0px;
`;

const ObrasItem2Animated = motion(ObrasItem2);

const ObrasItem3 = styled.div`
  width: 100%;
  margin-top: -60px;
`;



const ObrasItem4 = styled.div`
  width: 100%;
  margin-top: 0px;
`;


const ImpermanenciaContainer = styled.div`
  width: 100%;
  height: 500px;
  margin-bottom: 20px;

  .top {
    width: 100%;
    height: 90%;
    overflow: hidden;
    transition: height 0.5s ease;
  }

  .top img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .bottom {
    width: 100%;
    height: 10%;
    background-color: white;
    padding-top: 20px;
    display: flex;
    align-items: flex-start;
  }

  &:hover .top {
    height: 80%;
  }

  &:hover .bottom {
    height: 20%;
  }
`;

const ObrasSubtitle = styled.h4`
  margin: 0;
  font-family: var(--font-montserrat);
  font-size: 23px;
  color: #4a4747;
  line-height: 120%;
  font-weight: 400;
  max-width: 300px;
  letter-spacing: 0.5px;
`;

export default ObrasSection;
