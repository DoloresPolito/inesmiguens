import React from 'react'
import styled from 'styled-components'

const Loop = ({ content, reverse }) => (
  <LoopSection reverse={reverse}>
    <div className="blocks">
      <div className="contents">
        <span className="firstBlock">{content}</span>
        <span className="secondBlock">{content}</span>
      </div>
    </div>
  </LoopSection>
)

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
    width: 100%;
    margin: 0 auto;
    font-size: 30px;
    white-space: nowrap;
  }

  .firstBlock {
    display: inline-block;
    animation: animation1 30s linear infinite;
    animation-direction: ${props => (props.reverse ? 'reverse' : 'normal')};
  }

  .secondBlock {
    display: inline-block;
    animation: animation2 30s linear infinite;
    animation-direction: ${props => (props.reverse ? 'reverse' : 'normal')};
  }
  /* scrolling-left is continuous/repeatly text */
  @keyframes animation1 {
    0% {
      transform: translateX(0%);
      -webkit-transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
    }
  }
  @keyframes animation2 {
    0% {
      transform: translateX(100%);
      -webkit-transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
    }
  }
`

export default Loop