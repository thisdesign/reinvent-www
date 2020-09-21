import { colors, size } from "style";
import styled from "styled-components";
import mq from "style/mq";

const Statement = styled.div`
  min-height: calc(100vh - 5rem);
  display: flex !important;
  justify-content: center;
  align-items: center;
  padding: ${size.standardY} ${size.standard};
`;

const Hero = styled.div`
  display: relative;
  max-width: ${size.maxWidth};
  margin: 0 auto;

  .slick-dots {
    li,
    button {
      margin: 0;
    }

    button {
      &::before {
        color: ${colors.grey};
        opacity: 1;
        font-size: 8px;
      }
    }
    .slick-active {
      button {
        &::before {
          opacity: 1;
          color: ${colors.blue};
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
      stroke: ${colors.blue};
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
