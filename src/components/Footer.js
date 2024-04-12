import React from "react";
import { Section, Container, Text } from "../styles/styles";
import styled from "styled-components";
import Link from "next/link";

function Footer() {
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <TopContainer>
            <div>
              <h6>Contacto</h6>
              <FooterText>+54 11 5467 5902</FooterText>
              <FooterText>inesmiguensphoto@gmail.com</FooterText>
            </div>
            <div>
              <h6>Nav</h6>
              <Link href="/hoteles">
                <FooterText>HOTELES</FooterText>
              </Link>
              <Link href="/talleres">
                {" "}
                <FooterText>TALLERES</FooterText>{" "}
              </Link>
              <Link href="/trayectoria">
                {" "}
                <FooterText>TRAYECTORIA</FooterText>{" "}
              </Link>
              <Link href="/contacto">
                {" "}
                <FooterText>CONTACTO</FooterText>{" "}
              </Link>
            </div>
          </TopContainer>
          <BottomContainer>
            <div>
              <FooterText>©2024 Inés Miguens</FooterText>
              <FooterText>All rights reserved.</FooterText>
            </div>
          </BottomContainer>
        </FooterContainer>
      </FooterSection>
    </>
  );
}

export default Footer;

const FooterSection = styled.div`

height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  height: 300px;
  padding: 30px 0px 30px 0px;
`;

const FooterContainer = styled(Container)``;

const TopContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  div {
    display: flex;
    flex-direction: column;
    margin: 0px 50px;
  }

  h6{
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    color: grey;
    margin-bottom: 10px;

  }
`;

const BottomContainer = styled.div`
  height: 20%;
  width: 100%;

  justify-content: flex-start;
  div {
    display: flex;
    flex-direction: column;
  }
`;

const FooterText = styled(Text)`
  line-height: 30px;
  margin: 0;
  font-size: 14px;
`;
