import styled from "styled-components";
import { size } from "style";

const Wrapper = styled.nav`
  padding: ${size[0]} ${size.standard};
  display: flex;
  justify-content: space-between;

  position: sticky;
  top: 0;
`;

const ItemWrap = styled.ul`
  display: flex;

  li {
    padding-left: ${size[0]};
  }
`;

export default {
  ItemWrap,
  Wrapper,
};
