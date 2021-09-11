import { createGlobalStyle } from "styled-components";
import fonts from "./styles/fonts";

const GlobalStyles = createGlobalStyle`

    ${fonts};

    html {
        box-sizing: border-box;
    }

    *, 
    *:before, 
    *:after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        margin: 0;
    }
    
    h1 {
        margin: 0;
    }

`;

export default GlobalStyles;
