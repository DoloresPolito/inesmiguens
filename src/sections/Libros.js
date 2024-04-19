import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Container, SectionTitle, Text } from "../styles/styles";
import Image from "next/image";
import libro1 from "../../public/assets/images/libros/hijos del sol.png";
import libro2 from "../../public/assets/images/libros/madres argentinas.png";
import libro3 from "../../public/assets/images/libros/parques y jardones.png";
import AnimatedText from "@/components/AnimatedText";


const LibrosSection = () => {
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

 

  return (
    <>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
  
            <AnimatedText>
              <SectionTitle>LIBROS EDITADOS</SectionTitle>
            </AnimatedText>

            <LibrosContainer>
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
            </LibrosContainer>

          
     
        </motion.div>
      </Container>
    </>
  );
};


const LibrosContainer = styled.div`
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


export default LibrosSection;
