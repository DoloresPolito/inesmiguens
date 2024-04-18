import styled from "styled-components";



export const Section = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  /* min-height: 100vh; */
  @media screen and (max-width: 700px) {
    margin-top: 30px;
  }
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

  font-size: 60px;
  color: #4a4747;
  line-height: 90%;
  font-weight: 200;
  font-family: "Bebas Neue", sans-serif;
`;





//obras
export const ObrasTitle = styled.h2`
  /* font-family: "Montserrat"; */

  font-family: "Bebas Neue";
  font-style: normal;
  font-size: 60px !important;
  color: #4a4747;
  line-height: 90%;
  align-self: flex-start;
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
    height: 90%;
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
      margin-bottom: 30px;
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

      img{
        width: 100%;
      }

    }
  }

  @media screen and (max-width: 1100px) {
    margin-top: 100px;
    flex-direction: column;
    height: auto;
    margin-bottom: 0px;

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
  max-width: 500px;
  letter-spacing: 0.5px;
  margin-bottom: 30px;

  @media screen and (max-width: 530px) {
    font-size: 11px;
    line-height: 160%;
  }
`;



//hoteles

export const HotelesContainer = styled(Container)`
  height: auto;
  margin-top: 110px;
  width: 90%;

`;


export const PicturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  max-width: 1600px;
  margin: 0 auto;

  @media screen and (max-width: 1190px) {
    margin-top: 90px;
  }
`;



export const HotelSubtitle = styled.h4`
  margin: 0;
  font-family: "Montserrat";
  font-size: 23px;
  color: #4a4747;
  line-height: 130%;
  font-weight: 400;
  max-width: 200px;
  letter-spacing: 0.5px;
  margin-top: 5px;
`;

export const HotelText = styled.h5`
  margin: 0;
  font-family: "Montserrat";
  font-size: 16px;
  color: #4a4747;
  line-height: 130%;
  font-weight: 300;
  max-width: 200px;
`;