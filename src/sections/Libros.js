import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Container, SectionTitle } from "../styles/styles";
import Image from "next/image";
import libro1 from "../../public/assets/images/libros/hijos del sol.png";
import libro2 from "../../public/assets/images/libros/madres argentinas.png";
import libro3 from "../../public/assets/images/libros/parques y jardones.png";
import AnimatedText from "@/components/AnimatedText";
import AnimatedImage from "@/components/AnimatedImage";
import { Parallax } from "react-scroll-parallax";

const LibrosSection = () => {
  const libros = [
    {
      nombre: "Hijos del Sol",
      image: libro1,
      link: "/hijos-del-sol",
      description:
        "Hijos del Sol es el testimonio de la fe de un pueblo, y pretende reflejar su esencia, sus creencias y costumbres. En esta cultura, lo pagano y la fe cristiana se amalgaman para dar lugar a un lenguaje mágico, profundo y deslumbrante. Fue necesario vivir con los descendientes de los incas, en sus lugares sagrados, para captar el sentido trascendente que le otorgan a la vida.",
    },
    {
      nombre: "Madres Argentinas",
      image: libro2,
      link: "/",
      description:
        "“De este libro brota esperanza. Madres Argentinas responde a una idea optimista, sostiene una apuesta por la vida: si a pesar de los temores y fatigas de la maternidad el universo de humanos crece como crece, entonces ser madre tiene que ser una experiencia superadora.” Pablo Roviralta",
    },
    {
      nombre: "Parques y Jardines",
      image: libro3,
      link: "/",
      description: "buscar",
    },
  ];

  return (
    <>
      <LibrosContainerSection>
        <AnimatedText>
          <SectionTitle>LIBROS</SectionTitle>
        </AnimatedText>

        <LibrosContainer>
          <AnimatedImage>
            {libros.map((item, index) => (
              <Item key={index}>
                <div className="left">
                  <Image
                    src={item.image}
                    alt={`imagen-${index}`}
                    className="book-image"
                  />
                </div>
                <Parallax speed={-3}>
                <div className="right">
                  <h4>{item.nombre}</h4>
                  <AnimatedText>
                    <p>{item.description}</p>
                  </AnimatedText>
                </div>
                </Parallax>
              </Item>
            ))}
          </AnimatedImage>
        </LibrosContainer>
      </LibrosContainerSection>
    </>
  );
};

const LibrosContainerSection = styled(Container)``;

const LibrosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
  margin: 0 auto;
  align-items: center;

`;

const Item = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 800px;
  margin-bottom: 60px;


  @media screen and (max-width: 860px) {
    flex-direction: column;
    width: 500px;
  }

  @media screen and (max-width: 540px) {
    width: 100%;
    height: auto;
  }

  .book-image {
    height: 350px;
    width: auto;

    @media screen and (max-width: 860px) {
      width: 60%;
      height: auto;
    }

    @media screen and (max-width: 540px) {
      width: 90%;
      height: auto;
    }
  }

  .left {
    display: flex;
    @media screen and (max-width: 860px) {
      justify-content: center;
      margin-bottom: 20px;
    }
  }

  .right {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media screen and (max-width: 860px) {
      margin-left: 0px;
    }

    @media screen and (max-width: 540px) {
      width: 100%;
      align-self: center;
  
      margin-bottom: 20px;
      margin-top: 10px;
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
    margin-right: 20px;
    letter-spacing: 1px;
    margin-bottom: 20px;
    padding: 5px;
    @media screen and (max-width: 860px) {
      align-self: center;
    }
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
    margin-bottom: 30px;
    font-weight: 200;
    @media screen and (max-width: 1100px) {
      margin-bottom: 20px;
    }

    @media screen and (max-width: 530px) {
      font-size: 11px;
      line-height: 160%;
    }
  }
`;

export default LibrosSection;
