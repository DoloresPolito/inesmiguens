import React, { useState } from 'react'
import styles from "./style.module.scss";
import LinkItem from "./LinkItem/LinkItem";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import { menuSlide } from "../animation";
import Curve from "./Curve/Curve";
import Footer from "../nav/Footer"

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Hoteles",
    href: "/hoteles",
  },
  {
    title: "Obras",
    href: "/obras",
  },
  {
    title: "Travel and Workshops",
    href: "/travelandworkshops",
  },
  {
    title: "Trayectoria",
    href: "/trayectoria",
  },
  {
    title: "Clientes",
    href: "/clientes",
  },
  {
    title: "Contacto",
    href: "/contacto",
  },
];

export default function Mask() {


  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <>
       <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
      >
       <div className={styles.body}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                    {/* <div className={styles.header}>
                        <p>Navigation</p>
                    </div> */}
                    {
                      navItems.map( (data, index) => {
                        return <LinkItem 
                        key={index} 
                        data={{...data, index}} 
                        isActive={selectedIndicator == data.href} 
                        setSelectedIndicator={setSelectedIndicator}>
                        </LinkItem>
                      })
                    }
            </div>
           
        </div>
        <Curve />
    </motion.div>
    </>
  );
}
