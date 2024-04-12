import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import impermanencia from "../../public/assets/images/obras/impermanencia jpg reduce comp/1.jpg";
import voces from "../../public/assets/images/obras/voces de la tierra comp/1baja.jpg";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const images = [
    {
      image: impermanencia,
    },
    {
      image: voces,
    },
    {
      image: impermanencia,
    },
    {
      image: voces,
    },

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

  const preventContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <HomeSection>
      <HomeContainer>
        <AnimatePresence>
          {isVisible &&
            images.map((item, index) => (
              <PictureContainer
                key={index}
                variants={listItemVariants}
                custom={index}
                initial="hidden"
                animate="visible"
              >
                <StyledImage src={item.image} alt={`imagen-${index}`}      onContextMenu={preventContextMenu}/>
              </PictureContainer>
            ))}
        </AnimatePresence>
      </HomeContainer>
    </HomeSection>
  );
}

const HomeSection = styled.section`
  height: auto;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2%;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
  max-width: 1600px;

  @media screen and (max-width: 500px) {
    margin-bottom: 50px;
    margin-top: 80px;
  }

  div {
    background-color: #eeeeee;
    width: 470px;
    height: auto;
    margin: 5px 15px;

    @media screen and (max-width: 500px) {
      width: 90%;
    }
  }
`;

const PictureContainer = styled(motion.div)`
  position: relative;
  background-color: #eeeeee;
  width: 100%;
  /* height: 300px; */
  height: 300px;
  margin: 5px 5px;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  width: 100%;
  /* height: 300px; */
  height: 300px;
  object-fit: cover;
`;

export default Home;
