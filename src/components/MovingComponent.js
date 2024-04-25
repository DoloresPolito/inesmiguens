import React from "react";
import styled from "styled-components";
import Loop from "./Loop";

import Image from "next/image";

import img1 from "../../public/assets/images/home/1.jpg";
import img2 from "../../public/assets/images/home/2.jpg";
import img3 from "../../public/assets/images/home/3.jpg";
import img4 from "../../public/assets/images/home/4.jpg";
import img5 from "../../public/assets/images/home/mujer flores.jpg";


const Customers = () => {
  return (
    <CustomersSection >
      <CustomersContainer>
        <Loop
          item
          reverse="true"
          content={
            <>
              <Image src={img1} alt="img1" />

              <Image src={img2} alt="img2" />

              <Image src={img3} alt="img3" />

              <Image src={img4} alt="img4" style={{width:"350px"}}/>

              <Image src={img5} alt="img4" style={{width:"450px"}}/>

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

  h2{  font-size: 400px;
  color: #5e5d5d;
  line-height: 90%;
  font-weight: 200;
  font-family: var(--font-bebasneue);
  letter-spacing: 3px;

  }
`;

export default Customers;
