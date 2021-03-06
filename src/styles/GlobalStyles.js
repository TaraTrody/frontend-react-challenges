import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";

const GlobalStyles = createGlobalStyle`

    ${fonts};

    *, 
    *:before, 
    *:after {
        box-sizing: border-box;
    }

    * {
        margin: 0px;
        padding: 0px;
    }

    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }

    html,
    body {
        width: 100%;
        height: 100%;
        padding: 0px;

    }
    body {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        margin: 0px;

    }
    
    h1,
    h2,
    h3,
    h5,
    h6 {
        margin: 0;
        font-weight: inherit;
    }

    input {
        margin: 0
    }

    button {
        border: none;
    }

    h1 {
        font-size: 2rem;
    }

    p {
        margin: 0;
    }

`;

export default GlobalStyles;
