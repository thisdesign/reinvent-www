import { createGlobalStyle, css } from "styled-components";
import { colors, fontSizes } from "style";
import reset from "styled-reset";

const style = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: AxelGrotesk;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${style}
`;

export default GlobalStyle;
