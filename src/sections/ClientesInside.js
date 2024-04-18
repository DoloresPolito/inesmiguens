import React from "react";
import styled from "styled-components";
import { Section, Container, Title } from "../styles/styles";
import { motion } from "framer-motion";
function ClientesInside() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };


  const motionVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut",
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
    hidden: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
    show: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
  };

  const clientes1 = [
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

  const clientes2 = [
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
  return (
    <>
      <ClientsSection>
        <ClientesContainer>
          <div className="left">
            <Title>Clientes</Title>
          </div>
          <div className="right">
            <Info>
              <WorkSection>
                <motion.ul
                  style={{ listStyle: "none" }}
                  variants={motionVariants}
                  initial="closed"
                  animate="open"
                >
                  {/* <h2>HOTELES Y ESTANCIAS</h2> */}
                  {clientes1.map((cliente, index) => (
                    <motion.li
                      variants={listItemVariants}
                      initial="closed"
                      animate="open"
                      key={index}
                    >
                      <WorkLi>
                        <Content>
                          <WorkTitle>{cliente.nombre}</WorkTitle>

                          {cliente.lugar ? (
                            <>
                              <More>{cliente.lugar}</More>
                            </>
                          ) : (
                            <></>
                          )}
                        </Content>
                      </WorkLi>
                    </motion.li>
                  ))}
                </motion.ul>
              </WorkSection>

              <WorkSection>
                <motion.ul
                  style={{ listStyle: "none" }}
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {/* <h2>MARCAS</h2> */}
                  {clientes2.map((cliente, index) => (
                    <motion.li variants={item} key={index}>
                      <WorkLi>
                        <Content2>
                          <WorkTitle>{cliente.nombre}</WorkTitle>

                          {cliente.lugar ? (
                            <>
                              <More>{cliente.lugar}</More>
                            </>
                          ) : (
                            <></>
                          )}
                        </Content2>
                      </WorkLi>
                    </motion.li>
                  ))}
                </motion.ul>
              </WorkSection>
            </Info>
          </div>
        </ClientesContainer>
      </ClientsSection>
    </>
  );
}

const ClientsSection = styled(Section)`
margin-top: 100px;
`

const ClientesContainer = styled(Container)`
  display: flex;
  flex-direction: row;
 
  @media screen and (max-width: 820px) {
flex-direction: column;
  }

  .left {
    width: 30%;
    margin-top: 50px;
    @media screen and (max-width: 820px) {
      width: 100%;
      margin-top: 0px;
  }
  }

  .right {
    margin-top: -80px;
    width: 70%;

    @media screen and (max-width: 820px) {
      width: 100%;
      margin-top: 0px;
  }
  }
`;

const Info = styled.div`
  display: flex;

  @media screen and (max-width: 500px) {
flex-direction: column;
  }
  h2 {
    color: red;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    margin-bottom: 40px;
    letter-spacing: 0.3px;
    font-weight: 500;
    color: #6a6f58;
    line-height: 100%;
  }
`;

const WorkSection = styled.div`
  width: 100%;
  margin-top: 110px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fafafa;
  padding-top: 50px;

  @media screen and (max-width: 820px) {
    padding-top: 10px;
    margin-top: 0px;
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 20px;
  }
`;
const WorkLi = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  /* border-bottom: 0.5px solid #000000; */
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  height: 42px;
  justify-content: center;
`;
const Content2 = styled.div`
  display: flex;
  flex-direction: column;

  height: 22px;
  justify-content: center;
`;
const WorkTitle = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 400;
  color: black;
  margin: 0;
  line-height: 100%;
`;
const More = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  letter-spacing: 0.3px;
  font-weight: 500;
  color: #6a6f58;
  line-height: 0%;
  background-color: red;
`;

export default ClientesInside;
