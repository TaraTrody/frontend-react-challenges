import { createGlobalStyle } from "styled-components";
import fonts from "./styles/fonts";

const GlobalStyles = createGlobalStyle`

    ${fonts};

    *, 
    *:before, 
    *:after {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }

    body {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        margin: 0;
    }
    
    h1,
    h2,
    h3,
    h5,
    h6 {
        margin: 0;
        font-weight: inherit;
    }

    h1 {
        font-size: 2rem;
    }

    p {
        margin: 0;
    }

`;

export default GlobalStyles;
