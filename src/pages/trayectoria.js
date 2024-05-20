import React from "react";
import TrayectoriaSection from "@/sections/Trayectoria";
import DisableContextMenu from "@/components/DisableContextMenu";
import { Section } from "../styles/styles";

function Libros() {
  return (
    <>
      <Section>
        <DisableContextMenu />
        <TrayectoriaSection />
      </Section>
    </>
  );
}

export default Libros;
