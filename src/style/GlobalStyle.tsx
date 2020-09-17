import { createGlobalStyle, css } from "styled-components";
import { sizeVars, size, colors, fontFamilies } from "style";
import reset from "styled-reset";
import mq from "style/mq";

const vars = css`
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
`;

const style = css`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  html {
    scroll-behavior: smooth;
    font-family: ${fontFamilies.sansSerif};
    color: ${colors.charcoal};
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

  img,
  video {
    width: 100%;
    max-width: 100%;
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: 500;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${vars}
  ${reset}
  ${style}
`;

export default GlobalStyle;
