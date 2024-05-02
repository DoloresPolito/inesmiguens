import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";
import styled from "styled-components"



import img1 from "/public/assets/images/nuevas home/2.jpg";
import img2 from "/public/assets/images/nuevas home/9.jpg";
import img3 from "/public/assets/images/nuevas home/mujermasazul.jpg";
import img4 from "/public/assets/images/nuevas home/10.jpg";
import img5 from "/public/assets/images/nuevas home/3.jpg";

import img6 from "/public/assets/images/nuevas home/van2.jpg";
import img7 from "/public/assets/images/nuevas home/van3.jpg";
import img8 from "/public/assets/images/nuevas home/4.jpg";
import img9 from "/public/assets/images/nuevas home/5.jpg";
import img10 from "/public/assets/images/nuevas home/impernew.jpg";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "2.jpg",
  },
  {
    color: "#d6d7dc",
    src: "3.jpg",
  },
  {
    color: "#e3e3e3",
    src: "4.jpg",
  },
  {
    color: "#21242b",
    src: "5.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "9.jpg",
  },
  {
    color: "#e5e0e1",
    src: "10.jpg",
  },
  {
    color: "#d7d4cf",
    src: "impernew.jpg",
  },
  {
    color: "#e1dad6",
    src: "van2.jpg",
  },
];

export default function Index() {

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


  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
       <CustomersSection>
          <CustomersContainer>
            <LoopSection>
              <div className="blocks">
                <div className="contents">
                  <span className="firstBlock">
                    <>
                      <Image src={img2} alt="img2" loading="eager" />

                      <Image src={img3} alt="img3" loading="eager" />

                      <Image
                        src={img4}
                        alt="img4"
                        style={{ width: "350px" }}
                        loading="eager"
                      />

                      <Image
                        src={img5}
                        alt="img4"
                        style={{ width: "450px" }}
                        loading="eager"
                      />
                      <Image
                        src={img1}
                        alt="img1"
                        style={{ width: "440px" }}
                        loading="eager"
                      />
                    </>
                  </span>
                  <span className="secondBlock">
                    <>
                      <Image src={img2} alt="img2" loading="eager" />

                      <Image src={img3} alt="img3" loading="eager" />

                      <Image
                        src={img4}
                        alt="img4"
                        style={{ width: "350px" }}
                        loading="eager"
                      />

                      <Image
                        src={img5}
                        alt="img4"
                        style={{ width: "450px" }}
                        loading="eager"
                      />
                      <Image
                        src={img1}
                        alt="img1"
                        style={{ width: "440px" }}
                        loading="eager"
                      />
                    </>
                  </span>
                </div>
              </div>
            </LoopSection>
          </CustomersContainer>
        </CustomersSection>
        <CustomersSection>
          <CustomersContainer>
            <LoopSection>
              <div className="blocks">
                <div className="contents">
                  <span className="thirdBlock">
                    {" "}
                    <>
                      <Image src={img6} alt="img1" loading="eager" />

                      <Image
                        src={img8}
                        alt="img3"
                        style={{ width: "320px" }}
                        loading="eager"
                      />

                      <Image src={img7} alt="img5" loading="eager" />
                      <Image
                        src={img10}
                        alt="img4"
                        style={{ width: "300px" }}
                        loading="eager"
                      />

                      <Image src={img9} alt="img2" loading="eager" />
                    </>
                  </span>
                  <span className="fourthBlock">
                    {" "}
                    <>
                      <Image src={img6} alt="img1" loading="eager" />

                      <Image
                        src={img8}
                        alt="img3"
                        style={{ width: "320px" }}
                        loading="eager"
                      />

                      <Image src={img7} alt="img5" loading="eager" />
                      <Image
                        src={img9}
                        alt="img4"
                        style={{ width: "300px" }}
                        loading="eager"
                      />

                      <Image src={img10} alt="img2" loading="eager" />
                    </>
                  </span>
                </div>
              </div>
            </LoopSection>
          </CustomersContainer>
        </CustomersSection>
      {/* <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
            //   style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/assets/images/home/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2, marginTop:"-50px" }} className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
            //   style={{ backgroundColor: project.color }}
            >
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/assets/images/home/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div> */}

      {width > 900 ? (<>
        <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
      </>) : (<>
      
      </>)}

    </div>
  );
}


const CustomersSection = styled.div`
  height: 350px;
  width: 100%;
  margin: auto;
  overflow: hidden;
  z-index: 30;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  max-width: 1600px;
`;

const CustomersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: auto;
  position: relative;

  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
  img {
    padding: 0 20px;
    height: 300px;
    width: 500px;
  }

  h2 {
    font-size: 400px;
    color: #5e5d5d;
    line-height: 90%;
    font-weight: 200;
    font-family: var(--font-bebasneue);
    letter-spacing: 3px;
  }
`;

const LoopSection = styled.div`
    position: relative;
  .blocks {
    left: 0px;
    height: auto;
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  /*remove p*/
  .contents {
    width: auto; /* Cambiado de 100% */
    margin: 0 auto;
    font-size: 30px;
    white-space: nowrap;
    display: flex; /* Agregado */
    /* animation: animation1 100s linear infinite; */
  }

  .firstBlock,
  .secondBlock {
    display: inline-block;
    padding-right: 0px; /* Agregado para separar los bloques */
    /* animation: animation1 100s linear infinite; */
    animation: animation1 90s linear infinite;
  }

  .thirdBlock,
  .fourthBlock {
    display: inline-block;
    animation: animation2 100s linear infinite;
  }
  /* scrolling-left is continuous/repeatly text */
  @keyframes animation1 {
    0%,
    100% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(
        -100%
      ); /* Cambiado a -100% para mover hacia la izquierda */
    }
  }

  @keyframes animation2 {
    0% {
      transform: translateX(0%);
      -webkit-transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%) !important;
      -webkit-transform: translateX(-100%);
    }
  }
`;
