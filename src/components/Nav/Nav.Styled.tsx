import styled from "styled-components";
import { size, ease, zIndex, tr } from "style";
import mq from "style/mq";

const Wrapper = styled.nav<{ active: boolean }>`
  padding: ${size[0]} ${size.standard};
  display: flex;
  justify-content: space-between;

  display: relative;
  z-index: ${zIndex.nav};
  background: ${(p) => (p.active ? "white" : "transparent")};

  @media ${mq.sm} {
    position: sticky;
    top: 0;
  }
  /* Transitions */
  opacity: 0;
  transform: translate3d(0, 1rem, 0);
  transition: ${tr(["transform", "opacity"], 2)};

  .mounted & {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const ItemWrap = styled.ul`
  display: flex;

  li {
    padding-left: ${size[0]};
  }
`;

const LogoWrap = styled.div<{ active: boolean }>`
  opacity: ${(p) => (p.active ? 0 : 1)};
  transition: 200ms opacity ${ease.standard};
  position: absolute;
`;

export default {
  LogoWrap,
  ItemWrap,
  Wrapper,
};
