import React from "react";
import styled from "styled-components";
import LoopReves from "./LoopReves";
import Image from "next/image";

import img1 from "../../public/assets/images/home/5.jpg";

import img2 from "../../public/assets/images/home/6.jpg";


import img3 from "../../public/assets/images/home/mujer gallo.jpg";

import img5 from "../../public/assets/images/home/9.jpg";

import img6 from "../../public/assets/images/home/10.jpg";
const Customers = () => {
  return (
    <CustomersSection >
      <CustomersContainer>
        <LoopReves
          item
          reverse="false"
          content={
            <>
              <Image src={img1} alt="img1" />

              <Image src={img2} alt="img2" />

              <Image src={img3} alt="img3" style={{width:"320px"}}/>

          
              <Image src={img5} alt="img5" />
              <Image src={img6} alt="img4" style={{width:"350px"}}/>
  
            </>
          }
        />

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
  margin-top: -10px;
margin-bottom: 12px;
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
`;

export default Customers;