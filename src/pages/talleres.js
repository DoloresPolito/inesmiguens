import React, { useState, useEffect } from "react";
import { Section, Container, Title } from "../styles/styles";
import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import styled from "styled-components";

import More from "@/components/More";
import Cover from "@/components/Carousel";

import AnimatedText from "@/components/AnimatedText";
function Talleres() {
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

  return (
    <>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <FramerNavbar />
        <TalleresSection>
          <TalleresContainer>
            <Top>
              <TitleContainerAnimated
                variants={titleVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                <TitleTalleres>Travel and workshops</TitleTalleres>
              </TitleContainerAnimated>
              <InfoContainer>
                <div className="cursos">
                  <CursoContainer>
                    <h4>ciclo basico</h4>
                    <AnimatedText >
                    Se impartirán los conocimientos para la comprensión de
                      imágenes color y blanco y negro. Se aprenderá a manejar la
                      cámara, sensibilidad, diafragma, profundidad de campo,
                      velocidad, foco. Conocimientos de composición, toma, luz y
                      flash. Retrato, paisaje y macro. Profundización en la luz,
                      clave alta y clave baja. Profundización en composición,
                      figuras y formas y líneas, Conocimientos de las
                      herramientas Photoshop, jpeg y raw.
                    </AnimatedText>

                    <More text="más info" link="/contacto" />
                  </CursoContainer>

                  <CursoContainer>
                    <h4>travel and workshops</h4>
                    <p>
                      Workshop es un taller especializado en un tema específico,
                      donde se destaca la teoría, los autores contemporáneos que
                      trabajan sobre él, y los conceptos que lo trascienden.
                      Adquirimos nuevas habilidades para leer una imagen según
                      nuestra propia semiótica. Reforzamos la edición y la
                      elaboración de un portfolio sobre dicho tema.
                    </p>
                    <More text="más info" link="/contacto" />
                  </CursoContainer>

                  <CursoContainer>
                    <h4>talleres</h4>
                    <p>
                      Los talleres son grupos que se organizan cada 15 días,
                      según el nivel de conocimiento del alumno. El objetivo es
                      alcanzar un alto nivel creativo respetando la mirada de
                      cada uno en su obra y enseñando los recursos necesarios
                      para un buen desarrollo técnico. Análisis y edición de
                      obra. Creación de un Portfolio. Preparación y exposición.
                    </p>
                    <More text="más info" link="/contacto" />
                  </CursoContainer>
                </div>

                <div className="imagenes-container">
                  <Cover />
                </div>
              </InfoContainer>
            </Top>
          </TalleresContainer>
        </TalleresSection>
        <Footer />
      </motion.div>
    </>
  );
}

const TalleresSection = styled(Section)`
  justify-content: center;
  align-items: center !important;
  height: auto;
`;

const TalleresContainer = styled(Container)`
  height: 100%;
  width: 90%;
  display: flex;
  margin-top: 80px;
  flex-direction: row;
  padding-bottom: 100px;
`;

const Top = styled.div`
  width: 100%;
  justify-content: space-between !important;
  align-items: space-between;
  height: 100%;
  margin-top: 20px;
`;

const TitleTalleres = styled(Title)`
height:auto;`;

const InfoContainer = styled.div`
  margin-top: -10px;

  display: flex;
  flex-direction: row;

  .cursos {
    width: 50%;
  }

  .imagenes-container {
    width: 50%;
    margin-top: -100px;
  }
`;
const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

`;

const TitleContainerAnimated = motion(TitleContainer);

const CursoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 90%;
  margin-bottom: 40px;

  h4 {
    font-family: "Montserrat";
    font-size: 20px;
    color: #4a4747;
    line-height: 90%;
    font-weight: 300;
    align-self: flex-start;
    line-height: 110%;
    margin: 0;
    margin-right: 20px;
  }

  p {
    font-family: "Montserrat", sans-serif;
    color: black;
    font-size: 12px;
    line-height: 170%;
    max-width: 600px;
    letter-spacing: 0.5px;

    @media screen and (max-width: 530px) {
      font-size: 11px;
      line-height: 160%;
    }
  }
`;

export default Talleres;
