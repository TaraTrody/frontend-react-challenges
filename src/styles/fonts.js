import { css } from "styled-components";

const fonts = css`
  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    src: local(""), url("../fonts/poppins-v15-latin-300.woff2") format("woff2"),
      url("../fonts/poppins-v15-latin-300.woff") format("woff"),
      url("../fonts/poppins-v15-latin-300.ttf") format("truetype");
  }
  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    src: local(""), url("/poppins-v15-latin-regular.woff2") format("woff2"),
      url("/poppins-v15-latin-regular.woff") format("woff"),
      url("/poppins-v15-latin-regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    src: local(""), url("/poppins-v15-latin-500.woff2") format("woff2"),
      url("/poppins-v15-latin-500.woff") format("woff"),
      url("/poppins-v15-latin-500.ttf") format("truetype");
  }

  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    src: local(""), url("/poppins-v15-latin-700.woff2") format("woff2"),
      url("/poppins-v15-latin-700.woff") format("woff"),
      url("/poppins-v15-latin-700.ttf") format("truetype");
  }
`;

export default fonts;
