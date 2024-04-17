import React from "react";
import styled from "styled-components";
import Loop from "./Loop";

import img1 from "../assets/images/obras/voces de la tierra comp/0baja.jpg";
import img2 from "../../public/assets/images/obras/hijos del sol/baja2.jpg";

import img3 from "../assets/images/obras/voces de la tierra comp/0baja.jpg";
import img4 from "../../public/assets/images/obras/hijos del sol/baja2.jpg";
import img5 from "../assets/images/obras/voces de la tierra comp/0baja.jpg";
import img6 from "../../public/assets/images/obras/hijos del sol/baja2.jpg";

const Customers = () => {
  return (
    <CustomersSection>
      <CustomersContainer>
        <Loop
          reverse="true"
          content={
            <>
              <img src={img1} alt="fortnite" width={120} height={40} />
              <img src={img2} alt="crunchyroll" width={120} height={40} />

              <img src={img3} alt="freefire" width={120} height={40} />
              <img src={img4} alt="minecraft" width={120} height={40} />

              <img src={img5} alt="mobilelegends" width={120} height={40} />

              <img src={img6} alt="pubg" width={120} height={40} />
            </>
          }
        />
      </CustomersContainer>
    </CustomersSection>
  );
};

const CustomersSection = styled.div`
  height: 20vh;
  width: 100%;
  margin: auto;
  background: black;
  overflow: hidden;
  z-index: 30;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const CustomersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;

  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
  img {
    padding: 0 50px;
  }
`;

export default Customers;
