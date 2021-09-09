import { createGlobalStyle } from "styled-components";
import fonts from "./styles/fonts";

const GlobalStyles = createGlobalStyle`

    ${fonts};

    body {
        font-family: 'Poppins', sans-serif;
    }

`;

export default GlobalStyles;
