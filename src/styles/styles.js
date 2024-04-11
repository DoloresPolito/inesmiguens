import styled from "styled-components";

export const Section = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  min-height: 100vh;

`;

export const Container = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1600px;
  margin: 0 auto;
`;

export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  color: #000000;
  transition: 0.25s color;
  font-weight: 400;
  /* line-height: 30px;
  margin: 0; */
`;



export const Title = styled.h2`
    font-family: "Montserrat";
    font-size: 80px;
    color: #4A4747;
    line-height: 90%;
    font-weight: 200;
`;