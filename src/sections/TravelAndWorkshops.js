import React from "react";
import { Container, SectionTitle } from "../styles/styles";
import styled from "styled-components";
import More from "@/components/More";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";

import img1 from "../../public/assets/images/cursos/chicas.jpg";
import img2 from "../../public/assets/images/cursos/camellos.jpg";
import img3 from "../../public/assets/images/cursos/caballos.jpg";
import Link from "next/link";

import AnimatedImage from "@/components/AnimatedImage";

function Talleres() {
  return (
    <>
      <TalleresContainer>
        <AnimatedText>
          <SectionTitle>Travel and workshops</SectionTitle>
        </AnimatedText>

        <InfoContainer>
          <AnimatedImage>

  
          <Link href="/contacto">
      
          <CursoContainer>
            <h4>ciclo basico</h4>
            <Image className="course-img" src={img1} alt="curso 2" />
            <AnimatedText>


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
              <More text="más info" link="/contacto" />
            </div>
            </AnimatedText>

     
          </CursoContainer>
          </Link>
          </AnimatedImage>


          <AnimatedImage>

    

          <Link href='/contacto'>
 

          <CursoContainer>
            <h4>travel and workshops</h4>
            <Image className="course-img" src={img2} alt="curso 2" />

            <AnimatedText>

 
            <div className="text-container">
              <p>
                Workshop es un taller especializado en un tema específico, donde
                se destaca la teoría, los autores contemporáneos que trabajan
                sobre él, y los conceptos que lo trascienden. Adquirimos nuevas
                habilidades para leer una imagen según nuestra propia semiótica.
                Reforzamos la edición y la elaboración de un portfolio sobre
                dicho tema.
              </p>
              <More text="más info" link="/contacto" />
            </div>
            </AnimatedText>
  
          </CursoContainer>
      </Link>
      </AnimatedImage>

      <AnimatedImage>


          <Link href='/contacto'>
          <CursoContainer>
            <h4>talleres</h4>
            <Image className="course-img" src={img3} alt="curso 2" />
            <AnimatedText>

     
            <div className="text-container">
              <p>
                Los talleres son grupos que se organizan cada 15 días, según el
                nivel de conocimiento del alumno. El objetivo es alcanzar un
                alto nivel creativo respetando la mirada de cada uno en su obra
                y enseñando los recursos necesarios para un buen desarrollo
                técnico. Análisis y edición de obra. Creación de un Portfolio.
                Preparación y exposición.
              </p>
              <More text="más info" link="/contacto"/>
            </div>
            </AnimatedText>

          </CursoContainer>
          </Link>
          </AnimatedImage>
        </InfoContainer>

      </TalleresContainer>
    </>
  );
}

const TalleresContainer = styled(Container)`
  @media screen and (max-width: 800px) {
    width: 95%;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 80px;
  margin: 0 auto;
  margin-top: -30px;
  width: 100%;

  @media screen and (max-width: 1100px) {
    flex-direction: column;

  }

`;

const CursoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 40px;
  padding: 5px !important;
  margin: 20px 20px 20px 0px;
  height: 550px;
  transition: background-color 0.5s ease;
  border-radius: 5px;
  width: 90%;


  
  @media screen and (max-width: 1100px) {
    width: 70%;
    margin: 0 auto;
    height: auto;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0px 0px 80px 0px;
    padding: 0px;
  
    width: 95%;
  }


  .course-img {
    width: 360px;
    height: auto;
    border-radius: 2px;



    @media screen and (max-width: 1100px) {
      width: 90%;
    height: auto;
    align-self: center;
    }

    @media screen and (max-width: 800px) {
      align-self: flex-start;
    }

    @media screen and (max-width: 550px) {
      align-self: center;
      width: 100%;
    }
    
    
  }

  .text-container {
    min-height: 220px;
    margin-top: 5px;
    padding: 8px;
max-width:360px;

    @media screen and (max-width: 1100px) {
      min-height: auto;
      align-self: center !important;
      margin: 0 auto;
      max-width:900px;
    }

  }

  h4 {
    font-family: var(--font-bebasneue);
    font-size: 20px;
    color: #4a4747;
    line-height: 90%;
    font-weight: 200;
    align-self: flex-start;
    line-height: 110%;
    margin: 0;
  /* margin-left: 10px; */
    letter-spacing: 1px;
    margin-bottom: 10px;
    padding: 5px;
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
    margin-bottom: 10px;
    font-weight: 200;



    @media screen and (max-width: 1100px) {
      margin-bottom: 20px;
      margin-left: 0px;
    }

    @media screen and (max-width: 530px) {
      font-size: 11px;
      line-height: 160%;
    }
  }
`;

export default Talleres;
