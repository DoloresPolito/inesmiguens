import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Section, Container, Title } from "../styles/styles";
import Image from "next/image";
import libro1 from "../../public/assets/images/libros/hijos del sol.png";
import libro2 from "../../public/assets/images/libros/madres argentinas.png";
import libro3 from "../../public/assets/images/libros/parques y jardones.png";
const Work = () => {



  
  const libros = [
    {
      nombre: "Hijos del Sol",
      image: libro1,
      link: "/hijos-del-sol",
    },
    { nombre: "Madres Argentinas", image: libro2, link: "/" },
    { nombre: "Parques y Jardines", image: libro3, link: "/" },
  ];

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
      x: -0,
      y: 20,
    },
    hover: {
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const titleVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0.5,
      y: 10,
    },
  };

  return (
    <>
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <TrayectoriaContainer>
            <ObrasTitleAnimated
                        variants={titleVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
            >LIBROS EDITADOS</ObrasTitleAnimated>

            <LibrosSection>
              <AnimatePresence>
                {isVisible &&
                  libros.map((item, index) => (
                    <Item
                      key={index}
                      variants={listItemVariants}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                    >
                      <Image src={item.image} alt={`imagen-${index}`} />
                      <Text>{item.nombre}</Text>
                    </Item>
                  ))}
              </AnimatePresence>
            </LibrosSection>

            <TrayectoriaSection></TrayectoriaSection>
          </TrayectoriaContainer>
        </motion.div>
      </Section>
    </>
  );
};

const TrayectoriaContainer = styled(Container)`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;
const LibrosSection = styled.div`
  display: flex;
  flex: row;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 350px;
    width: auto;
  }
`;

const TrayectoriaSection = styled.div`
  height: 600px;
  width: 100%;
`;

const BooksTitle = styled(Title)`
  align-self: flex-start;
  margin-top: 90px;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 1px;
`;

const ObrasTitleAnimated = motion(BooksTitle);

export const Text = styled.h5`
  margin: 0;
  font-family: "Montserrat";
  font-size: 14px;
  color: #4a4747;
  line-height: 130%;
  font-weight: 500;
  max-width: 200px;
  margin-top: 5px;
  margin-left: 8px;
`;

export default Work;
