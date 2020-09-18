import { size, colors, zIndex } from "style";
import styled from "styled-components";
import mq from "style/mq";

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  background: white;
  z-index: ${zIndex.nav};
`;

const Inner = styled.div`
  max-width: ${size.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: ${size.navHeight};
  align-items: center;
  padding: 0 ${size.standard};
`;

const Links = styled.div`
  display: none;

  @media ${mq.sm} {
    display: block;
  }
`;

const Hamburger = styled.div`
  display: block;

  @media ${mq.sm} {
    display: none;
  }
`;
const Link = styled.a<{ active: boolean }>`
  display: inline-block;
  margin-left: ${size[1]};
  font-size: ${size[-1]};
  border-bottom: ${(p) => (p.active ? ` 1px solid ${colors.blue}` : "none")};
  cursor: pointer;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MobileMenuContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    font-size: ${size[3]};
    line-height: 1.5;
  }
`;

const MobileMenuBar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${size[0]};
`;

export default {
  MobileMenuBar,
  Hamburger,
  Links,
  Link,
  Wrapper,
  Inner,
  MobileMenu,
  MobileMenuContent,
};
