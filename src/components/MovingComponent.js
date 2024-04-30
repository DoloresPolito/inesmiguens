import React from "react";
import styled from "styled-components";

import Image from "next/image";

import img1 from "../../public/assets/images/nuevas home/2.jpg";
import img2 from "../../public/assets/images/nuevas home/9.jpg";
import img3 from "../../public/assets/images/nuevas home/mujermasazul.jpg";
import img4 from "../../public/assets/images/nuevas home/10.jpg";
import img5 from "../../public/assets/images/nuevas home/3.jpg";

import img6 from "../../public/assets/images/nuevas home/van2.jpg";
import img7 from "../../public/assets/images/nuevas home/van3.jpg";
import img8 from "../../public/assets/images/nuevas home/4.jpg";
import img9 from "../../public/assets/images/nuevas home/5.jpg";
import img10 from "../../public/assets/images/nuevas home/impernew.jpg";

const Customers = () => {
  return (
    <>
  
      <CustomersSection>
        <CustomersContainer>


          <LoopSection>
            <div className="blocks">
              <div className="contents">
                <span className="firstBlock">
                  <>
                    <Image src={img2} alt="img2" loading="eager" />

                    <Image src={img3} alt="img3" loading="eager" />

                    <Image src={img4} alt="img4" style={{ width: "350px" }} loading="eager" />

                    <Image src={img5} alt="img4" style={{ width: "450px" }} loading="eager" />
                    <Image src={img1} alt="img1" style={{ width: "440px" }} loading="eager" />
                  </>
                </span>
                <span className="secondBlock">
                  <>
                    <Image src={img2} alt="img2" loading="eager" />

                    <Image src={img3} alt="img3" loading="eager" />

                    <Image src={img4} alt="img4" style={{ width: "350px" }} loading="eager" />

                    <Image src={img5} alt="img4" style={{ width: "450px" }} loading="eager" />
                    <Image src={img1} alt="img1" style={{ width: "440px" }} loading="eager" />
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
                    <Image src={img6} alt="img1" loading="eager"/>

                    <Image src={img8} alt="img3" style={{ width: "320px" }} loading="eager"/>

                    <Image src={img7} alt="img5" loading="eager"/>
                    <Image src={img10} alt="img4" style={{ width: "300px" }} loading="eager"/>

                    <Image src={img9} alt="img2" loading="eager"/>
                  </>
                </span>
                <span className="fourthBlock">
                  {" "}
                  <>
                    <Image src={img6} alt="img1" loading="eager"/>

                    <Image src={img8} alt="img3" style={{ width: "320px" }} loading="eager"/>

                    <Image src={img7} alt="img5" loading="eager"/>
                    <Image src={img9} alt="img4" style={{ width: "300px" }} loading="eager"/>

                    <Image src={img10} alt="img2" loading="eager"/>
                  </>
                </span>
              </div>
            </div>
          </LoopSection>
        </CustomersContainer>
      </CustomersSection>
    
    </>
  );
};

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

export default Customers;
