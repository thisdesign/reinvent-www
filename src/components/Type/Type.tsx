import styled, { css } from "styled-components";
import { size, colors } from "style";

type HeadingProps = {
  center?: boolean;
};

const SHARED_PROPS = css<HeadingProps>`
  margin: ${(p) => p.center && "0 auto"};
  text-align: ${(p) => (p.center ? "center" : "left")};
  margin-bottom: ${size.sm};
`;

export const LargeHead = styled.h1`
${SHARED_PROPS}
  font-size: ${size[6]};
  line-height: 0.8;
`;

export const MediumHead = styled.h3`
${SHARED_PROPS}
  font-size: ${size[4]};
  line-height: 1.1;
  max-width:10em;
`;

export const Support = styled.p`
  ${SHARED_PROPS}
  color: ${colors.grey};
  line-height: 1.2;
  font-size: ${size[2]};
  max-width: 15em;
`;

export const Eyebrow = styled.h2`
  ${SHARED_PROPS}
  color: ${colors.grey};
  font-size:${size[0]};

`;
