import React from "react";
import styled from "styled-components";
// import Loop from "./Loop";

import Image from "next/image";

import img1 from "../../public/assets/images/nuevas home/2.jpg";
import img2 from "../../public/assets/images/nuevas home/9.jpg";
import img3 from "../../public/assets/images/nuevas home/mujermasazul.jpg";
import img4 from "../../public/assets/images/nuevas home/10.jpg";
import img5 from "../../public/assets/images/nuevas home/3.jpg";

const Customers = () => {
  return (
    <CustomersSection>
      <CustomersContainer>
        {/* <Loop
          item
          reverse="true"
          content={
            <>
             

              <Image src={img2} alt="img2" />

              <Image src={img3} alt="img3" />

              <Image src={img4} alt="img4" style={{width:"350px"}}/>

              <Image src={img5} alt="img4" style={{width:"450px"}}/>
              <Image src={img1} alt="img1"style={{width:"440px"}}/>
            </>
          }
        /> */}

        <LoopSection>
          <div className="blocks">
            <div className="contents">
              <span className="firstBlock">
                <>
                  <Image src={img2} alt="img2" />

                  <Image src={img3} alt="img3" />

                  <Image src={img4} alt="img4" style={{ width: "350px" }} />

                  <Image src={img5} alt="img4" style={{ width: "450px" }} />
                  <Image src={img1} alt="img1" style={{ width: "440px" }} />
                </>
              </span>
              <span className="secondBlock">
                <>
                  <Image src={img2} alt="img2" />

                  <Image src={img3} alt="img3" />

                  <Image src={img4} alt="img4" style={{ width: "350px" }} />

                  <Image src={img5} alt="img4" style={{ width: "450px" }} />
                  <Image src={img1} alt="img1" style={{ width: "440px" }} />
                </>
              </span>
            </div>
          </div>
        </LoopSection>
      </CustomersContainer>
    </CustomersSection>
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
`;

export default Customers;
