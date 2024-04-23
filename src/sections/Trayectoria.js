import AnimatedText from "@/components/AnimatedText";
import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { Container, SectionTitle } from "../styles/styles";
import { motion } from "framer-motion";

const TrayectoriaSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(!isVisible);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible2(!isVisible2);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    visible: {
      height: "auto",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    hidden: {
      height: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const motionVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeInOut",
        type: "spring",
      },
    },
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0,
        duration: 0,
      },
    },
  };

  const listItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
    closed: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
  };

  const trayectoria = [
    {
      año: 2016,
      items: [
        {
          titulo: "FESTIVAL DE LA LUZ",
          subtitulo: "Centro Cultural Haroldo Conti, “Impermanencia”",
        },
      ],
    },
    {
      año: 2015,
      items: [{ titulo: "MILÁN", subtitulo: "ARTinterete" }],
    },
    {
      año: 2014,
      items: [
        {
          titulo: "NEW YORK,",
          subtitulo: "Agora Gallery, “Creencias Latinas”",
        },
        {
          titulo: "FESTIVAL DE LA LUZ CCR,",
          subtitulo: "“Deconstruyendo Muros”",
        },
        { titulo: "ARTEXARTE,", subtitulo: "“Deconstruyendo Muros”" },
      ],
    },

    {
      año: 2012,
      items: [
        {
          titulo: "FESTIVAL DE LA LUZ XVII,",
          subtitulo: "Centro Cultural Recoleta, “Pasiones”",
        },
        {
          titulo: "CENTRO CULTURAL BORGES,",
          subtitulo: "“Horizontes Imaginarios”",
        },
        {
          titulo: "BIENAL,",
          subtitulo: "El Gran Sur, Montevideo “Creencias Latinas”",
        },
      ],
    },

    {
      año: 2011,
      items: [
        {
          titulo: "CENTRO CULTURAL BORGES,",
          subtitulo: "“Pueblos Olvidados”",
        },
        {
          titulo: "GALERÍA THAMES,",
          subtitulo: "“Pueblos Olvidados”",
        },
        { titulo: "CENTRO CULTURAL BORGES,", subtitulo: "“Madres Argentinas”" },
      ],
    },

    {
      año: 2010,
      items: [
        {
          titulo: "FESTIVAL DE LA LUZ XVII,",
          subtitulo: "Fundación Itaú, “Cicatrices”",
        },
      ],
    },

    {
      año: 2008,
      items: [
        {
          titulo: "FUNDACIÓN PATIÑO MAYER, BOLIVIA",
          subtitulo: "“Analogías”",
        },
      ],
    },

    {
      año: 2007,
      items: [
        {
          titulo: "BUENOS AIRES PHOTO,",
          subtitulo: "Galería Gonzalo Vidal, “Hijos del Sol”",
        },
        {
          titulo: "EMBAJADA DE PERÚ,",
          subtitulo: "“Hijos del Sol”",
        },
      ],
    },

    {
      año: 2004,
      items: [
        {
          titulo: "ECO CENTRO, PTO. MADRYN",
          subtitulo: "“Ratros”",
        },
        {
          titulo: "FESTIVAL DE LA LUZ XIII,",
          subtitulo: "Galería Stein, “Encuentro”",
        },
      ],
    },

    {
      año: 2003,
      items: [
        {
          titulo: "ARTE BA,",
          subtitulo: "Galería Cromática, “Huellas”",
        },
        {
          titulo: "ARTE BA,",
          subtitulo: "Banco Ciudad Bs. As.",
        },
        {
          titulo: "CENTRO CULTURAL RECOLETA,",
          subtitulo: "“Mi ciudad y su gente”",
        },
      ],
    },

    {
      año: 2002,
      items: [
        {
          titulo: "FESTIVAL DE LA LUZ XII,",
          subtitulo: "“Ceremonias Andinas”",
        },
      ],
    },
  ];
  return (
    <>
      <TrayectoriaContainer>
        <div className="left">
          <Info
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <div>
              <motion.ul
                animate={isVisible2 ? "open" : "closed"}
                variants={motionVariants}
              >
                {trayectoria.map((item, index) => (
                  <motion.li variants={listItemVariants} key={index}>
                    <AnimatedWorkLi>
                      <Content>
                        <WorkTitle>{item.año}</WorkTitle>
                        <Fix>
                          {item.items.map((i, index) => (
                            <YearContainer key={index}>
                              <p className="title">{i.titulo}</p>
                              <p className="subtitle">{i.subtitulo}</p>
                            </YearContainer>
                          ))}
                        </Fix>
                      </Content>
                    </AnimatedWorkLi>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Info>
        </div>

        <div className="right">
          <AnimatedText>
            <SectionTitle>TRAYECTORIA</SectionTitle>
          </AnimatedText>
        </div>
      </TrayectoriaContainer>
    </>
  );
};

const TrayectoriaContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  min-height: 100vh;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }

  .right {
    width: 30%;
    margin-bottom: 50px;

    @media screen and (max-width: 1100px) {
      width: 100%;
      margin-bottom: 0px;
    }
  }

  .left {
    width: 70%;
    margin-top: 50px;
    margin-bottom: 50px;

    @media screen and (max-width: 1100px) {
      width: 100%;
      margin-bottom: 50px;
      margin-top: 0px;
    }
  }

  @media screen and (max-width: 1100px) {
    & > *:nth-child(2) {
      order: -1;
    }
  }
`;

const Info = styled(motion.div)`
  display: flex;
  margin-top: 100px;
  background-color: #f9f9f9;
  justify-content: space-between;
  padding: 50px;
  width: 600px;

  @media screen and (max-width: 920px) {
    margin-top: 0px;
    padding: 10px;
  }

  @media screen and (max-width: 660px) {
    flex-direction: column;
    width: auto;
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    margin-bottom: 40px;
    letter-spacing: 0.3px;
    font-weight: 500;
    color: #6a6f58;
    line-height: 100%;
  }

  ul {
    list-style: none;
  }
`;

const AnimatedWorkLi = styled(motion.div)`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  align-items: center;
`;

const Fix = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-left: 40px;
`;
const YearContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;

  .title {
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 400;
    color: black;
    margin: 0;
    line-height: 120%;
  }

  .subtitle {
    font-family: "Montserrat", sans-serif;
    font-size: 11px;
    letter-spacing: 0.3px;
    font-weight: 500;
    color: #6a6f58;
    line-height: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: center;

  .row {
    display: flex;
    flex-direction: column !important;
  }

  .trayectoria-año-container {
    background-color: blue;
    display: flex;
    flex-direction: column !important;
  }
`;

const WorkTitle = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 400;
  color: black;
  margin: 0;
  line-height: 120%;
`;

export default TrayectoriaSection;
