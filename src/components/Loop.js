import React from "react";
import styled from "styled-components";

const Loop = ({ content, reverse }) => (
  <LoopSection reverse={reverse}>
    <div className="blocks">
      <div className="contents">
        <span className="firstBlock">{content}</span>
        <span className="secondBlock">{content}</span>
      </div>
    </div>
  </LoopSection>
);

const LoopSection = styled.div`
  .blocks {
    left: 0px;
    height: auto;
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  /*remove p*/
  .contents {
    width: auto; /* Cambiado de 100% */
    margin: 0 auto;
    font-size: 30px;
    white-space: nowrap;
    display: flex; /* Agregado */
    /* animation: animation1 100s linear infinite; */
  }

  .firstBlock, .secondBlock {
    display: inline-block;
    padding-right: 20px; /* Agregado para separar los bloques */
    /* animation: animation1 100s linear infinite; */
    animation: animation1 100s linear infinite;
  }
  /* scrolling-left is continuous/repeatly text */
  @keyframes animation1 {
    0%, 100% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%); /* Cambiado a -100% para mover hacia la izquierda */
    }
  }
`;

export default Loop;
