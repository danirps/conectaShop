// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Garante que ocupa toda a altura da viewport */
    position: relative; /* Para que o rodapé fixo funcione corretamente */
    overflow: visible; /* Evita esconder o rodapé */
      overflow-x: hidden; /* Evita scroll horizontal */
    overflow-y: hidden; /* Evita scroll horizontal */
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;

export default GlobalStyle;
