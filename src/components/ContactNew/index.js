import styles from "./style.module.scss";
import Image from "next/image";

import { useRef } from "react";
import { useScroll, motion, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import { slideUp, opacity } from "../ContactNew/animation";
import Rounded from "../../common/Rounded"

export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });


  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description);



  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.description}>
        <div  className={styles.body}>
          <p ref={description}>
            {phrase.split(" ").map((word, index) => {
              return (
                <span key={index} className={styles.mask}>
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
          <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </motion.p>
  
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/assets/images/profile/profile.jpeg`} />
            </div>
            <h2>Trabajemos juntos</h2>
          </span>

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
              fill="grey"
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

      </div>
    </motion.div>
  );
}
