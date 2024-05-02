import AnimatedText from "@/components/AnimatedText";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, SectionTitle } from "../styles/styles";
import { motion } from "framer-motion";
import Image from "next/image";
import libro1 from "../../public/assets/images/libros/hijos del sol.png";
import libro2 from "../../public/assets/images/libros/madres argentinas.png";
import libro3 from "../../public/assets/images/libros/parques y jardones.png";

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
      año: 2023,
      items: [
        {
          titulo: "PRAXIS, GALERIA VIRTUAL",
          subtitulo: "“Hijos del Sol”",
        },
        {
          titulo: "PLANET ART COLLECTION",
          subtitulo: "Alemania",
        },
      ],
    },
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
      items: [{ titulo: "MILÁN ARTEINTERETE", subtitulo: "ARTinterete" }],
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
          subtitulo: "“Voces de la Tierra”",
        },
        {
          titulo: "GALERÍA THAMES,",
          subtitulo: "“Pueblos Olvidados”",
        },
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
      description:
        "Este libro reúne aquellos jardines que, según mi criterio, se prestan a una lectura expresiva del espíritu de quien los concibió y los habita. No se previlegia el tamaño, la ubicación ni el diseño, sino lo que cada jardín es capaz de manifestar. Un sitio de recogimiento y de armonía donde se concilian varias ideas con un diseño personal que responde a las necesidades de la vida diaria. Un espacio íntimo que nos conecta con la naturaleza; un lugar para recrearnos y recrear.",
    },
  ];
  return (
    <>
      <TrayectoriaContainer>
        <div className="right">
          <AnimatedText>
            <SectionTitle>TRAYECTORIA</SectionTitle>
          </AnimatedText>
        </div>
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

        <LibrosContainerSection>
          <AnimatedText>
            <SectionTitle>LIBROS</SectionTitle>
          </AnimatedText>

          <LibrosContainer>
            {libros.map((item, index) => (
              <Item key={index}>
                <div className="top">
                  <Image
                    src={item.image}
                    alt={`imagen-${index}`}
                    className="book-image"
                  />
                </div>

                <div className="bottom">
                  <h4>{item.nombre}</h4>
                  <AnimatedText>
                    <p>{item.description}</p>
                  </AnimatedText>
                </div>
              </Item>
            ))}
          </LibrosContainer>
        </LibrosContainerSection>
      </TrayectoriaContainer>
    </>
  );
};

const TrayectoriaContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 80%;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }

  @media screen and (max-width: 660px) {
    width: 90%;
  }

  .right {
    width: 100%;

    @media screen and (max-width: 1100px) {
      width: 100%;
      margin-bottom: 0px;
    }
  }

  .left {
    width: 70%;
    margin: 0 auto;

    @media screen and (max-width: 1100px) {
      width: 100%;
      margin-left: -30px;
    }
  }
`;

const Info = styled(motion.div)`
  display: flex;
  margin-top: 0px;
  justify-content: space-between;
  width: 600px;
  margin-left: 200px;
  margin-top: -50px;

  @media screen and (max-width: 920px) {
    margin-top: 0px;
    padding: 10px;
    margin-left: 0px;
    margin-top: 0px;
  }

  @media screen and (max-width: 660px) {
    flex-direction: column;
    width: auto;
    background-color: white;
    padding: 0;
    margin-top: 0px;
    padding: 10px;
    margin-left: 0px;
    margin-top: 0px;
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
  margin-bottom: 10px;
`;
const YearContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;

  margin-bottom: 10px;

  .title {
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 400;
    color: #4a4747;
    margin: 0;
    line-height: 110%;
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
    display: flex;
    flex-direction: column !important;
  }
`;

const WorkTitle = styled.h4`
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: 100;
  color: #6a6f58;
  margin: 0;
  line-height: 120%;
  font-family: var(--font-bebasneue);
`;

const LibrosContainerSection = styled(Container)`
  width: 100%;
`;

const LibrosContainer = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Item = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-bottom: 60px;
  align-items: center;

  @media screen and (max-width: 420px) {
    width: auto;
  }

  .book-image {
    height: 350px;
    width: auto;
    margin-bottom: 30px;
  }

  .top {
    display: flex;

    @media screen and (max-width: 860px) {
      justify-content: center;
      margin-bottom: 20px;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center !important;
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
    align-self: center;
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
    padding: 0px 20px;
    @media screen and (max-width: 1100px) {
      margin-bottom: 20px;
    }

    @media screen and (max-width: 530px) {
      font-size: 11px;
      line-height: 160%;
    }
  }
`;

export default TrayectoriaSection;
