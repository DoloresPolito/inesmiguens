import React from "react";
import LibrosSection from "@/sections/Libros";

import DisableContextMenu from "@/components/DisableContextMenu";
import { Section } from "../styles/styles";
function Libros() {
  return (
    <>
      <Section>
        <DisableContextMenu />
        <LibrosSection />
      </Section>
    </>
  );
}

export default Libros;
