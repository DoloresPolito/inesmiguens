import styled from "styled-components";

export const Section = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  @media screen and (max-width: 1200px) {
    margin-top: 80px;
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
  margin-top: -40px;
`;

export const Text = styled.p`
  font-family: var(--font-montserrat);
  font-size: 13px;
  color: #000000;
  transition: 0.25s color;
  font-weight: 400;
`;

export const SectionTitle = styled.h2`
  font-size: 55px;
  color: #5e5d5d;
  line-height: 90%;
  font-weight: 100 !important;
  font-family: var(--font-bebasneue);
  letter-spacing: 1px;
  margin-top: 70px;

`;

//obras
export const ObrasTitle = styled.h2`
  font-family: var(--font-bebasneue);
  font-style: normal;
  font-size: 60px !important;
  color: #5e5d5d;
  line-height: 90%;
  align-self: flex-start;
  margin: 0;
  margin-right: 20px;
  font-weight: 100;

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
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  margin-bottom: 60px;
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
      width: 92%;
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
    /* margin-bottom: 20px; */
    @media screen and (max-width: 1100px) {
      width: 100%;
      margin-bottom: 60px;
      img {
        width: 100%;
      }
    }

 
  }

  @media screen and (max-width: 1100px) {
    margin-top: 50px;
    flex-direction: column;
    height: auto;
    margin-bottom: 0px;
  }


`;

export const ObrasText = styled.p`
  font-family: var(--font-montserrat);
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
  margin-top: 40px;
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


`;

export const HotelSubtitle = styled.h4`
  margin: 0;
  font-family: var(--font-montserrat);
  font-size: 23px;
  color: #4a4747;
  line-height: 130%;
  font-weight: 400;
  max-width: 400px;
  letter-spacing: 0.5px;
  margin-top: 5px;
`;

export const HotelText = styled.h5`
  margin: 0;
  font-family: var(--font-montserrat);
  font-size: 16px;
  color: #4a4747;
  line-height: 130%;
  font-weight: 300;
  max-width: 200px;
  margin-bottom: 10px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
