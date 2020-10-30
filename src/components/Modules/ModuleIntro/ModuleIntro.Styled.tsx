import styled, { css } from "styled-components";
import { size } from "style";
import mq from "style/mq";

const Container = styled.div<{ hasImage: boolean; tint: number }>`
  img {
    filter: brightness(${(p) => (p.tint / 100) * -1 + 1});
  }

  @media ${mq.sm} {
    min-height: ${(p) =>
      p.hasImage ? `calc(85vh - ${size.navHeight})` : "auto"};
  }

  ${(p) =>
    p.hasImage &&
    css`
      position: relative;
      padding: 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;

      img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    `}
`;

const Intro = styled.div`
  max-width: ${size.maxWidth};
  margin: ${size.standardY} auto;
  padding: 0 ${size.standard};
  position: relative;
  top: 10;
`;

export default { Container, Intro };
