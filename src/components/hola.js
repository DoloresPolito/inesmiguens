import React from "react";
import styled from "styled-components";
import Image from "next/image";
import impermanencia from "../../public/assets/images/obras/impermanencia comp/1 baja.jpg";
import ecos from "../../public/assets/images/obras/ecos en el tiempo comp/baja 1.jpg";
import voces from "../../public/assets/images/obras/voces de la tierra comp/1baja.jpg";

function Obras() {
  return (
    <ObrasSection>
      <ObrasContainer3>
        <div>
        <StyledImage src={impermanencia} alt="impermanencia" />
        </div>
        <div>
        <StyledImage src={ecos} alt="ecos" />
        </div>
        <div>
        <StyledImage src={voces} alt="voces" />
        </div>
        <div></div>
      </ObrasContainer3>
    </ObrasSection>
  );
}

const ObrasSection = styled.section`
  /* height: calc(100vh - 60px); */
  height: auto;
  margin-top: 0px;
`;




const ObrasContainer3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2%;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  div {
    background-color: #eeeeee;
    width: 48%;
    height: auto;
    margin: 5px 5px;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Obras;
