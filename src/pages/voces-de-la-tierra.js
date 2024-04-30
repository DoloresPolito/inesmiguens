import React from "react";
import styled from "styled-components";
import {
  Section,
  ObrasTitle,
  ObrasText,
  ObrasTopContainer,
  PicturesContainer,
} from "../styles/styles";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import MoreBack from "@/components/MoreBack";
import img1 from "../../public/assets/images/obras/VOCES/1.jpg";
import img2 from "../../public/assets/images/obras/VOCES/2.jpg";
import img3 from "../../public/assets/images/obras/VOCES/3.jpg";
import img4 from "../../public/assets/images/obras/VOCES/4.jpg";
import img5 from "../../public/assets/images/obras/VOCES/5.jpg";
import img6 from "../../public/assets/images/obras/VOCES/6.jpg";
import img7 from "../../public/assets/images/obras/VOCES/7.jpg";
import img9 from "../../public/assets/images/obras/VOCES/9.jpg";
import img10 from "../../public/assets/images/obras/VOCES/10..jpg";
import img11 from "../../public/assets/images/obras/VOCES/11.jpg";
import img12 from "../../public/assets/images/obras/VOCES/12.jpg";
import img13 from "../../public/assets/images/obras/VOCES/13.jpg";
import { useInView } from "react-intersection-observer";
import AnimatedRowOf2 from "@/components/AnimatedRowOf2";
import AnimatedText from "@/components/AnimatedText";
import DisableContextMenu from "@/components/DisableContextMenu";

function Voces() {
  const variants = {
    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0.5,
      x: 50,
    },
  };

  return (
    <>
      <Section>
        <DisableContextMenu />
        <ObrasTopContainer>
          <div className="left">
            <AnimatedText>
              <ObrasTitle>Voces de la tierra</ObrasTitle>
            </AnimatedText>
            <AnimatedText>
              <div>
                <ObrasText>
                  “La canción de la tierra tiene voz de mujer”. <br />
                  Teresa Parodi.
                  <br />
                  <br />
                  Voces al latido de su tierra.
                  <br />
                  Voces que despiertan el arraigo y la memoria.
                </ObrasText>
                <MoreBack text="obras" link="/obras" />
              </div>
            </AnimatedText>
          </div>
          <motion.div
            className="right"
            variants={variants}
            initial="hidden"
            animate="visible"
          >
            <StyledImageCover src={img2} alt="image1" />
          </motion.div>
        </ObrasTopContainer>

        <ObrasBottomContainer>
          <PicturesContainer>
            <AnimatedRowOf2 image1={img4} image2={img3} />
            <AnimatedRowOf3Vertical image1={img7} image2={img6} image3={img5} />
            <AnimatedRowOf2 image1={img10} image2={img11} />
            <AnimatedRowOf2 image1={img9} image2={img13} />
            <AnimatedRowOf2 image1={img12} image2={img1} />
          </PicturesContainer>
        </ObrasBottomContainer>
      </Section>
    </>
  );
}

const RowOf3Vertical = ({ image1, image2, image3 }) => {
  return (
    <>
      <Row3VerticalContainer>
        <StyledImageVertical src={image1} alt="image1" />
        <StyledImageVertical src={image2} alt="image1" />
        <StyledImageVertical src={image3} alt="image1" />
      </Row3VerticalContainer>
    </>
  );
};

const AnimatedRowOf3Vertical = ({ image1, image2, image3 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <RowOf3Vertical image1={image1} image2={image2} image3={image3} />
    </motion.div>
  );
};

const StyledImageCover = styled(Image)`
  width: 500px;
  height: 500px;
  object-fit: cover;

  @media screen and (max-width: 1100px) {
    margin-bottom: 0px;
  }
`;

const ObrasBottomContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  margin-top: 30px;
  margin-bottom: 80px;
  @media screen and (max-width: 1190px) {
    width: 93%;
    margin-top: -30px;
    margin-bottom: 50px;
  }
`;

const Row3VerticalContainer = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 30px;

  @media screen and (max-width: 1190px) {
    flex-direction: column;
    height: auto;
    margin-top: -60px;
    gap: 0px;
    margin-bottom: 20px;
  }
`;
const StyledImageVertical = styled(Image)`
  height: auto;
  width: 32%;
  object-fit: cover;

  @media screen and (max-width: 1190px) {
    object-fit: cover;
    width: 100%;
    height: auto;
    padding: 10px 0px;
  }
  @media screen and (max-width: 750px) {
    width: 100%;
    height: auto;
  }
`;

export default Voces;
