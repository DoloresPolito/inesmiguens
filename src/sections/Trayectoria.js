import { motion } from "framer-motion";
import styled from "styled-components";
import { Section, Container } from "../styles/styles";
const Work = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const trayectoria = [
    { año: "2023", titulo: "Planet Art Collection", texto: "Alemania" },
    {
      año: "2023",
      titulo: "Praxis, Galeria virtual",
      texto: "'Hijos del Sol'",
    },
    {
      año: "2016",
      titulo: "FESTIVAL DE LA LUZ",
      texto: "Centro Cultural Haroldo Conti, “Impermanencia”",
    },
    { año: "2015", titulo: "MILÁN", texto: "ARTinterete" },
    {
      año: "2014",
      titulo: "NEW YORK",
      texto: "Agora Gallery, “Creencias Latinas”",
    },
    {
      año: "2014",
      titulo: "FESTIVAL DE LA LUZ CCR",
      texto: "“Deconstruyendo Muros”",
    },
    { año: "2014", titulo: "ARTEXARTE", texto: "“Deconstruyendo Muros”" },
    {
      año: "2012",
      titulo: "FESTIVAL DE LA LUZ XVII",
      texto: "Centro Cultural Recoleta, “Pasiones”",
    },
    {
      año: "2012",
      titulo: "CENTRO CULTURAL BORGES",
      texto: "“Horizontes Imaginarios”",
    },
    {
      año: "2012",
      titulo: "BIENAL",
      texto: "El Gran Sur, Montevideo “Creencias Latinas”",
    },
    {
      año: "2011",
      titulo: "CENTRO CULTURAL BORGES",
      texto: "“Pueblos Olvidados”",
    },
    { año: "2011", titulo: "GALERÍA THAMES", texto: "“Pueblos Olvidados”" },
    {
      año: "2011",
      titulo: "CENTRO CULTURAL BORGES",
      texto: "“Madres Argentinas”",
    },

    {
      año: "2010",
      titulo: "FESTIVAL DE LA LUZ XVII",
      texto: "Fundación Itaú, “Cicatrices”",
    },
    {
      año: "2008",
      titulo: "FUNDACIÓN PATIÑO MAYER, BOLIVIA",
      texto: "“Analogías”",
    },
    {
      año: "2007",
      titulo: "BA PHOTO",
      texto: "Galería Gonzalo Vidal, “Hijos del Sol”",
    },
    { año: "2007", titulo: "EMBAJADA DE PERÚ", texto: "“Hijos del Sol”" },

    { año: "2004", titulo: "ECO CENTRO, PTO. MADRYN", texto: "“Ratros”" },
    {
      año: "2004",
      titulo: "FESTIVAL DE LA LUZ XIII",
      texto: "Galería Stein, “Encuentro”",
    },

    { año: "2003", titulo: "RTE BA", texto: "Galería Cromática, “Huellas”" },
    { año: "2003", titulo: "ARTE BA", texto: "Banco Ciudad Bs. As." },
    {
      año: "2003",
      titulo: "CENTRO CULTURAL RECOLETA",
      texto: "“Mi ciudad y su gente”",
    },

    {
      año: "2002",
      titulo: "FESTIVAL DE LA LUZ XII,",
      texto: "“Ceremonias Andinas”",
    },
  ];

  return (
    <>
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <WorkSection>
  
            <motion.ul
              style={{ listStyle: "none" }}
              variants={container}
              initial="hidden"
              animate="show"
            >
              {trayectoria.map((tra, index) => (
                <motion.li variants={item}>
                  <WorkLi>
                    <WorkDate>
                      <p>{tra.año}</p>
                    </WorkDate>
                    <Content>
                      <WorkTitle>{tra.titulo}</WorkTitle>
                      <More>{tra.texto}</More>
                    </Content>
                  </WorkLi>
                </motion.li>
              ))}
            </motion.ul>
          </WorkSection>
        </motion.div>
      </Section>
    </>
  );
};


const WorkSection = styled.div`
  width: 100%;
  margin-top: 110px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #FAFAFA;
  padding: 50px;
`;
const WorkLi = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  border-bottom: 0.5px solid #000000;
  align-items: center;
`;
const WorkDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #6a6f58;
    font-family: "Georama", sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 13px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  height: 60px;
  justify-content: center;
`;
const WorkTitle = styled.h4`
  font-family: "Georama", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 400;
  color: #4a4747;
  margin: 0;
  line-height: 0;
`;
const More = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  letter-spacing: 0.3px;
  font-weight: 500;
  color: #6a6f58;
  line-height: 100%;
`;



export default Work;
