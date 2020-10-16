import styled, { css } from "styled-components";
import { size } from "style";
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
  font-size: ${size[2]};

  @media ${mq.sm} {
    font-size: ${size[3]};
  }
`;

export const IntroHead = styled.h2<HeadingProps>`
  ${SHARED_PROPS};
  font-size: ${size[2]};
  font-weight: 400;
  max-width: 30em;
`;

export const HomepageHeroText = styled.h1<HeadingProps>`
  ${SHARED_PROPS};
  font-size: ${size[3]};
  line-height: 1;
  max-width: 18em;

  em {
    font-weight: 300;
  }

  @media ${mq.md} {
    font-size: ${size[4]};
  }
  @media ${mq.lg} {
    font-size: ${size[4]};
  }
`;
