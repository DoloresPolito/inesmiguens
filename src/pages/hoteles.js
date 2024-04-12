import React, { useState, useEffect } from "react";
import { Section, Container } from "../styles/styles";
import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import Footer from "@/components/Footer";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import img1a from "../../public/assets/images/hoteles/principal/1.jpg";
import img2a from "../../public/assets/images/hoteles/principal/2.jpg";
import img3a from "../../public/assets/images/hoteles/principal/3.jpg";
function Hoteles() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const listItemVariants = {
    visible: (index) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
    hidden: {
      opacity: 0,
      x: -100,
      y: 20,
    },
    hover: {
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const hoteles = [
    {
      nombre: "Los Cauquenes",
      lugar: "Bariloche",
      imagen: img1a,
      href: "/cauquenes",
    },
    {
      nombre: "La Bamba de Areco",
      lugar: "San Antonio de Areco",
      imagen: img3a,
      href: "/bamba",
    },
    { nombre: "Parque Diana", lugar: "Neuquen", imagen: img2a, href: "/diana" },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <FramerNavbar />
        <HotelesSection>
          <HotelesContainer>
            <h2>hoteles y estancias</h2>

            {/* <AnimatePresence>
              {isVisible &&
                hoteles.map((item, index) => (
                  <HotelLink href={item.href}>
                    <HotelSection
                      key={index}
                      variants={listItemVariants}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                    >
                      <Image src={item.imagen} alt={item.nombre} />
                      <HotelSubtitle>{item.nombre}</HotelSubtitle>
                      <HotelText>{item.lugar}</HotelText>
                    </HotelSection>
                  </HotelLink>
                ))}
            </AnimatePresence> */}

            <AnimatePresence>
              {isVisible &&
                hoteles.map((item, index) => (
                  <HotelLink href={item.href} key={index}>
              
                    <HotelSection
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.8,
                        ease: "easeInOut",
                      }}
                    >
                      <Image src={item.imagen} alt={item.nombre} />
                      <HotelSubtitle>{item.nombre}</HotelSubtitle>
                      <HotelText>{item.lugar}</HotelText>
                    </HotelSection>
                    </HotelLink>
               
                ))}
            </AnimatePresence>
          </HotelesContainer>
        </HotelesSection>
        <Footer />
      </motion.div>
    </>
  );
}

const HotelesSection = styled(Section)``;

const HotelesContainer = styled(Container)`
  height: auto;
  margin-top: 110px;
  width: 80%;
  h2 {
    font-family: "Montserrat";
    font-size: 70px;
    color: #4a4747;
    line-height: 90%;
    font-weight: 200;
    margin-top: 5px;
    margin-bottom: 45px;
  }
`;

const HotelSection = styled.div`
  height: 430px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
  align-items: flex-end;

  img {
    width: 65%;
    height: 370px;
    object-fit: cover;
  }

  @media screen and (max-width: 850px) {
    align-items: flex-start;

    img {
      width: 100%;
      height: 370px;
      object-fit: cover;
      align-self: center;
    }
  }
`;

const HotelSection2 = styled.div`
  height: 430px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  align-items: flex-start;

  img {
    width: 65%;
    height: 370px;
    object-fit: cover;
  }
  @media screen and (max-width: 850px) {
    align-items: flex-start;

    img {
      width: 100%;
      height: 370px;
      object-fit: cover;
      align-self: center;
    }
  }
`;

const HotelLink = styled(Link)`
  display: inline-block; /* o 'inline' si es necesario */
  width: 100%; /* o el ancho deseado */
  height: 100%; /* o la altura deseada */
  text-decoration: none; /* opcional, para quitar el subrayado */
`;

const HotelSubtitle = styled.h4`
  margin: 0;
  font-family: "Montserrat";
  font-size: 18px;
  color: #4a4747;
  line-height: 130%;
  font-weight: 400;
  max-width: 200px;
  letter-spacing: 0.5px;
  margin-top: 5px;
`;

const HotelText = styled.h5`
  margin: 0;
  font-family: "Montserrat";
  font-size: 12px;
  color: #4a4747;
  line-height: 130%;
  font-weight: 300;
  max-width: 200px;
`;

export default Hoteles;
