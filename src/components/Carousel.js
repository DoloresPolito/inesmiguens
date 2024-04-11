import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import picture1 from "../../public/assets/images/profile/profile.jpeg";

function Cover() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 1));
  };

  const items = [
    { id: 1, nombre: "Salar de Uyuni", imagen: "picture1" },
    { id: 2, nombre: "Africa", imagen: "picture2" },
    { id: 3, nombre: "India", imagen: "picture3" },
    { id: 4, nombre: "Salar de Uyuni", imagen: "picture3" },
    { id: 5, nombre: "Africa", imagen: "picture3" },
    { id: 6, nombre: "India", imagen: "picture3" },
  ];
  return (
    <>
      <CarouselContainer>
        <Top>
          <CarouselCon>
            <CarouselTrack
              style={{
                transform: `translateX(-${currentIndex * (100 / 1)}%)`,
              }}
            >
              {items.map((item, index) => (
                <CarouselItem key={index}>
                  <Image src={picture1} alt="picture" />
                  <div>
                    <p>{item.nombre}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselTrack>
          </CarouselCon>
        </Top>
        <Bottom>
          <div>
            <ArrowContainer>
              <div className="arrows-container">
                {/* <Image
                      src={leftcarousel}
                      alt="leftcarousel"
                      onClick={handlePrev}
                      direction="prev"
                    />
               

                    <Image
                      src={rightcarousel}
                      alt="rightcarousel"
                      onClick={handleNext}
                      direction="next"
                      style={{ marginLeft: "5px" }}
                    /> */}
                <p onClick={handlePrev} direction="prev">
                  left
                </p>
                <p onClick={handleNext} direction="next">
                  right
                </p>
              </div>
              <Scrollbar>
                <ScrollbarIndicator
                  width={((currentIndex + 1) / items.length) * 100}
                />
              </Scrollbar>
            </ArrowContainer>
          </div>
        </Bottom>
      </CarouselContainer>
    </>
  );
}

const CarouselContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 40px;

`;

const Bottom = styled.div`
  height: 90%;
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  justify-content: space-between;

  p {
    font-family: "Montserrat", sans-serif;
    color: #000000;
  }
`;

const Top = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;

  p {
    font-family: "Montserrat", sans-serif;
    color: #000000;
  }
`;

const CarouselCon = styled.div`
  width: 500px;
  overflow: hidden;

  width: 100%;

  img {
    width: 500px;
    height: 500px;
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 1s ease !important;
`;

const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 150px;

  div {
  }

  img {
    padding: 5px;
  }
  h6 {
    margin-top: 10px;
    font-family: "Roboto", sans-serif;
    color: #182e50;
    font-size: 18px;
    font-weight: 400;
    margin-left: 30px;
  }
`;

const ArrowContainer = styled.div`
  width: 50%;
  position: relative;
  z-index: 10;

  .arrows-container{
    display: flex;
    width: 100px;
    justify-content: space-between;
  }

`;

const Scrollbar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #ccc;
  margin-top: 5px;
`;

const ScrollbarIndicator = styled.div`
  width: ${(props) => props.width}%;
  height: 100%;
  background-color: #000000;
  transition: width 0.5s ease;
`;

export default Cover;
