import styled from "styled-components";
import { size } from "style";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: ${size.standard} 0;

  img {
    display: block;
    width: 80%;
  }
`;

export default {
  Wrapper,
};
