import styled, { keyframes } from "styled-components";
import { size, tr, colors } from "style";
import { MediumHead } from "components/Type/Type";
import mq from "style/mq";

const Wrapper = styled.div`
  min-height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${size.standard};

  svg {
    * {
      fill: ${colors.blue};
    }
  }

  ${MediumHead} {
    transition: ${tr(["opacity", "transform"], 1)};
    max-width: 20em;
    width: 100%;
    letter-spacing: -0.005em;
    /* Transitions */
    transform: translate3d(0, 10%, 0);
    opacity: 0;

    .mounted & {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    @media ${mq.sm} {
      width: 80%;
    }
  }
`;

const LogoWrap = styled.div`
  padding: ${size[2]} ${size.standard};
  transition: ${tr(["opacity", "transform"], 0)};

  /* Transitions */
  opacity: 0;
  transform: translate3d(0, 10%, 0);

  .mounted & {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export default {
  LogoWrap,
  Wrapper,
};
