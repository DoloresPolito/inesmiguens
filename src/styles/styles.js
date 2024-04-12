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
  color: #4a4747;
  line-height: 90%;
  font-weight: 200;
`;





//obras
export const ObrasTitle = styled.h2`
  font-family: "Montserrat";
  font-size: 100px;
  color: #4a4747;
  line-height: 90%;
  font-weight: 200;
  align-self: flex-start;
  line-height: 90%;
  margin: 0;
  margin-right: 20px;

  @media screen and (max-width: 1100px) {
    line-height: 100%;
    font-size: 80px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 530px) {
    line-height: 100%;
    font-size: 60px;
    margin-bottom: 30px;
  }
`;

export const ObrasTopContainer = styled(Container)`
  margin-top: 130px;
  display: flex;
  flex-direction: row;
  margin-bottom: 80px;
  width: 93%;
  align-items: center;
  height: 500px;

  .left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f9f9f9;
    padding: 30px;

    @media screen and (max-width: 1100px) {
      width: 90%;
      height: 100%;
      align-self: flex-start;
      padding: 10px;
    }
  }
  .right {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center !important;
    justify-content: center;
    @media screen and (max-width: 1100px) {
      width: 100%;
      background-color: grey;
    }
  }

  @media screen and (max-width: 1100px) {
    margin-top: 100px;
    flex-direction: column;
    height: auto;

  }

  @media screen and (max-width: 530px) {
    margin-top: 80px;
  }
`;

export const ObrasText = styled.p`
  font-family: "Montserrat", sans-serif;
  color: black;
  font-size: 12px;
  line-height: 170%;
  max-width: 600px;
  letter-spacing: 0.5px;

  @media screen and (max-width: 530px) {
    font-size: 11px;
    line-height: 160%;
  }
`;
