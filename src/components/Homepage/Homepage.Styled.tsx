import styled from "styled-components";
import { fontSizes } from "style";

const Wrapper = styled.div`
  height: calc(100vh - (${fontSizes.xs} * 2));

  display: flex;
  flex-direction: column;
`;

const OpenSpace = styled.div`
  flex: 1;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: ${fontSizes.sm};
  }
`;

export default {
  OpenSpace,
  Wrapper,
};
