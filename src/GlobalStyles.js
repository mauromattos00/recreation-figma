import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap');

    html, body, #root {
      margin: 0;
      height: 100%;
    }
    
    body {
      font-family: 'Rubik', sans-serif;
    }
    
    * {
      box-sizing: border-box;
    }
`;

export default GlobalStyles;
