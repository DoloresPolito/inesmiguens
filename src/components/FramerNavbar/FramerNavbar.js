"use-client";
import React, { useState, useEffect } from "react";
import Styles from "./navbar.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

const FramerNavbar = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // Establecer el ancho inicial

    window.addEventListener("resize", handleResize); // Agregar listener de evento de cambio de tamaño de ventana

    return () => {
      window.removeEventListener("resize", handleResize); // Eliminar listener de evento al desmontar el componente
    };
  }, []);

  const medium = 1200;

  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuActive(!burgerMenuActive);
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
    <div
      className={`${Styles.navbar} ${burgerMenuActive ? Styles.active : ""}`}
    >
      {width >= medium ? (
        <>
        <Container>
          <div>
            <p>INES MIGUENS</p>
          </div>
          
         <div className="items">
         <Link href="/hoteles">HOTELES</Link>
         <Link href="/talleres">TALLERES</Link>
         <Link href="/trayectoria">TRAYECTORIA</Link>
         <Link href="/contacto">CONTACO</Link>
         </div>



        </Container>
        </>
      ) : (
        <>
          <div className={Styles.navigation}>
          <div>
            <p>INES MIGUENS</p>
          </div>
            <div
              className={Styles.burgerMenuContainer}
              onClick={() => toggleBurgerMenu()}
            >
              <div className={Styles.burgerMenuTrigger}></div>
              <div className={Styles.burgerMenu}></div>
            </div>
          </div>
          <div className={Styles.content}>
            <motion.ul
              animate={burgerMenuActive ? "open" : "closed"}
              variants={motionVariants}
            >
              <motion.li variants={listItemVariants}>
                <Link href="/hoteles">HOTELES</Link>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <Link href="/talleres">TALLERES</Link>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <Link href="/trayectoria">TRAYECTORIA</Link>
              </motion.li>
              <motion.li variants={listItemVariants}>
                <Link href="/contacto">CONTACO</Link>
              </motion.li>
            </motion.ul>
          </div>
        </>
      )}
    </div>
  );
};



//desktop navbar styles

const Container = styled.div`
display: flex;
width: 90%;
height: 100%;
align-items: center;
justify-content: space-between;
margin: 0 auto;

.items{
 padding: 0px 50px;

 a{

  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  font-style: normal;
  padding: 0px 20px;


 }
}
`

export default FramerNavbar;
