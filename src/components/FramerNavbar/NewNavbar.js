// import React, { useState, useEffect } from "react";
// import styled, { css } from "styled-components";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const links = [
//   { href: "/hoteles", title: "HOTELES" },
//   { href: "/obras", title: "OBRAS" },
//   { href: "/talleres", title: "TRAVEL & WORKSHOPS" },
//   { href: "/trayectoria", title: "TRAYECTORIA" },
//   { href: "/trayectoria", title: "CLIENTES" },
//   { href: "/contacto", title: "CONTACTO" },
// ];

// const Navbar = styled.nav`
//   width: 100%;
//   background-color: white;
//   height: 60px;
//   position: fixed;
//   top: 0;
//   z-index: 1000;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding-top: 10px;
//   transition: opacity 0.3s ease, transform 0.3s ease;
//   margin: 0 auto;
//   max-width: 1600px;

//   ${(props) =>
//     !props.visible &&
//     css`
//       opacity: 0;
//       transform: translateY(-100%);
//     `}
// `;

// const Container = styled.div`
//   width: 90%;
//   display: flex;
//   margin: 0 auto;
// `;

// const Nav = styled.nav`
//   width: 50%;
//   display: flex;
//   justify-content: flex-end;

//   @media (max-width: 1200px) {
//     display: none;
//   }
// `;

// const List = styled.ul`
//   margin-left: 2px;

//   @media (min-width: 640px) {
//     margin-left: 12px;
//   }
//   display: flex;
//   justify-content: space-between;
// `;

// const ListItem = styled.li`
//   width: auto;
//   list-style-type: none;
// `;

// const StyledLink = styled.a`
//   position: relative;
//   font-family: "Montserrat", sans-serif;
//   font-weight: 300;
//   font-style: normal;
//   font-size: 14px;
//   transition: all 0.3s ease;

//   &:hover {
//     font-weight: 500;
//   }
// `;

// const Underline = styled.span`
//   position: absolute;
//   left: 0;
//   top: 100%;
//   display: block;
//   height: 1px;
//   width: 100%;
//   background-color: black;
// `;

// const BurgerMenuContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   width: 50%;

//   @media (min-width: 1200px) {
//     display: none;
//   }
// `;

// const BurgerMenuIcon = styled.div`
//   background: black;
//   position: absolute;
//   width: 55px;
//   height: 2px;
//   z-index: 0;
//   top: calc(25px / 2 - 1.5px);
//   transition: 0.25s width ease-in-out, 0.5s background-color ease-in-out;

//   &:after,
//   &:before {
//     content: "";
//     background-color: black;
//     position: absolute;
//     width: 55px;
//     height: 2px;
//     z-index: 0;
//     transition: 0.25s transform ease-in-out, 0.5s background-color ease-in-out;
//   }

//   &:after {
//     transform: translateY(10px);
//   }

//   &:before {
//     transform: translateY(-10px);
//   }
// `;

// const MobileMenu = styled.div`
//   width: 100%;
//   position: fixed;
//   top: 60px;
//   left: 0;
//   background-color: white;
//   z-index: 999;
//   display: none;

//   ${(props) =>
//     props.active &&
//     css`
//       display: block;
//     `}
// `;

// const FramerNavbar = () => {
//   const [width, setWidth] = useState(null);
//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const [burgerMenuActive, setBurgerMenuActive] = useState(false);
//   const toggleBurgerMenu = () => {
//     setBurgerMenuActive(!burgerMenuActive);
//   };

//   const path = usePathname();

//   const [scrollDirection, setScrollDirection] = useState("down");
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [visible, setVisible] = useState(true);

//   const handleScroll = () => {
//     const currentScrollPos = window.pageYOffset;

//     if (prevScrollPos > currentScrollPos) {
//       setScrollDirection("up");
//     } else {
//       setScrollDirection("down");
//     }

//     setPrevScrollPos(currentScrollPos);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [prevScrollPos, scrollDirection]);

//   useEffect(() => {
//     setVisible((scrollDirection === "up" && window.scrollY > 20) || window.scrollY <= 0);
//   }, [scrollDirection]);

//   const motionVariants = {
//     open: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         ease: "easeOut",
//         type: "spring",
//       },
//     },
//     closed: {
//       opacity: 0,
//       transition: {
//         staggerChildren: 0,
//         duration: 0,
//       },
//     },
//   };

//   const listItemVariants = {
//     open: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.35,
//         ease: "easeOut",
//       },
//     },
//     closed: {
//       y: 100,
//       opacity: 0,
//       transition: {
//         duration: 0,
//       },
//     },
//   };

//   return (
//     <>
//       <Navbar visible={visible}>
//         <Container>
//           <div>
//             <Link href="/">
//               <p>INES MIGUENS</p>
//             </Link>
//           </div>

//           {width >= 1200 ? (
//             <Nav>
//               <List>
//                 {links.map((link) => (
//                   <ListItem key={link.href}>
//                     <StyledLink href={link.href} className="relative">
//                       {link.href === path && <Underline />}
//                       {link.title}
//                     </StyledLink>
//                   </ListItem>
//                 ))}
//               </List>
//             </Nav>
//           ) : (
//             <BurgerMenuContainer onClick={toggleBurgerMenu}>
//               <BurgerMenuIcon />
//             </BurgerMenuContainer>
//           )}
//         </Container>
//       </Navbar>

//       <MobileMenu active={burgerMenuActive}>
//         <List>
//           {links.map((link) => (
//             <ListItem key={link.href}>
//               <StyledLink href={link.href} className="relative">
//                 {link.href === path && <Underline />}
//                <h6> {link.title}</h6>
//               </StyledLink>
//             </ListItem>
//           ))}
//         </List>
//       </MobileMenu>
//     </>
//   );
// };

// export default FramerNavbar;