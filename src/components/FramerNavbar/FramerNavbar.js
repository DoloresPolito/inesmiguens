"use-client";
import React, { useState, useEffect } from "react";
import Styles from "./navbar.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

const links = [
  { href: "/hoteles", title: "HOTELES" },
  { href: "/obras", title: "OBRAS" },
  { href: "/talleres", title: "TRAVEL & WORKSHOPS" },
  { href: "/libros", title: "LIBROS" },  { href: "/clientes", title: "CLIENTES" },
  { href: "/contacto", title: "CONTACTO" },
];

const FramerNavbar = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const medium = 1200;

  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuActive(!burgerMenuActive);
  };

  const path = usePathname();

  const [scrollDirection, setScrollDirection] = useState("down");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      setScrollDirection("up");
    } else {
      setScrollDirection("down");
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, scrollDirection]);

  useEffect(() => {
    // Ocultar la barra de navegación al hacer scroll hacia abajo y mostrarla al hacer scroll hacia arriba
    setVisible(
      (scrollDirection === "up" && window.scrollY > 20) || window.scrollY <= 0
    );
  }, [scrollDirection]);

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
    <>
      {width >= medium ? (
        <>
         
            <Container visible={visible}>
              <NavbarCont>

     
              <div className="logo">
                <Link href="/">
                  <p>INES MIGUENS</p>
                </Link>
              </div>

              <Nav>
                <List>
                  {links.map((link) => (
                    <ListItem key={link.href}>
                      <StyledLink href={link.href} className="relative">
                        {link.href === path && <Underline />}
                        {link.title}
                      </StyledLink>
                    </ListItem>
                  ))}
                </List>
              </Nav>
              </NavbarCont>
            </Container>
      
        </>
      ) : (
        <>
          <div
            className={`${Styles.navbar} ${
              burgerMenuActive ? Styles.active : ""
            }`}
          >
            <div className={Styles.navigation}>
              <div className="logo">
                <Link href="/">
                  <p>INES MIGUENS</p>
                </Link>
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
                {links.map((link) => (
                  <motion.li variants={listItemVariants} key={link.href}>
                    <Link href={link.href}>{link.title}</Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

//desktop navbar styles

const NavbarCont = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  margin: 0 auto;
  
  justify-content: space-between;
  align-items: center;

  .logo{
    p{
      font-size: 30px;
  color: #4a4747;
  font-weight: 200;
  font-family: "Montserrat", sans-serif;
    }
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1000;
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  transition: opacity 0.3s ease, transform 0.3s ease;
  margin: 0 auto;
  max-width: 1600px;

  
  opacity: ${(props) =>
    props.visible || props.scrollDirection === "up" ? 1 : 0};
  transform: ${(props) =>
    props.visible || props.scrollDirection === "up"
      ? "none"
      : "translateY(-100%)"};
`;

const Nav = styled.nav`
  width: 50%;

`;

const List = styled.ul`
  margin-left: 2px;

  @media (min-width: 640px) {
    margin-left: 12px;
  }
  display: flex;
  justify-content: space-between;
`;

const ListItem = styled.li`
  width: auto;
  list-style-type: none;
`;

const StyledLink = styled.a`
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 12px;
  transition: all 0.3s ease;

  &:hover {
    font-weight: 500;
  }
`;

const Underline = styled.span`
  position: absolute;
  left: 0;
  top: 100%;
  display: block;
  height: 1px;
  width: 100%;
  background-color: black;
`;

export default FramerNavbar;
