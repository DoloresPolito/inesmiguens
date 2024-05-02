import React from "react";
import { Container, Text } from "../styles/styles";
import styled from "styled-components";
import Link from "next/link";

function NewFooter() {
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <div className="rights">
            <FooterText>© 2024 Inés Miguens | All rights reserved.</FooterText>
            {/* <FooterText>All rights reserved.</FooterText> */}
          </div>

          <div className="contact">
            <h6>Contacto</h6>
            <div className="info">
              <Link href="mailto:inesmiguensphoto@gmail.com" target="_blank">
                <FooterText>inesmiguensphoto@gmail.com</FooterText>
              </Link>

              <Link
                href="https://www.instagram.com/inesmiguensphoto/"
                target="_blank"
              >
                <FooterText>@inesmiguensphoto</FooterText>
              </Link>
            </div>
          </div>
        </FooterContainer>
      </FooterSection>
    </>
  );
}

export default NewFooter;

const FooterSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  height: 200px;
  margin-top: 80px;

  @media screen and (max-width: 800px) {
    padding-top: 80px;
    height: auto;
  }
`;

const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  padding-right: 30px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }

  .rights {
    display: flex;
    flex-wrap: wrap;
    padding: 0px 30px;
    @media screen and (max-width: 700px) {
      padding: 0px 0px;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 700px) {
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  h6 {
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    color: grey;
    margin-bottom: 10px;
  }
`;

const FooterText = styled(Text)`
  line-height: 30px;
  margin: 0;
  font-size: 14px;
  color: #4a4747;
`;
