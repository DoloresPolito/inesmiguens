import React from "react";
import styled from "styled-components";
import Image from "next/image";
import arrow from "../../public/assets/icons/small-black.svg";

function More() {
  return (
    <>
        <SectionLinks>
          <h6>ver más</h6>
          <Image src={arrow} alt="arrow" />
        </SectionLinks>
 
    </>
  );
}

const SectionLinks = styled.div`
  display: inline-flex;
  align-items: center;
  height: 20px;
  border-bottom: 0.8px solid black;

  h6 {
    font-family: "Montserrat";
    color: #4a4747;
    font-size: 11px;
    margin-right: 5px;
  }

  img {
    height: 8px;
    width: 15px;
  }
`;
export default More;
