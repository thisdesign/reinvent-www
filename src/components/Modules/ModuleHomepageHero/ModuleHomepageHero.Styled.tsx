import { colors, size } from "style";
import styled from "styled-components";
import mq from "style/mq";

const Statement = styled.div<{ background: string | null }>`
  min-height: calc(100vh - ${size.navHeight});
  display: flex !important;
  justify-content: center;
  align-items: center;
  padding: ${size.standardY} ${size.standard};
  background-image: url(${(p) => p.background});
  background-size: cover;
  background-position: center;
  color: white;
`;

const Hero = styled.div`
  display: relative;
  max-width: ${size.maxWidth};
  margin: 0 auto;

  .slick-dots {
    bottom: 30px;

    li,
    button {
      margin: 0;
    }

    button {
      &::before {
        color: ${colors.white};
        opacity: 0.4;
        font-size: 8px;
      }
    }
    .slick-active {
      button {
        &::before {
          opacity: 1;
          color: ${colors.white};
        }
      }
    }
  }

  .arrow {
    margin: 0 auto;
    position: absolute;
    top: 50%;
    z-index: 10;
    display: none;

    g {
      stroke: ${colors.white};
    }

    &.right {
      right: 1rem;
    }

    &.left {
      left: 1rem;
    }

    @media ${mq.sm} {
      display: block;
    }
  }

  * {
    outline: none;
  }
`;

export default { Hero, Statement };
