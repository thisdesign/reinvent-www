import styled, { css } from "styled-components";
import { size, colors } from "style";

const SHARED_PROPS = css`
  margin-bottom: ${size.sm};
  display: inline-block;
`;

export const LargeHead = styled.h1`
${SHARED_PROPS}
  font-size: ${size[6]};
  line-height: 0.8;
`;

export const MediumHead = styled.h2`
${SHARED_PROPS}
  font-size: ${size[4]};
  line-height: 0.8;
`;

export const Support = styled.p`
  ${SHARED_PROPS}
  color: ${colors.grey};
  line-height: 1.2;
  font-size: ${size[2]};
  max-width: 15em;
`;
