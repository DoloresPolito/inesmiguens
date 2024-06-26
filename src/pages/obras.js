import React from "react";
import ObrasInside from "@/sections/Obras3";
import DisableContextMenu from "@/components/DisableContextMenu";
import { Section } from "../styles/styles";

function Obras() {
  return (
    <>
      <Section>
        <DisableContextMenu />
        <ObrasInside />
      </Section>
    </>
  );
}

export default Obras;
