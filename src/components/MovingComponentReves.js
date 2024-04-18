import React from "react";
import styled from "styled-components";
import LoopReves from "./LoopReves";
import Image from "next/image";
import img1 from "../../public/assets/images/obras/voces de la tierra comp/0baja.jpg";
import img2 from "../../public/assets/images/obras/hijos del sol/baja1.jpg";

import img3 from "../../public/assets/images/obras/ecos en el tiempo comp/baja 7.jpg";
import img4 from "../../public/assets/images/obras/ecos en el tiempo comp/baja3.jpg";
import img5 from "../../public/assets/images/obras/ecos en el tiempo comp/baja6.jpg";
import img6 from "../../public/assets/images/obras/ecos en el tiempo comp/baja10.jpg";

const Customers = () => {
  return (
    <CustomersSection >
      <CustomersContainer>
        <LoopReves
          item
          reverse="false"
          content={
            <>
              <Image src={img3} alt="fortnite" />

              <Image src={img2} alt="crunchyroll" />

              <Image src={img6} alt="freefire" />

              <Image src={img4} alt="minecraft" />

              <Image src={img2} alt="mobilelegends" />

              <Image src={img3} alt="pubg" />
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

  /* margin-top: 30px; */
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
`;

export default Customers;