import styled, { css } from "styled-components";
import { size, colors } from "style";
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
${SHARED_PROPS}
  font-size: ${size[5]};
  line-height: 0.8;

  @media ${mq.sm}{
  font-size: ${size[6]};
}
`;

export const MediumHead = styled.h3`
${SHARED_PROPS}
  font-size: ${size[3]};
  line-height: 1.1;
  max-width:10em;

  @media ${mq.sm}{
    font-size: ${size[4]};
  }
`;

export const Support = styled.p`
  ${SHARED_PROPS}
  color: ${colors.grey};
  line-height: 1.2;
  font-size: ${size[1]};
  max-width: 15em;

  @media ${mq.sm}{
  font-size: ${size[2]};
  }
`;

export const Eyebrow = styled.h2`
  ${SHARED_PROPS}
  color: ${colors.grey};
  font-size:${size[0]};
  margin-bottom: 0;

`;
