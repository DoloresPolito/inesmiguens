import React from "react";
import styled from "styled-components";
import Image from "next/image";
import impermanencia1 from "../../public/assets/images/obras/impermanencia jpg reduce comp/1.jpg";
import impermanencia2 from "../../public/assets/images/obras/impermanencia jpg reduce comp/2.jpg";

import vanishing1 from "../../public/assets/images/obras/vanishing jpg reduce comp/1.jpg";
import vanishing2 from "../../public/assets/images/obras/vanishing jpg reduce comp/2.jpg";

import voces from "../../public/assets/images/obras/voces de la tierra comp/6baja.jpg";
import voces2 from "../../public/assets/images/obras/voces de la tierra comp/0baja.jpg";

import ecos from "../../public/assets/images/obras/ecos en el tiempo comp/baja6a.jpg";
import { Section, Container, Title } from "../styles/styles";
import Link from "next/link";
import More from "@/components/More";

function ObrasSection() {
  return (
    <ObrasSectionContainer>
      <ObrasContainer>
        <ObrasTitle>obras</ObrasTitle>

        <VanishingContainer>
          <div className="left">
            <Image src={vanishing2} alt="vanishing" />
            <Link href="/vanishing">
              <div>
                <ObrasSubtitle>vanishing landscapes</ObrasSubtitle>

                <More />
              </div>
            </Link>
          </div>

          <div className="right">
            <Image src={vanishing1} alt="impermanencia" />
          </div>
        </VanishingContainer>

        <ImpermanenciaContainer>
          <div className="top">
            <Image src={impermanencia1} alt="impermanencia" />
            <Image src={impermanencia2} alt="impermanencia" />
          </div>

          <div className="bottom">
            <Link href="/impermanencia">
              <div>
                <ObrasSubtitle>impermanencia</ObrasSubtitle>
                {/* <ObrasText>
              La ciudad se convierte en un mar de fugaces  y fantasmagóricos
              encuentros.
            </ObrasText> */}
                <More />
              </div>
            </Link>
          </div>
        </ImpermanenciaContainer>

        <VocesContainer>
          <div className="left">
            <Image src={voces} alt="voces1" />
          </div>
          <div className="right">
            <Image src={voces2} alt="voces2" />
            <Link href="/voces-de-la-tierra">
              <div>
                <ObrasSubtitle>voces de la tierra</ObrasSubtitle>

                <More />
              </div>
            </Link>
          </div>
        </VocesContainer>

        <EcosContainer>
          <div className="top">
            <Image src={ecos} alt="ecos" />
          </div>

          <div className="bottom">
            <Link href="/ecos-en-el-tiempo">
              <div>
                <ObrasSubtitle>ecos en el tiempo</ObrasSubtitle>
                <More />
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
      max-width: 100%; /* Cambia width a max-width */
      height: auto; /* Agrega esta línea para mantener la proporción */
      object-fit: cover; /* Ajusta el comportamiento de la imagen */
    }
  }

  .right {
    height: 500px;
    width: 40%; /* Cambia a porcentaje para hacerlo más adaptable */
    background-color: grey;

    img {
      max-width: 100%; /* Cambia width a max-width */
      height: 500px; /* Agrega esta línea para mantener la proporción */
      object-fit: cover; /* Ajusta el comportamiento de la imagen */
    }
  }
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
  font-size: 18px;
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
