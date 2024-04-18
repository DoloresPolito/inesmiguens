import React from "react";
import styled from "styled-components";
import Image from "next/image";
import arrow2 from "../../public/assets/icons/arrow2.svg";
import Link from "next/link"

function More({ text, link }) {
  return (
    <>
      {link ? (
        <>
          <Link href={link}>
            <SectionLinks>
              <h6>{text}</h6>
              <Image src={arrow2} alt="arrow" />
            </SectionLinks>
          </Link>
        </>
      ) : (
        <>
          <SectionLinks>
            <h6>{text}</h6>
            <Image src={arrow2} alt="arrow" />
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
    font-family: var(--font-montserrat);
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
