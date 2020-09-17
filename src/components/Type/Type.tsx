import styled, { css } from "styled-components";
import { size, fontFamilies } from "style";
import mq from "style/mq";

type HeadingProps = {
  center?: boolean;
};

const SHARED_PROPS = css<HeadingProps>`
  margin: ${(p) => p.center && "0 auto"};
  text-align: ${(p) => (p.center ? "center" : "left")};
  margin-bottom: ${size.sm};
`;

export const LargeHead = styled.h1`
  ${SHARED_PROPS};
  font-size: ${size[4]};
  line-height: 0.8;

  @media ${mq.sm} {
    font-size: ${size[5]};
  }
`;

export const MediumHead = styled.h3`
  ${SHARED_PROPS};
  font-size: ${size[3]};
  line-height: 1.1;
  max-width: 10em;

  @media ${mq.sm} {
    font-size: ${size[4]};
  }
`;

export const IntroHead = styled.h2<HeadingProps>`
  ${SHARED_PROPS};
  font-family: ${fontFamilies.display};
  font-size: ${size[2]};
  font-weight: 400;
  max-width: 20em;
`;
