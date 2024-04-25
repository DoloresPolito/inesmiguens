import React, { useState } from "react";
import Styles from "./navbar.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "/hoteles", title: "HOTELES" },
  { href: "/obras", title: "OBRAS" },
  { href: "/travelandworkshops", title: "TRAVEL & WORKSHOPS" },
  { href: "/trayectoria", title: "TRAYECTORIA" },
  { href: "/clientes", title: "CLIENTES" },
  { href: "/contacto", title: "CONTACTO" },
];

const FramerNavbarMobile = () => {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuActive(!burgerMenuActive);
  };

  // const [scrollDirection, setScrollDirection] = useState("down");
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);

  // const handleScroll = () => {
  //   const currentScrollPos = window.pageYOffset;

  //   if (prevScrollPos > currentScrollPos) {
  //     setScrollDirection("up");
  //   } else {
  //     setScrollDirection("down");
  //   }

  //   setPrevScrollPos(currentScrollPos);
  // };

  const handleClose = () => {
    setBurgerMenuActive(false)
  }

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
      <>
        <div
          className={`${Styles.navbar} ${
            burgerMenuActive ? Styles.active : ""
          }`}
        >
          <div className={Styles.navigation}>
            <div className="logo" 
                onClick={handleClose}>
              <Link href="/">
                <p>INÉS MIGUENS</p>
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
                <motion.li variants={listItemVariants} key={link.href} onClick={handleClose}>
                  <Link href={link.href}>{link.title}</Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </>
    </>
  );
};



export default FramerNavbarMobile;
