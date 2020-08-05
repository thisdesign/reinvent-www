import styled from "styled-components";
import { size, colors } from "style";

export const LargeHead = styled.h1`
  font-size: ${size[7]};
  line-height: 1.1;
`;

export const Support = styled.p`
  color: ${colors.grey};
  line-height: 1.3;
  font-size: ${size[2]};
  max-width: 15em;
`;
