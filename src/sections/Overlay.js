import React from "react";
import styled from "styled-components";
import img1a from "../../public/assets/images/hoteles/principal/1.jpg";
import Image from "next/image";


const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  /* height: 50%; */
  z-index: -1;
`;

const Content = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  margin: 100vh 0; /* Ajusta el espacio para que el contenido no se superponga con la imagen */

  height: 800px;
  width: 100%;
  z-index: 1000;
  position: absolute;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const OverlaySection = () => {
  return (
    <>
      <Container>
      <StyledImage src={img1a} alt="Background"/>
      </Container>
      <Content>
          <Text>Contenido que pasa por encima de la imagen</Text>
       
        </Content>

    </>
  );
};

export default OverlaySection;
