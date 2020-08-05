import styled from "styled-components";
import { size } from "style";

const TextWrap = styled.div<{ center: boolean }>`
  text-align: ${(p) => (p.center ? "center" : "left")};
  margin: ${size[6]} ${size.standard};

  > * {
    width: 100%;
  }
`;

export default {
  TextWrap,
};
