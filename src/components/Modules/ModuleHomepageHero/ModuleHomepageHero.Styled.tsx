import { colors, ease, size } from "style";
import styled from "styled-components";
import mq from "style/mq";

const ImgWrapper = styled.div`
  min-height: calc(100vh - ${size.navHeight});
  position: relative;
  overflow: hidden;
`;

export type Pos = "NEXT" | "PREV" | "CURRENT";

const getTransform = (pos: Pos): string => {
  if (pos === "PREV") return "-100%";
  if (pos === "NEXT") return "100%";
  return "0";
};

const Img = styled.img<{ pos: Pos }>`
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  transform: ${(p) => `translateX(${getTransform(p.pos)})`};
  transition: transform 500ms ${ease.standard};
  /* transition: transform 15000ms cubic-bezier(0.4, 0.84, 0.42, 1); */
`;

const Statement = styled.div<{ isActive: boolean }>`
  min-height: calc(100vh - ${size.navHeight});
  display: flex !important;
  justify-content: center;
  align-items: center;
  padding: ${size.standardY} ${size.standard};
  color: white;

  h1 {
    opacity: ${(p) => (p.isActive ? 1 : 0)};
    transform: scale(${(p) => (p.isActive ? 1 : 0.98)});
    transition: 400ms ${ease.standard} all;
  }
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

export default { Img, ImgWrapper, Hero, Statement };
