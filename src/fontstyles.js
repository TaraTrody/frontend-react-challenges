import { createGlobalStyle } from "styled-components";
import Poppins500 from "./assets/fonts/poppins-v15-latin-500.woff";
import Poppins700 from "./assets/fonts/poppins-v15-latin-700.woff";

const FontStyles = createGlobalStyle`

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500, 700;
        url(${Poppins500}) format('woff');
        url(${Poppins700}) format('woff');
    }

`;

export default FontStyles;
