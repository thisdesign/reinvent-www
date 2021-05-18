import { size, colors, zIndex, ease } from "style";
import styled from "styled-components";
import mq from "style/mq";
import { motion } from "framer-motion";

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  background: white;
  z-index: ${zIndex.nav};

  svg {
    height: 1.75rem;
    position: relative;
    top: 0.1rem;
  }
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

const Hamburger = styled.div<{ open: boolean }>`
  display: block;
  width: ${size[0]};
  height: ${size[0]};
  position: relative;
  /* background: green; */

  &:before,
  &:after {
    content: "";
    border-bottom: 1px solid black;
    width: 100%;
    height: 1px;
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    transition: 200ms transform ${ease.standard};
  }

  &:before {
    transform: ${(p) =>
      p.open ? `rotate(-45deg) ` : "translateY(-4px) rotate(0deg)"};
  }

  &:after {
    transform: ${(p) =>
      p.open ? `rotate(45deg) ` : "translateY(4px) rotate(0deg)"};
  }

  z-index: ${zIndex.nav + 10};
  @media ${mq.sm} {
    display: none;
  }
`;
const Link = styled.a<{ active: boolean }>`
  display: inline-block;
  margin-left: ${size[1]};
  border-bottom: ${(p) => (p.active ? ` 1px solid ${colors.blue}` : "none")};
  cursor: pointer;
`;

const MobileMenu = styled(motion.div)`
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

export default {
  Hamburger,
  Links,
  Link,
  Wrapper,
  Inner,
  MobileMenu,
  MobileMenuContent,
};
