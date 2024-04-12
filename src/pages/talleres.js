import React from "react";
import { Section, Container } from "../styles/styles";
import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import styled from "styled-components";
function Talleres() {
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
              <TitleContainer>
                <h2>travel & workshops</h2>
              </TitleContainer>
              <InfoContainer>
                <CursoContainer>
                  <h4>ciclo basico</h4>
                  <p>
                    Se impartirán los conocimientos para la comprensión de
                    imágenes color y blanco y negro. Se aprenderá a manejar la
                    cámara, sensibilidad, diafragma, profundidad de campo,
                    velocidad, foco. Conocimientos de composición, toma, luz y
                    flash. Retrato, paisaje y macro. Profundización en la luz,
                    clave alta y clave baja. Profundización en composición,
                    figuras y formas y líneas, Conocimientos de las herramientas
                    Photoshop, jpeg y raw.
                  </p>
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
                </CursoContainer>

                <CursoContainer>
                  <h4>talleres</h4>
                  <p>
                    Los talleres son grupos que se organizan cada 15 días, según
                    el nivel de conocimiento del alumno. El objetivo es alcanzar
                    un alto nivel creativo respetando la mirada de cada uno en
                    su obra y enseñando los recursos necesarios para un buen
                    desarrollo técnico. Análisis y edición de obra. Creación de
                    un Portfolio. Preparación y exposición.
                  </p>
                </CursoContainer>
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


`

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

  h2 {
    font-family: "Montserrat";
    font-size: 70px;
    color: #4A4747;
    line-height: 90%;
    font-weight: 200;
    max-width: 500px;
    margin-top: 5px;
    margin-bottom: 25px;
  }
`;

const InfoContainer = styled.div`
  margin-top: 100px;
`;
const TitleContainer = styled.div``;

const CursoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  h4 {
    font-family: "Montserrat";
  font-size: 20px;
  color: #4a4747;
  line-height: 90%;
  font-weight: 200;
  align-self: flex-start;
  line-height: 90%;
  margin: 0;
  margin-right: 20px;

  @media screen and (max-width: 1100px) {
    line-height: 100%;
    font-size: 80px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 530px) {
    line-height: 100%;
    font-size: 60px;
    margin-bottom: 30px;
  }
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
