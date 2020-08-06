import { createGlobalStyle, css } from "styled-components";
import { sizeVars, size, colors } from "style";
import reset from "styled-reset";
import mq from "style/mq";

const style = css`
  :root {
    ${sizeVars}
    --size-standard: ${size[1]};

    @media ${mq.xs} {
      --size-standard: ${size[2]};
    }
     @media ${mq.sm} {
      --size-standard: ${size[3]};
    }
    @media ${mq.md} {
      --size-standard: ${size[4]};
    }
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  html {
    scroll-behavior: smooth;
    font-family: BasisGrotesque, Helvetica, Arial, sans-serif;
    color: ${colors.black};
    font-size: 18px;
    line-height: 1.1;

    @media ${mq.xs} {
      font-size: 20px;
    }
    @media ${mq.sm} {
      font-size: 20px;
    }
    @media ${mq.md} {
      font-size: 21px;
    }
    @media ${mq.lg} {
      font-size: 22px;
    }
    @media ${mq.xl} {
      font-size: 23px;
    }
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
