import { size } from "style";
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
`;

const Links = styled.div`
  a {
    display: inline-block;
    margin-left: ${size[0]};
  }
`;
export default { Links, Wrapper };
