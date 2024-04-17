import React from "react";

import styled from "styled-components";
import Image from "next/image";


const RowOf2 = ({ image1, image2 }) => {
    return (
      <>
        <Row2Container>
          <StyledImage src={image1} alt="image1" />
          <StyledImage src={image2} alt="image1" />
        </Row2Container>
      </>
    );
  };


  const Row2Container = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 25px;


  @media screen and (max-width: 1190px) {
    flex-direction: column;
    height: auto;
    margin-top: -60px;
    gap: 0px;
    margin-top: 0px;

  }
`;

const StyledImage = styled(Image)`
  height: 380px;
  width: 49%;
  object-fit: cover;

  @media screen and (max-width: 1190px) {
    object-fit: cover;
    width: 100%;
    height: 600px;
    padding-bottom: 30px;

  }
  @media screen and (max-width: 750px) {
    width: 100%;
    height: auto;
  }
`;




  export default RowOf2;