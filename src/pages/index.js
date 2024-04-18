import React from "react";
import DisableContextMenu from "@/components/DisableContextMenu";
import MovingComponent from "@/components/MovingComponent";
import styled from "styled-components";
import MovingComponentReves from "@/components/MovingComponentReves";

function Home() {
  return (
    <>
      <DisableContextMenu />
      <IndexContainer>
        <MovingComponent />
        <MovingComponentReves />
      </IndexContainer>
    </>
  );
}

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 60px;
  @media only screen and (max-width: 1200px) {
    margin-top: 100px;
  }
`;

export default Home;
