import React, {useState, useEffect} from "react";
import { Container, SectionTitle } from "../styles/styles";
import styled from "styled-components";
import More from "@/components/More";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import img1 from "../../public/assets/images/talleres/1.jpg";
import img2 from "../../public/assets/images/talleres/2.jpg";
import img3 from "../../public/assets/images/talleres/3.jpg";
import Link from "next/link";
import AnimatedImage from "@/components/AnimatedImage";
import { Parallax } from "react-scroll-parallax";

function Talleres() {

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
  const medium = 1200;
  return (
    <>
      <TalleresContainer>
        <InfoContainer>

          {width > 970 ? (<>
 
          </>) : (<>
            <AnimatedText>
            <TitleContainerMobile>
              <TravelTitle>
                Explora el mundo <br />
                de la fotografía
              </TravelTitle>
            </TitleContainerMobile>
          </AnimatedText>
          </>)}
         
          <AnimatedImage>
          <Link href="/contacto">
            <CursoContainer>
              <h4>ciclo básico</h4>
              <Image
                className="course-img"
                src={img1}
                alt="CICLO BASICO"
                loading="eager"
              />
              <AnimatedText>
                <div className="text-container">
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
                  <More text="más info" link="/contacto" />
                  {/* <div className="button-container">
                      <Link href="/contacto">
                        <Rounded>más info</Rounded>
                      </Link>
                    </div> */}
                </div>
                
              </AnimatedText>
            </CursoContainer>
            </Link>
          </AnimatedImage>

          <AnimatedImage>
            <Link href="/contacto">
              <CursoContainer>
                <h4>travel and workshops</h4>
                <Image
                  className="course-img"
                  src={img2}
                  alt="TRAVEL AND WORKSHOPS"
                  loading="eager"
                />

                <AnimatedText>
                  <div className="text-container">
                    <p>
                      Workshop es un taller especializado en un tema específico,
                      donde se destaca la teoría, los autores contemporáneos que
                      trabajan sobre él, y los conceptos que lo trascienden.
                      Adquirimos nuevas habilidades para leer una imagen según
                      nuestra propia semiótica. Reforzamos la edición y la
                      elaboración de un portfolio sobre dicho tema.
                    </p>
                    <More text="más info" link="/contacto" />
                  </div>
                </AnimatedText>
              </CursoContainer>
            </Link>
          </AnimatedImage>

          <AnimatedImage>
            <Link href="/contacto">
              <CursoContainer>
                <h4>talleres</h4>

                <Image
                  className="course-img"
                  src={img3}
                  alt="TALLERES"
                  loading="eager"
                />

                <AnimatedText>
                  <div className="text-container">
                    <p>
                      Los talleres son grupos que se organizan cada 15 días,
                      según el nivel de conocimiento del alumno. El objetivo es
                      alcanzar un alto nivel creativo respetando la mirada de
                      cada uno en su obra y enseñando los recursos necesarios
                      para un buen desarrollo técnico. Análisis y edición de
                      obra. Creación de un Portfolio. Preparación y exposición.
                    </p>
                    <More text="más info" link="/contacto" />
                  </div>
                </AnimatedText>
              </CursoContainer>
            </Link>
          </AnimatedImage>
        </InfoContainer>
        {width > 970 ? (<> <AnimatedText>
          <Parallax speed={-100}>
            <TitleContainer>
              <TravelTitle>
                Explora el mundo <br />
                de la fotografía
              </TravelTitle>
            </TitleContainer>
          </Parallax>
        </AnimatedText></>) : (<></>)}
       
      </TalleresContainer>
    </>
  );
}

const TalleresContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 0 auto;
  justify-content: space-around;

  @media screen and (max-width: 970px) {
    flex-direction: column;
    width: 90%;
    justify-content: center;
    align-items: center;
  }
`;

const TitleContainer = styled.div`
  margin-bottom: 50px;
  margin-top: -350px;
`;

const TitleContainerMobile = styled.div`
  margin-bottom: 10px;
  margin-top: -30px;
  align-self: flex-start;

  justify-self: flex-start;
`;

const TravelTitle = styled(SectionTitle)`
  font-size: 45px;
  max-width: 500px;
  line-height: 120%;
  margin: 0;
  margin-top: 80px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: auto;

  width: 55%;
  @media screen and (max-width: 970px) {
    width: 90%;
  }
  @media screen and (max-width: 670px) {
    width: 100%;
  }
`;

const CursoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 40px;
  padding: 5px !important;
  /* margin: 20px 20px 50px 0px; */
  height: auto;
  transition: background-color 0.5s ease;
  border-radius: 5px;

  .course-img {
    width: 100%;
    height: auto;
    border-radius: 2px;
    @media screen and (max-width: 970px) {
      height: auto;
    }
  }

  .text-container {
    margin-top: 5px;
  }

  .button-container {
    width: 130px;
    height: 40px;
  }

  h4 {
    font-family: var(--font-montserrat);
    font-size: 20px;
    color: #4a4747;
    line-height: 90%;
    font-weight: 400;
    align-self: flex-start;
    line-height: 110%;
    margin: 0;
    /* margin-left: 10px; */
    letter-spacing: 1px;
    margin-bottom: 30px;
    text-transform: uppercase;
    margin-top: 25px;
  }

  p {
    font-family: var(--font-montserrat);
    color: black;
    font-size: 12px;
    line-height: 170%;
    /* max-width: 600px; */
    letter-spacing: 0.5px;
    text-align: justify;
    text-justify: inter-word;
    margin-bottom: 10px;
    /* font-weight: 300; */
    margin-top: 25px;
    /* @media screen and (max-width: 1100px) {
      margin-bottom: 20px;
      margin-left: 0px;
    }

    @media screen and (max-width: 530px) {
      font-size: 11px;
      line-height: 160%;
    } */
  }
`;

export default Talleres;
