import React from "react";
import styled from "styled-components";
import Image from "next/image";
import impermanencia1 from "../../public/assets/images/obras/impermanencia jpg reduce comp/1.jpg";
import impermanencia2 from "../../public/assets/images/obras/impermanencia jpg reduce comp/2.jpg";

import vanishing1 from "../../public/assets/images/obras/vanishing jpg reduce comp/1.jpg";
import vanishing2 from "../../public/assets/images/obras/vanishing jpg reduce comp/2.jpg";

import voces from "../../public/assets/images/obras/voces de la tierra comp/6baja.jpg";
import voces2 from "../../public/assets/images/obras/voces de la tierra comp/0baja.jpg";

import ecos from "../../public/assets/images/obras/ecos jpg reduce/estabaja6a.jpg";
import { Section, Container, Title } from "../styles/styles";
import Link from "next/link";
import More from "@/components/More";

function ObrasSection() {
  return (
    <ObrasSectionContainer>
      <ObrasContainer>
        <ObrasTitle>obras</ObrasTitle>

        <VocesContainer>
          <div className="left">
            <Image src={voces} alt="voces1" />
          </div>
          <div className="right">
            <Image src={voces2} alt="voces2" />
            <Link href="/voces-de-la-tierra">
              <div>
                <ObrasSubtitle>voces de la tierra</ObrasSubtitle>

                <More text="ver más" />
              </div>
            </Link>
          </div>
        </VocesContainer>

        <VanishingContainer>
          <div className="left">
            <Image src={vanishing2} alt="vanishing" />
            <Link href="/vanishing">
              <div>
                <ObrasSubtitle>vanishing landscapes</ObrasSubtitle>

                <More text="ver más" />
              </div>
            </Link>
          </div>

          <div className="right">
            <Image src={vanishing1} alt="impermanencia" />
          </div>
        </VanishingContainer>
        <Link href="/impermanencia">
        <ImpermanenciaContainer>
          <div className="top">
            <Image src={impermanencia1} alt="impermanencia" />
            <Image src={impermanencia2} alt="impermanencia" />
          </div>

          <div className="bottom">
         
              <div>
                <ObrasSubtitle>impermanencia</ObrasSubtitle>
  
                <More text="ver más" />
              </div>
        
          </div>
        </ImpermanenciaContainer>

        </Link>

        

        <EcosContainer>
          <div className="top">
            <Image src={ecos} alt="ecos" />
          </div>

          <div className="bottom">
            <Link href="/ecos-en-el-tiempo">
              <div>
                <ObrasSubtitle>ecos en el tiempo</ObrasSubtitle>
                <More text="ver más" />
              </div>
            </Link>
          </div>
        </EcosContainer>
      </ObrasContainer>
    </ObrasSectionContainer>
  );
}

const ObrasSectionContainer = styled(Section)`
  width: 80%;
  margin: 0 auto;
`;

const ObrasContainer = styled(Container)`
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin-bottom: 200px;
`;

const ObrasTitle = styled(Title)`
  align-self: flex-end;

`;

const VanishingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 500px;
  margin-bottom: 80px;
  margin-top: -40px;

  .left {
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 55%;

    img {
      max-width: 100%; 
      height: auto; 
      object-fit: cover; 
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 40%;
    height: 500px;

    img {
      max-width: 100%; 
      height: auto; 
      object-fit: cover; 
    }
  }


  /* .right {
    height: auto;
    width: 40%; 
    background-color: grey;

    img {
      max-width: 100%; 
      height: auto; 
   
    }
  } */
`;

const ImpermanenciaContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 100%;
  margin-bottom: 80px;

  .top {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 400px;
    justify-content: space-between;

    img {
      max-width: 45%;
      height: auto; /* Agrega esta línea para mantener la proporción */
      object-fit: cover; 
    }
  }

  .bottom {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

// const ImpermanenciaContainer = styled.div`
//   position: relative;
//   width: 100%;
//   height: auto;
//   overflow: hidden;
//   height: 500px;
//   width: 500px;

//   .top {
//     position: relative;
//     width: 100%;
//     height: 85%; /* Inicialmente ocupa el 80% de la altura */
//     transition: height 0.3s ease; /* Transición para el cambio de altura */
//      /* img {

//        object-fit: cover; 
//      } */
 
//   }

//   .top img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover; /* La imagen se ajusta al contenedor sin distorsión */
//   }
//   .bottom {
//     position: relative;
//     width: 100%;
//     height: 10%; /* Inicialmente ocupa el 20% de la altura */
//     background-color: white;
//     display: flex;
//     justify-content: flex-start;
//     align-items: flex-start;
//     padding: 20px;
//     transition: height 0.3s ease; /* Transición para el cambio de altura */
//   }

//   &:hover .top {
//     height: 70%; /* Al hacer hover, la altura del div top se reduce al 60% */
//   }

//   &:hover .bottom {
//     height: 30%; /* Al hacer hover, la altura del div bottom se incrementa al 40% */
//   }
// `;


const VocesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 500px;
  margin-bottom: 80px;

  .left {
    height: 500px;
    width: 40%; /* Cambia a porcentaje para hacerlo más adaptable */
    background-color: grey;

    img {
      max-width: 100%; /* Cambia width a max-width */
      height: 500px; /* Agrega esta línea para mantener la proporción */
      object-fit: cover; /* Ajusta el comportamiento de la imagen */
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 55%;

    img {
      max-width: 100%; /* Cambia width a max-width */
      height: auto; /* Agrega esta línea para mantener la proporción */
      object-fit: cover; /* Ajusta el comportamiento de la imagen */
    }
  }
`;

const EcosContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 500px;
  margin-bottom: 150px;

  .top {
    display: flex;
    width: 100%;
    height: 400px;

    img {
      max-width: 100%;
      height: auto; /* Agrega esta línea para mantener la proporción */
      object-fit: cover; /* Ajusta el comportamiento de la imagen */
    }
  }

  .bottom {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const ObrasSubtitle = styled.h4`
  margin: 0;
  font-family: "Montserrat";
  font-size: 25px;
  color: #4a4747;
  line-height: 130%;
  font-weight: 400;
  max-width: 200px;
  letter-spacing: 0.5px;
  margin-top: 5px;
`;

// const ObrasText = styled.h5`
//   margin: 0;
//   font-family: "Montserrat";
//   font-size: 12px;
//   color: #4a4747;
//   line-height: 130%;
//   font-weight: 200;
//   max-width: 200px;
// `;

export default ObrasSection;
