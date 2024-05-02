import React from "react";
import TravelAndWorkshopsSection from "@/sections/TravelNew";
import DisableContextMenu from "@/components/DisableContextMenu";
import { Section } from "../styles/styles";

function TravelAndWorkshops() {
  return (
    <>
      <Section>
        <DisableContextMenu />
        <TravelAndWorkshopsSection />
      </Section>
    </>
  );
}

export default TravelAndWorkshops;



