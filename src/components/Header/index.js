"use client";
import styles from "./style.module.scss";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Mask from "./nav";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Rounded from "../../common/Rounded";
import Link from "next/link";

export default function Navbar3() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);
  const [activeNavItem, setActiveNavItem] = useState(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useEffect(() => {
    const currentPathname = pathname.replace("/", "");
    setActiveNavItem(currentPathname);
  }, [pathname]);

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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 50,
        end: 100,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
      {width > medium ? (
        <>
          <div ref={header} className={styles.header}>
            <div className={styles.headercontainer}>

     
            <div className={styles.logo}>
              {/* <p className={styles.copyright}>©</p> */}
              <Link href="/">
                <div className={styles.name}>
                  <p className={styles.codeBy}>INÉS MIGUENS</p>
                  {/* <p className={styles.dennis}>MIGUENS</p> */}
                  {/* <p className={styles.snellenberg}>PHOTO</p> */}
                </div>
              </Link>
            </div>
            <div className={styles.nav}>
         

              <Link href="/hoteles">
                <div
                  className={`${styles.el} ${
                    activeNavItem === "hoteles" ? styles.active : ""
                  }`}
                >
                  <a>HOTELES</a>
          
                </div>
              </Link>
              <Link href="/obras">
                <div
                  className={`${styles.el} ${
                    activeNavItem === "obras" ? styles.active : ""
                  }`}
                >
                  <a>OBRAS</a>
                 
                </div>
              </Link>
              <Link href="/travelandworkshops">
                <div
                  className={`${styles.el} ${
                    activeNavItem === "travelandworkshops" ? styles.active : ""
                  }`}
                >
                  <a>TRAVEL AND WORKSHOPS</a>
            
                </div>
              </Link>
              <Link href="/trayectoria">
                <div
                  className={`${styles.el} ${
                    activeNavItem === "trayectoria" ? styles.active : ""
                  }`}
                >
                  <a>TRAYECTORIA</a>
           
                </div>
              </Link>
              <Link href="/clientes">
                <div
                  className={`${styles.el} ${
                    activeNavItem === "clientes" ? styles.active : ""
                  }`}
                >
                  <a>CLIENTES</a>
              
                </div>
              </Link>
              <Link href="/contacto">
                <div
                  className={`${styles.el} ${
                    activeNavItem === "contacto" ? styles.active : ""
                  }`}
                >
                  <a>CONTACTO</a>
               
                </div>
              </Link>
            </div>
            </div>
          </div>
          <div ref={button} className={styles.headerButtonContainer}>
            <Rounded
              onClick={() => {
                setIsActive(!isActive);
              }}
              className={`${styles.button}`}
            >
              <div
                className={`${styles.burger} ${
                  isActive ? styles.burgerActive : ""
                }`}
              ></div>
            </Rounded>
          </div>
          <AnimatePresence mode="wait">{isActive && <Mask />}</AnimatePresence>
        </>
      ) : (
        <>
          <div ref={header} className={styles.header}>
          <div className={styles.headercontainer}>
            <div className={styles.logo}>
              {/* <p className={styles.copyright}>©</p> */}
              <Link href="/">
                <div className={styles.name}>
                  <p className={styles.codeBy}>INÉS MIGUENS</p>
                  {/* <p className={styles.dennis}>MIGUENS</p> */}
                  {/* <p className={styles.snellenberg}>PHOTO</p> */}
                </div>
              </Link>
            </div>

            <div className={styles.headerButtonContainerMobile}>
              <Rounded
                onClick={() => {
                  setIsActive(!isActive);
                }}
                className={`${styles.button}`}
              >
                <div
                  className={`${styles.burger} ${
                    isActive ? styles.burgerActive : ""
                  }`}
                ></div>
              </Rounded>
            </div>
            <AnimatePresence mode="wait">
              {isActive && <Mask />}
            </AnimatePresence>
            </div>
          </div>
        </>
      )}
    </>
  );
}
