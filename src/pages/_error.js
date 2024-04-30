import React from "react";
import styled from "styled-components";
import { Section, Container, ObrasTitle, ObrasText } from "../styles/styles";

function Error() {
  return (
    <>
      <ErrorSection>
        <ErrorContainer>
          <ObrasTitle>PAGINA NO ENCONTRADA</ObrasTitle>
        </ErrorContainer>
      </ErrorSection>
    </>
  );
}

const ErrorSection = styled(Section)`
  height: 100vh;
`;

const ErrorContainer = styled(Container)`
display: flex;
flex-direction: column;
margin: 0 auto;
margin-top: 100px;

`

export default Error;
