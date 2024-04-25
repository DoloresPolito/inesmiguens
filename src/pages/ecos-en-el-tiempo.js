import React from "react";
import styled from "styled-components";
import {
  Section,
  ObrasTitle,
  ObrasText,
  ObrasTopContainer,
  PicturesContainer,
} from "../styles/styles";

import { motion } from "framer-motion";

import MoreBack from "@/components/MoreBack";
import Image from "next/image";
import img1 from "../../public/assets/images/obras/ECOS/1.jpg";
import img2 from "../../public/assets/images/obras/ECOS/2.jpg";
import img3 from "../../public/assets/images/obras/ECOS/3.jpg";
import img4 from "../../public/assets/images/obras/ECOS/4.jpg";
// import img5 from "../../public/assets/images/obras/ECOS/5.jpg";
import img6 from "../../public/assets/images/obras/ECOS/12.jpg";
import img7 from "../../public/assets/images/obras/ECOS/7.jpg";
import img8 from "../../public/assets/images/obras/ECOS/8.jpg";
import img9 from "../../public/assets/images/obras/ECOS/9.jpg";
import img10 from "../../public/assets/images/obras/ECOS/10.jpg";

import DisableContextMenu from "@/components/DisableContextMenu";
import AnimatedRowOf2 from "@/components/AnimatedRowOf2";
import AnimatedText from "@/components/AnimatedText";

function Ecos() {
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
      <VocesSection>
      <DisableContextMenu />
        <ObrasTopContainer>
          <div className="left">
            <AnimatedText>
            <ObrasTitle>ECOS EN EL TIEMPO</ObrasTitle>
            </AnimatedText>
           
           <AnimatedText>
           <div>
              <ObrasText>
                La ciudad se convierte en un mar de fugaces  y fantasmagóricos
                encuentros, en la que se desvanece la posibilidad de la
                percepción de los otros, prácticamente invisibles, incorpóreos.
                 Una geometría que dibuja en el asfalto el vértigo del tiempo,
                preñado de destiempo y expatriado de toda permanencia. Su cruce
                demora apenas un minuto que es la cifra de la celeridad en la
                que vivimos.
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
            <StyledImageCover src={img1} alt="image1" />
          </motion.div>
        </ObrasTopContainer>
        <ObrasBottomContainer>
          <PicturesContainer>
            <AnimatedRowOf2 image1={img2} image2={img3} />
            <AnimatedRowOf2 image1={img6} image2={img7} />
            {/* <RowOf1 /> */}
            <AnimatedRowOf2 image1={img4} image2={img8} />
            <AnimatedRowOf2 image1={img9} image2={img10} />
          </PicturesContainer>
        </ObrasBottomContainer>
      </VocesSection>
    </>
  );
}

// const RowOf1 = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, inView]);
//   return (
//     <>
//       <Row1Container ref={ref}>
//         <StyledImage
//           src={img7}
//           alt="image1"
//           custom={0}
//           animate={controls}
//           initial="hidden"
//         />
//       </Row1Container>
//     </>
//   );
// };

const VocesSection = styled(Section)`
  height: auto;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 90%;
  object-fit: cover;
`;

const StyledImageCover = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 950px) {
  }
`;

const Row1Container = styled.div`
  height: 380px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ObrasBottomContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  margin-top: 30px;
  margin-bottom: 80px;
  @media screen and (max-width: 1190px) {
    width: 93%;
    margin-top: 0px !important;
  }
`;

const NewTitle = styled.h2`
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
`;
export default Ecos;
