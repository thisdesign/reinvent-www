import styled, { keyframes } from "styled-components";
import { size, ease } from "style";
import { LargeHead, Support } from "components/Type/Type";

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
  min-height: calc(100vh - 18rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${size.standard};

  ${LargeHead} {
    animation: 800ms ${AnimateIn} ${ease.standard};
  }
  ${Support} {
    animation: 1200ms ${AnimateIn} ${ease.standard};
  }
`;

const LogoWrap = styled.div`
  padding: ${size.standard};
`;

export default {
  LogoWrap,
  Wrapper,
};
