import { createGlobalStyle, css } from "styled-components";
import { sizeVars } from "style";
import reset from "styled-reset";

const style = css`
  :root {
    ${sizeVars}
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: BasisGrotesque;
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
