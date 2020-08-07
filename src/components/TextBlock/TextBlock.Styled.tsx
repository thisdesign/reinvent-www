import styled, { css } from "styled-components";
import { size } from "style";

const TextWrap = styled.div<{ margin: boolean }>`
  ${(p) =>
    p.margin &&
    css`
      margin: ${size[6]} ${size.standard} ${size[2]};
    `}

  > * {
    width: 100%;
  }
`;

export default {
  TextWrap,
};
