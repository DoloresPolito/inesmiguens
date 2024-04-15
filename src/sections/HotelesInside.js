import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { Section, Container, Title } from "../styles/styles";
import Link from "next/link";
import More from "@/components/More";
import img1a from "../../public/assets/images/hoteles/principal/1.jpg";
import img2a from "../../public/assets/images/hoteles/principal/2.jpg";
import img3a from "../../public/assets/images/hoteles/principal/3.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


function HotelesInside() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const titleVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0.5,
      y: 10,
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);


  return (
    <ObrasSectionContainer>
      <ObrasContainer>
        <ObrasTitleAnimated
          variants={titleVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          Hoteles y estancias
        </ObrasTitleAnimated>

        <ObrasGrid>
          <ObrasItem1
          >
            <Link href="/cauquenes">
              <ImpermanenciaContainer>
                <div className="top">
                  <Image src={img1a} alt="Los Cauquenes" />
                </div>

                <div className="bottom">
                  <div>
                    <ObrasSubtitle>Los Cauquenes</ObrasSubtitle>

                    <More text="ver más" />
                  </div>
                </div>
              </ImpermanenciaContainer>
            </Link>
          </ObrasItem1>

          <ObrasItem2>
            <Link href="/bamba">
              <ImpermanenciaContainer>
                <div className="top">
                  <Image src={img3a} alt="La Bamba de Areco" />
                </div>

                <div className="bottom">
                  <div>
                    <ObrasSubtitle>La Bamba de Areco</ObrasSubtitle>

                    <More text="ver más" />
                  </div>
                </div>
              </ImpermanenciaContainer>
            </Link>
          </ObrasItem2>

          <ObrasItem3>
            <Link href="/diana">
              <ImpermanenciaContainer>
                <div className="top">
                  <Image src={img2a} alt="Parque Diana" />
                </div>

                <div className="bottom">
                  <div>
                    <ObrasSubtitle>Parque Diana</ObrasSubtitle>

                    <More text="ver más" />
                  </div>
                </div>
              </ImpermanenciaContainer>
            </Link>
          </ObrasItem3>
        </ObrasGrid>
      </ObrasContainer>
    </ObrasSectionContainer>
  );
}

const ObrasSectionContainer = styled(Section)`
  width: 90%;
  margin: 0 auto;
`;

const ObrasContainer = styled(Container)`
  margin: 0 auto;
  margin-bottom: 200px;
  overflow: hidden;
  width: 100%;
`;

const ObrasTitle = styled(Title)`
  align-self: flex-start;
  font-family: "Montserrat";
  font-size: 70px;
  color: #4a4747;
  line-height: 90%;
  font-weight: 200;
  margin-top: 100px;
`;

const ObrasTitleAnimated = motion(ObrasTitle);


const ObrasGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const ObrasItem1 = styled.div`
  width: 100%;
  margin-top: -20px;
`;


const ObrasItem2 = styled.div`
  width: 100%;
`;


const ObrasItem3 = styled.div`
  width: 100%;
`;


const ImpermanenciaContainer = styled.div`
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
    /* padding: 20px; */
    padding-top: 20px;
    display: flex;
    align-items: flex-start;
    transition: transform 0.8s ease; 
    transform: translateY(
      50%
    ); 
    z-index: 1; 

  }

  &:hover .bottom {
    height: 20%; 
    transform: translateY(80%);
  }
`;
const ObrasSubtitle = styled.h4`
  margin: 0;
  font-family: "Montserrat";
  font-size: 23px;
  color: #4a4747;
  line-height: 120%;
  font-weight: 400;
  max-width: 300px;
  letter-spacing: 0.5px;

`;

export default HotelesInside;
