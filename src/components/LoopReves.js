import React from 'react';
import styled from 'styled-components';

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

  .contents {
    width: 100%;
    margin: 0 auto;
    font-size: 30px;
    white-space: nowrap;
  }

  .firstBlock {
    display: inline-block;
    animation: animation1 60s linear infinite;
    animation-direction: ${props => (props.reverse ? 'normal' : 'reverse')};
  }

  .secondBlock {
    display: inline-block;
    animation: animation2 60s linear infinite;
    animation-direction: ${props => (props.reverse ? 'normal' : 'reverse')};
  }

  @keyframes animation1 {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes animation2 {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-200%);
    }
  }
`;

export default Loop;