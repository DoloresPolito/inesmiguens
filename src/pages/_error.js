import React from "react";
import styled from "styled-components";
import { Section, Container, ObrasTitle, ObrasText } from "../styles/styles";
import Obras from "./obras";

function Error() {
  return (
    <>
      <ErrorSection>
        <ErrorContainer>
          <ErrorTitle>PAGINA NO ENCONTRADA</ErrorTitle>
          <ObrasText>
          Parece que no se ha encontrado nada en esta ubicación.
          </ObrasText>
        </ErrorContainer>
      </ErrorSection>
    </>
  );
}

const ErrorSection = styled(Section)`
  height: 100vh;
`;

const ErrorTitle = styled(ObrasTitle)`
  align-self: center;
`
const ErrorContainer = styled(Container)`
display: flex;
flex-direction: column;
margin: 0 auto;
align-items: center;
justify-content: center;
margin-top: -80px;

`

export default Error;
