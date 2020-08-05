import styled from "styled-components";
import { fontSizes } from "style";

const Wrapper = styled.div`
  padding: ${fontSizes.xs};
`;

const HomeContent = styled.div`
  flex: 1;
`;
const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default {
  HomeContent,
  Wrapper,
  NavWrap,
};
