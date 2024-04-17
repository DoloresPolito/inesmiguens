import React from "react";
import styled from "styled-components";
import Image from "next/image";
import arrow1 from "../../public/assets/icons/arrow1.svg";
import Link from "next/link"

function More({ text, link }) {
  return (
    <>
      {link ? (
        <>
          <Link href={link}>
            <SectionLinks>
            <Image src={arrow1} alt="arrow" />
              <h6>{text}</h6>
      
            </SectionLinks>
          </Link>
        </>
      ) : (
        <>
          <SectionLinks>
            <h6>{text}</h6>
            <Image src={arrow1} alt="arrow" />
          </SectionLinks>
        </>
      )}
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
    font-size: 12px;
    margin-right: 5px;
  }

  img {
    height: 10px;
    width: 010px;
    margin-right: 5px;
  }
`;
export default More;
