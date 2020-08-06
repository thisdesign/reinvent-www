import styled from "styled-components";
import { size, ease, zIndex } from "style";

const Wrapper = styled.nav<{ active: boolean }>`
  padding: ${size[0]} ${size.standard};
  display: flex;
  justify-content: space-between;

  position: sticky;
  top: 0;
  display: relative;
  z-index: ${zIndex.nav};
  background: ${(p) => (p.active ? "white" : "transparent")};
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
