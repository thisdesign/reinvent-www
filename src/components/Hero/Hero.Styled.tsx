import styled from "styled-components";
import { size } from "style";

const Wrapper = styled.div`
  min-height: calc(100vh - 10rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${size.standard};
`;

export default {
  Wrapper,
};