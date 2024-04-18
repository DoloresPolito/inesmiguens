import React from "react";
import { Section } from "../styles/styles";
import HotelesInside from "@/sections/HotelesInside";
import styled from "styled-components";
function Hoteles() {
  return (
    <>

      <HotelesSection>
        <HotelesInside />
      </HotelesSection>
    </>
  );
}

const HotelesSection = styled(Section)``;

export default Hoteles;
