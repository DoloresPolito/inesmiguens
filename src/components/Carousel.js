import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import picture1 from "../../public/assets/images/talleres/13.jpeg";
import picture2 from "../../public/assets/images/talleres/9.jpeg";
import picture3 from "../../public/assets/images/talleres/3.jpeg";
import picture4 from "../../public/assets/images/talleres/1.jpeg";
import arrow1 from "../../public/assets/icons/arrow1.svg";
import arrow2 from "../../public/assets/icons/arrow2.svg";
function Cover() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 1));
  };

  const items = [
    { id: 1, nombre: "Salar de Uyuni", imagen: picture1},
    { id: 2, nombre: "Africa", imagen: picture2 },
    { id: 3, nombre: "India", imagen: picture3 },
    { id: 4, nombre: "Salar de Uyuni", imagen: picture4 },

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
                  <Image src={item.imagen} alt="picture" />
                  {/* <div>
                    <p>{item.nombre}</p>
                  </div> */}
                </CarouselItem>
              ))}
            </CarouselTrack>
          </CarouselCon>
        </Top>
        <Bottom>
          <div>
            <ArrowContainer>
              <div className="arrows-container">
                <Image
                      src={arrow1}
                      alt="leftcarousel"
                      onClick={handlePrev}
                      direction="prev"
                    />
               

                    <Image
                      src={arrow2}
                      alt="rightcarousel"
                      onClick={handleNext}
                      direction="next"
                      style={{ marginLeft: "5px" }}
                    />
        
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
  height: 500px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;

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
  width: 100%;
  overflow: hidden;

  img {
    width: 700px;
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
    margin-top: 30px;
    margin-bottom: 20px;
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
