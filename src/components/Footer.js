import React from "react";
import { Container, Text } from "../styles/styles";
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
              <Link href="https://api.whatsapp.com/send/?phone=541154675902" target="_blank">

              <FooterText>+54 11 5467 5902</FooterText>
              </Link>
          <Link href="mailto:inesmiguensphoto@gmail.com" target="_blank">
          <FooterText>inesmiguensphoto@gmail.com</FooterText>
          </Link>

          <Link href="https://www.instagram.com/inesmiguensphoto/" target="_blank">
          <FooterText>@inesmiguensphoto</FooterText>
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


  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  height: 150px;
  padding: 30px 0px 30px 0px;

  @media screen and (max-width: 700px) {
    height: auto;
  }
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
    justify-content: center;
    align-items: center;
  }

  h6{
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    color: grey;
    margin-bottom: 10px;

  }

  @media screen and (max-width: 700px) {
    justify-content: center;
  }
`;

const BottomContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  @media screen and (max-width: 700px) {
    justify-content: center;
    margin-top: 50px;
  }


  div {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 700px) {
align-items: center;
  }

  }
`;

const FooterText = styled(Text)`
  line-height: 30px;
  margin: 0;
  font-size: 14px;
`;
