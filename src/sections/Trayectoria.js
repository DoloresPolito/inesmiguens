import React, {useState, useEffect} from "react"
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Section, Container } from "../styles/styles";
import Image from "next/image";
import libro1 from "../../public/assets/images/libros/hijos del sol.png";
import libro2 from "../../public/assets/images/libros/madres argentinas.png";
import libro3 from "../../public/assets/images/libros/parques y jardones.png";

const Work = () => {

  const libros = [
    {
      nombre:"Hijos del Sol",
      image: libro1,
    },
    {      nombre:"Madres Argentinas",
      image: libro2,
    },
    {    nombre:"Parques y Jardines",
      image: libro3,
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



            <LibrosSection>

            <AnimatePresence>
          {isVisible &&
            libros.map((item, index) => (
              <motion.div
                key={index}
                variants={listItemVariants}
                custom={index}
                initial="hidden"
                animate="visible"
              >
                <Image src={item.image} alt={`imagen-${index}`}     />
                <Text>{item.nombre}</Text>
              </motion.div>
            ))}
        </AnimatePresence>
              {/* <div>
                <Image src={libro1} alt="Hijos del Sol" />
                <Text style={{ marginLeft: "10px" }}>Hijos del Sol</Text>
              </div>
              <div>
                <Image src={libro2} alt="Madres Argentinas" />
                <Text>Madres Argentinas</Text>
              </div>
              <div>
                <Image src={libro3} alt="Parques y Jardines" />
                <Text>Parques y Jardines</Text>
              </div> */}
            </LibrosSection>

            <TrayectoriaSection>

            </TrayectoriaSection>
          </TrayectoriaContainer>
        </motion.div>
      </Section>
    </>
  );
};

const TrayectoriaContainer = styled(Container)`
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;
const LibrosSection = styled.div`
  display: flex;
  flex: row;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;

    img {
      height: 350px;
      width: auto;
    }
  }
`;

const TrayectoriaSection = styled.div`
height: 600px;
width: 100%;




`
const WorkSection = styled.div`
  width: 100%;
  margin-top: 110px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fafafa;
  padding: 50px;
`;
const WorkLi = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  border-bottom: 0.5px solid #000000;
  align-items: center;
`;
const WorkDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #6a6f58;
    font-family: "Georama", sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 13px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  height: 60px;
  justify-content: center;
`;
const WorkTitle = styled.h4`
  font-family: "Georama", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 400;
  color: #4a4747;
  margin: 0;
  line-height: 0;
`;
const More = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  letter-spacing: 0.3px;
  font-weight: 500;
  color: #6a6f58;
  line-height: 100%;
`;

export const Text = styled.h5`
  margin: 0;
  font-family: "Montserrat";
  font-size: 16px;
  color: #4a4747;
  line-height: 130%;
  font-weight: 400;
  max-width: 200px;
  margin-top: 5px;
`;

export default Work;
