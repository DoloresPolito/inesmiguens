"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FramerNavbarMobile from "@/components/FramerNavbarMobile/FramerNavbarMobile";

const links = [
  { href: "/hoteles", title: "HOTELES" },
  { href: "/obras", title: "OBRAS" },
  { href: "/travelandworkshops", title: "TRAVEL & WORKSHOPS" },
  { href: "/libros", title: "LIBROS" },
  { href: "/clientes", title: "CLIENTES" },
  { href: "/contacto", title: "CONTACTO" },
];

const Navbar = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const medium = 1200;

  const path = usePathname();

  // const [scrollDirection, setScrollDirection] = useState("down");
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);

  // const handleScroll = () => {
  //   const currentScrollPos = window.pageYOffset;

  //   if (prevScrollPos > currentScrollPos) {
  //     setScrollDirection("up");
  //   } else {
  //     setScrollDirection("down");
  //   }

  //   setPrevScrollPos(currentScrollPos);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos, scrollDirection]);

  // useEffect(() => {
  //   setVisible(
  //     (scrollDirection === "up" && window.scrollY > 20) || window.scrollY <= 0
  //   );
  // }, [scrollDirection]);

  return (
    <>
      {width > medium ? (
        <>
          <NavbarContainer 
          // visible={visible}
          >
            <LogoContainer>
              <Link href="/">
                <p>INÉS MIGUENS</p>
              </Link>
            </LogoContainer>
            <LinksContainer>
              {links.map((link, index) => {
                return (
                  <div key={index}>
                    {link.href === path && <Underline />}
                    <Link href={link.href} >
                      <p>{link.title}</p>
                    </Link>
                  </div>
                );
              })}
            </LinksContainer>
          </NavbarContainer>
        </>
      ) : (
        <>
          <FramerNavbarMobile />
        </>
      )}
    </>
  );
};

const NavbarContainer = styled.div`
  /* width: 90%;
  height: 80px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center; */

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1000;
  display: flex;
  width: 90%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  transition: opacity 0.3s ease, transform 0.3s ease;
  margin: 0 auto;
  max-width: 1600px;

  /* opacity: ${(props) =>
    props.visible || props.scrollDirection === "up" ? 1 : 0};
  transform: ${(props) =>
    props.visible || props.scrollDirection === "up"
      ? "none"
      : "translateY(-100%)"}; */
`;

const LogoContainer = styled.div`
  p {
    font-size: 30px;
    color: #4a4747;
    font-weight: 200;
    font-family: var(--font-montserrat);
  }
`;

const LinksContainer = styled.div`
  display: flex;

  div {
    position: relative;
    font-family: var(--font-montserrat);
    font-weight: 300;
    font-style: normal;
    font-size: 12px;
    transition: all 0.3s ease;
    margin-left: 20px;
  }
  p {
    font-size: 12px;
    color: #4a4747;
    font-weight: 200;
    font-family: var(--font-montserrat);
    line-height: 0%;
    &:hover {
      font-weight: 500;
    }
  }
`;

const Underline = styled.span`
  position: absolute;
  left: 0;
  top: 100%;
  display: block;
  height: 1px;
  width: 100%;
  background-color: black;
`;

export default Navbar;
