import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../../common/Rounded";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Magnetic from "../../common/Magnetic";
import Link from "next/link";

export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/assets/images/profile/profile.jpeg`} />
            </div>
            <h2>Trabajemos juntos</h2>
          </span>
          {/* <h2>juntos</h2> */}
          <motion.div style={{ x }} className={styles.buttonContainer}>
           
          <Link href='/contacto'>
            <Rounded backgroundColor={"#AFAFAF"} className={styles.button}>
        
              <p>Contactanos!</p>
             
            </Rounded>
            </Link>
   
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav}>
        <Link href='mailto:inesmiguensphoto@gmail.com'>
          <Rounded>
            <p>inesmiguensphoto@gmail.com</p>
          </Rounded>
          </Link>
          <Link href='https://api.whatsapp.com/send/?phone=541154675902'>
          <Rounded>
            <p>+541154675902</p>
          </Rounded>
          </Link>
        </div>
        {/* <div className={styles.info}>
          <div>
            <span>
        
              <p>©2024 Inés Miguens </p>
            </span>
            <span>
         
              <p>All rights reserved.</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <p>Awwwards</p>
              </Magnetic>
            </span>
            <Magnetic>
              <p>Instagram</p>
            </Magnetic>
            <Magnetic>
              <p>Dribbble</p>
            </Magnetic>
            <Magnetic>
              <p>Linkedin</p>
            </Magnetic>
          </div>
        </div> */}
      </div>
    </motion.div>
  );
}
