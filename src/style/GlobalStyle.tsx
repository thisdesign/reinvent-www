import { createGlobalStyle, css } from "styled-components";
import { colors, fontSizes } from "style";
import reset from "styled-reset";

const style = css`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: AxelGrotesk;
    text-transform: uppercase;
    font-size: ${fontSizes.sm};
    line-height: 0.9;
    color: var(--color-secondary);
    background: var(--color-primary);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const theme = {
  black: css`
    :root {
      --color-primary: ${colors.black};
      --color-secondary: ${colors.white};
      --color-highlight: ${colors.yellow};
    }
  `,

  yellow: css`
    :root {
      --color-primary: ${colors.yellow};
      --color-secondary: ${colors.black};
      --color-highlight: ${colors.white};
    }
  `,
};

const GlobalStyle = createGlobalStyle<{ theme: "black" | "yellow" }>`
  ${(p) => theme[p.theme]};
  ${reset}
  ${style}
  
`;

export default GlobalStyle;
