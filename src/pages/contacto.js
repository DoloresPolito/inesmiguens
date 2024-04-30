import React, { useState, useEffect } from "react";
import { Section, Container, Text } from "../styles/styles";
import styled from "styled-components";
import Image from "next/image";
import instagram from "../../public/assets/icons/instagram.png";
import mail from "../../public/assets/icons/mail.png";
import phone from "../../public/assets/icons/phone.png";
import profile from "../../public/assets/images/profile/profile1.jpeg";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { sendContactForm } from "../lib/api";

const initValues = { name: "", email: "", message: "" };
const initState = { error: "", values: initValues };

function Contacto() {
  const contactList = [
    {
      text: "@inesmiguensphoto",
      url: "https://www.instagram.com/inesmiguensphoto/",
      image: instagram,
    },
    { text: "+54 11 54675902", url: "https://api.whatsapp.com/send/?phone=541154675902", image: phone },
    { text: "inesmiguensphoto@gmail.com", url: "mailto:inesmiguensphoto@gmail.com", image: mail },
  ];
  const [state, setState] = useState(initState);

  const { values } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);

      setState(initState);

      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  const variants = {
    visible: {
      opacity: 1,
      x: 0, // Posición inicial
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0.5,
      x: 50, // Mueve la imagen hacia arriba para ocultarla
    },
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const listItemVariants = {
    visible: (index) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
    hidden: {
      opacity: 0,
      x: -0,
      y: 20,
    },
  };

  return (
    <>
      <Section>
        <ContactContainer>
          <LeftContainer
          >
            <motion.div
            
            initial={{ opacity: 0.5, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
      
            }}
            className="form-container">
              <form>
                <Input
                  type="text"
                  placeholder="nombre y apellido"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                <Input
                  placeholder="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  placeholder="mensaje"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                />

                <button onClick={onSubmit}>
                  <p>enviar</p>
                </button>
              </form>
            </motion.div>
            <div className="info-container">
              <AnimatePresence>
                {isVisible &&
                  contactList.map((contact, index) => (
                    <motion.div
                      key={index}
                      variants={listItemVariants}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link href={contact.url} target="_blank">
                        <div>
                          <Image src={contact.image} alt="logo" />
                          <Text>{contact.text}</Text>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </LeftContainer>

 <RightContainer
            variants={variants}
            initial="hidden"
            animate="visible"
          >
   
              <Image src={profile} alt="profile" />
          
          </RightContainer>
        </ContactContainer>
      </Section>
    </>
  );
}

const ContactContainer = styled(Container)`
  flex-direction: row;
  height: auto;
  width: 80%;
  padding-top: 20px;

  justify-content: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    width: 90%;
  }
`;

const LeftContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80%;
  justify-content: space-between;

  .form-container {
    display: flex;
    flex-direction: column;
    height: 70%;
    width: 80%;
    margin-bottom: 80px;

    form {
      margin-top: 0px;
      display: flex;
      flex-direction: column;
    }

    

    button {
      background-color: transparent;
      border: 0.5px solid black;
      padding: 10px 20px;
      margin-top: 40px;
      align-self: flex-end;
      justify-self: flex-end;

      p {
        margin: 0;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 14px;
      }
    }
    @media screen and (max-width: 1100px) {
      width: 90%;
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    height: 30%;
    width: 80%;
    justify-content: center;
    margin-top: -50px;

    div {
      display: flex;
      align-items: center;
      padding: 0px 0px;
      align-self: flex-start;
    }

    img {
      height: 18px;
      width: 18px;
      padding-right: 10px;
    }

    @media screen and (max-width: 1100px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Input = styled.input`


  width: 100%;
      padding: 8px;
      border: none;
      border-bottom: 1px solid #ccc;
      outline: none;
      color: white;
      margin-top: 40px;
      color: #000000; /* Color de texto */
      font-family: "Montserrat", sans-serif;

  &::placeholder {
    color: #000000; /* Color del placeholder */
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 10px;
  }
`;

const RightContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: -40px;

  img {
    height: auto;
    width: 550px;

    @media screen and (max-width: 1100px) {
      width: 70%;
    }

    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    margin-top: 40px;
  }
`;



export default Contacto;
