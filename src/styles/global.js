import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'DMSans', -apple-system, BlinkMacSystemFont, 'Segoe UI','Bebas Neue', 'Montserrat','Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100vw; 
    overscroll-behavior-y: contain; 
    background-color: white;
    overflow-x: hidden;
    user-select: none;

  }

  img {
  pointer-events: none;
}

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a, a span, button {
    outline: none;
    text-decoration: none;
    transition: all 0.25s ease-in-out;
    color: inherit;
 
  }

  .disable-scroll {
  overflow: hidden;
}
  
`;

export default GlobalStyles;