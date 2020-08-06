import styled from "styled-components";
import { size } from "style";

const TextWrap = styled.div`
  margin: ${size[6]} ${size.standard};

  > * {
    width: 100%;
  }
`;

export default {
  TextWrap,
};
