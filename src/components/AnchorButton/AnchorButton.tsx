import styled, { css } from "styled-components";
import { colors, size } from "style";

const AnchorButton = styled.a<{ light?: boolean }>`
  padding: ${size[-1]} ${size[4]};
  border-radius: 999999px;
  background: ${colors.black};

  ${(p) =>
    p.light &&
    css`
      background: ${colors.white};
      color: ${colors.black};
    `}
`;

export default AnchorButton;
