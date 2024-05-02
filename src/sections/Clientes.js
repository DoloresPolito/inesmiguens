import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, SectionTitle } from "../styles/styles";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

function ClientesSection() {
  const clientesA = [
    {
      nombre: "Estancia La Bamba de Areco",
      lugar: "Provincia de Buenos Aires",
    },
    { nombre: "Hotel Los Cauquenes", lugar: "Ushuaia" },
    { nombre: "Estancia Parque Diana", lugar: "Neuquén" },
    { nombre: "Hotel Castillo de Mandl", lugar: "Córdoba" },
    { nombre: "Estancia San Pedro Viejo", lugar: "Córdoba" },
    { nombre: "Pilará", lugar: "" },
    { nombre: "Ayres de Pilar", lugar: "" },
  ];

  const clientesB = [
    { nombre: "Andromaco", lugar: "" },
    { nombre: "Bago Laboratorios", lugar: "" },
    { nombre: "Banelco", lugar: "" },
    { nombre: "Cardon", lugar: "" },
    { nombre: "Cheecky", lugar: "" },
    { nombre: "Charles Centro Oftalmológico", lugar: "" },

    { nombre: "Cicer", lugar: "" },
    { nombre: "Editorial Lariviere", lugar: "" },
    { nombre: "Estudio Sierchuk - Barrionuevo", lugar: "" },
    { nombre: "Own", lugar: "" },
    ,
    { nombre: "Sofia Revista", lugar: "" },
    { nombre: "El Jardín Revista", lugar: "" },
    { nombre: "Surco ONG", lugar: "" },
    { nombre: "Tiempo Nuevo", lugar: "" },
    { nombre: "Sensei Restaurant", lugar: "" },
    { nombre: "VZ", lugar: "" },
  ];

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

  return (
    <>
      <ClientesContainer>
        <div className="left">
          <AnimatedText>
            <SectionTitle>Clientes</SectionTitle>
          </AnimatedText>
        </div>

        <div className="right">
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
                {clientesA.map((cliente, index) => (
                  <motion.li variants={listItemVariants} key={index}>
                    <AnimatedWorkLi>
                      <Content>
                        <WorkTitle>{cliente.nombre}</WorkTitle>
                      </Content>
                    </AnimatedWorkLi>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div>
              <motion.ul
                animate={isVisible2 ? "open" : "closed"}
                variants={motionVariants}
              
              >
                {clientesB.map((cliente, index) => (
                  <motion.li variants={listItemVariants} key={index}>
                    <AnimatedWorkLi>
                      <Content>
                        <WorkTitle>{cliente.nombre}</WorkTitle>
                      </Content>
                    </AnimatedWorkLi>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Info>
        </div>
      </ClientesContainer>
    </>
  );
}

const ClientesContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 80%;


  @media screen and (max-width: 920px) {
    flex-direction: column;
  }

  .left {
    width: 30%;
    margin-top: 0px;

    @media screen and (max-width: 920px) {
      width: 100%;
    }
  }

  .right {
    width: 70%;
    margin-bottom: 50px;
    margin-top: -30px;

    @media screen and (max-width: 920px) {
      width: 100%;
      margin-bottom: 150px;
    }
  }
`;

const Info = styled(motion.div)`
  display: flex;
  margin-top: 100px;
  background-color: white;
  justify-content: space-between;
  padding: 50px 0px;
  width: 600px;


  @media screen and (max-width: 920px) {
    margin-top: 0px;
    padding: 10px;
  }



  @media screen and (max-width: 660px) {
    flex-direction: column;
    width: auto;
  }

  @media screen and (max-width: 490px) {

  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    margin-bottom: 20px;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;

  height: 42px;
  justify-content: center;
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
const More = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  letter-spacing: 0.3px;
  font-weight: 500;
  color: #6a6f58;
  line-height: 100%;
`;

export default ClientesSection;
