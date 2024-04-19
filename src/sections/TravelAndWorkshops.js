import React from "react";
import { Container, SectionTitle } from "../styles/styles";
import styled from "styled-components";
import More from "@/components/More";
import AnimatedText from "@/components/AnimatedText";
import MovingComponentReves from "@/components/MovingComponentReves";
function Talleres() {
  return (
    <>
      <TalleresContainer>
        <AnimatedText>
          <SectionTitle>Travel and workshops</SectionTitle>
        </AnimatedText>
        <MovingComponentReves />
        <InfoContainer>
 
            <CursoContainer>
              <h4>ciclo basico</h4>
              <div className="text-container">

           
              <p>
                Se impartirán los conocimientos para la comprensión de imágenes
                color y blanco y negro. Se aprenderá a manejar la cámara,
                sensibilidad, diafragma, profundidad de campo, velocidad, foco.
                Conocimientos de composición, toma, luz y flash. Retrato,
                paisaje y macro. Profundización en la luz, clave alta y clave
                baja. Profundización en composición, figuras y formas y líneas,
                Conocimientos de las herramientas Photoshop, jpeg y raw.
              </p>
              </div>
              <More text="más info" link="/contacto" />
            </CursoContainer>

            <CursoContainer>
              <h4>travel and workshops</h4>
              <div className="text-container">

         
              <p>
                Workshop es un taller especializado en un tema específico, donde
                se destaca la teoría, los autores contemporáneos que trabajan
                sobre él, y los conceptos que lo trascienden. Adquirimos nuevas
                habilidades para leer una imagen según nuestra propia semiótica.
                Reforzamos la edición y la elaboración de un portfolio sobre
                dicho tema.
              </p>
              </div>
              <More text="más info" link="/contacto" />
            </CursoContainer>

            <CursoContainer>
              <h4>talleres</h4>
              <div className="text-container">

      
              <p>
                Los talleres son grupos que se organizan cada 15 días, según el
                nivel de conocimiento del alumno. El objetivo es alcanzar un
                alto nivel creativo respetando la mirada de cada uno en su obra
                y enseñando los recursos necesarios para un buen desarrollo
                técnico. Análisis y edición de obra. Creación de un Portfolio.
                Preparación y exposición.
              </p>
              </div>
              <More text="más info" link="/contacto" />
            </CursoContainer>
        
        </InfoContainer>
      </TalleresContainer>
    </>
  );
}

const TalleresContainer = styled(Container)``;


const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;


`;

const CursoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 10px;
  width: 100%;
  margin-bottom: 40px;
  padding: 20px;
  margin: 20px 20px 20px 0px;
  height: 300px;

  .text-container{
    height: 220px;
  }

  h4 {
    font-family: var(--font-bebasneue);
    font-size: 20px;
    color: #4a4747;
    line-height: 90%;
    font-weight: 500;
    align-self: flex-start;
    line-height: 110%;
    margin: 0;
    margin-right: 20px;
    letter-spacing: 1px;
  }

  p {
    font-family: var(--font-montserrat);
    color: black;
    font-size: 12px;
    line-height: 170%;
    max-width: 600px;
    letter-spacing: 0.5px;
    text-align: justify;
  text-justify: inter-word;

    @media screen and (max-width: 530px) {
      font-size: 11px;
      line-height: 160%;
    }
  }
`;

export default Talleres;
