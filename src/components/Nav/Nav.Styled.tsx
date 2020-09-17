import { size, colors } from "style";
import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  height: ${size.navHeight};
  max-width: ${size.maxWidth};
  margin: 0 auto;
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
  padding: ${size.standard};
`;

const Links = styled.div``;

const Link = styled.a<{ active: boolean }>`
  display: inline-block;
  margin-left: ${size[1]};
  font-size: ${size[-1]};
  border-bottom: ${(p) => (p.active ? ` 1px solid ${colors.blue}` : "none")};
  cursor: pointer;
`;
export default { Links, Link, Wrapper };
