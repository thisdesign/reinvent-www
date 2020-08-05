import styled from "styled-components";
import { fontSizes } from "style";

const Wrapper = styled.div`
  height: calc(100vh - (${fontSizes.xs} * 2));

  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${fontSizes.lg};
  text-align: center;
`;

export default {
  Content,
  Wrapper,
};
