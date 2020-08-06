import styled, { keyframes } from "styled-components";
import { size, ease } from "style";
import { MediumHead } from "components/Type/Type";
import mq from "style/mq";

const AnimateIn = keyframes`
  from {
    transform: translateY(1rem);
    opacity: 0
  } 
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  min-height: calc(100vh - 13rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${size.standard};

  ${MediumHead} {
    animation: 800ms ${AnimateIn} ${ease.standard};
    max-width: 100%;
    width: 100%;
    letter-spacing: -0.005em;

    @media ${mq.sm} {
      width: 80%;
    }
  }
`;

const LogoWrap = styled.div`
  padding: ${size[2]} ${size.standard};
`;

export default {
  LogoWrap,
  Wrapper,
};
