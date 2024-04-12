import React from "react";
import styled from "styled-components";
import Image from "next/image";
import impermanencia1 from "../../public/assets/images/obras/impermanencia jpg reduce comp/1.jpg";
import vanishing1 from "../../public/assets/images/obras/vanishing jpg reduce comp/1.jpg";
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

        <ObrasGrid>
          <ObrasItem1>
            <Link href="/voces-de-la-tierra">
              <ImpermanenciaContainer>
                <div className="top">
                  <Image src={voces2} alt="voces" />
                </div>

                <div className="bottom">
                  <div>
                    <ObrasSubtitle>voces de la tierra</ObrasSubtitle>

                    <More text="ver más" />
                  </div>
                </div>
              </ImpermanenciaContainer>
            </Link>
          </ObrasItem1>

          <ObrasItem2>
            <Link href="/vanishing">
              <ImpermanenciaContainer>
                <div className="top">
                  <Image src={vanishing1} alt="vanishing" />
                </div>

                <div className="bottom">
                  <div>
                    <ObrasSubtitle>vanishing landscapes</ObrasSubtitle>

                    <More text="ver más" />
                  </div>
                </div>
              </ImpermanenciaContainer>
            </Link>
          </ObrasItem2>

          <ObrasItem1>
            <Link href="/impermanencia">
              <ImpermanenciaContainer>
                <div className="top">
                  <Image src={impermanencia1} alt="impermanencia" />
                </div>

                <div className="bottom">
                  <div>
                    <ObrasSubtitle>impermanencia</ObrasSubtitle>

                    <More text="ver más" />
                  </div>
                </div>
              </ImpermanenciaContainer>
            </Link>
          </ObrasItem1>

          <ObrasItem2>
            <Link href="/ecos-en-el-tiempo">
              <ImpermanenciaContainer>
                <div className="top">
                  <Image src={ecos} alt="ecos-en-el-tiempo" />
                </div>

                <div className="bottom">
                  <div>
                    <ObrasSubtitle>ecos en el tiempo</ObrasSubtitle>

                    <More text="ver más" />
                  </div>
                </div>
              </ImpermanenciaContainer>
            </Link>
          </ObrasItem2>
        </ObrasGrid>
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
  max-width: 1100px;
  margin-bottom: 200px;
  overflow: hidden;
`;

const ObrasTitle = styled(Title)`
  align-self: flex-end;
`;

const ObrasGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dos columnas */
  gap: 100px; /* Espacio entre las obras */

  @media screen and (max-width: 1200px) {

    grid-template-columns: 1fr; /* Dos columnas */
  }
`;

const ObrasItem1 = styled.div`
  width: 100%;
  margin-top: -60px;
`;

const ObrasItem2 = styled.div`
  width: 100%;
  margin-top: 0px;

`;

const ImpermanenciaContainer = styled.div`
  width: 100%;
  height: 500px; /* Altura fija para cada contenedor */
  margin-bottom: 20px; /* Espacio entre contenedores */

  .top {
    width: 100%;
    height: 90%; /* Altura del 70% por defecto */
    overflow: hidden; /* Oculta cualquier contenido adicional */
    transition: height 0.5s ease; /* Transición suave */
  }

  .top img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .bottom {
    width: 100%;
    height: 10%; /* Altura del 30% por defecto */
    background-color: white;
    padding: 20px;
    display: flex;
    align-items: flex-start;
  }

  &:hover .top {
    height: 80%; /* Al hacer hover, ajusta la altura */
  }

  &:hover .bottom {
    height: 20%; /* Al hacer hover, ajusta la altura */
  }
`;

const ObrasSubtitle = styled.h4`
  margin: 0;
  font-family: "Montserrat";
  font-size: 23px;
  color: #4a4747;
  line-height: 120%;
  font-weight: 400;
  max-width: 300px;
  letter-spacing: 0.5px;
`;

export default ObrasSection;
