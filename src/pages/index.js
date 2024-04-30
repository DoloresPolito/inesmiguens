import React from "react";
import DisableContextMenu from "@/components/DisableContextMenu";
import MovingComponent from "@/components/MovingComponent";
import styled from "styled-components";
// import MovingComponentReves from "@/components/MovingComponentReves";
import {motion} from "framer-motion"

function Home() {
  return (
    <>
      <DisableContextMenu />
      <IndexContainerAnimated
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 0.1,
              }}
      >
        <MovingComponent />
        {/* <MovingComponentReves /> */}
      </IndexContainerAnimated>
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

const IndexContainerAnimated = motion(IndexContainer);

export default Home;
