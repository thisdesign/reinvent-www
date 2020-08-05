import styled, { css } from "styled-components";
import { fontSizes } from "style";

type HeadProps = { as: string; center?: boolean; invert?: boolean };

const SHARED_PROPS = css<HeadProps>`
  text-align: ${(p) => p.center && "center"};
  color: ${(p) => p.invert && `var(--color-highlight)`};
`;

export const Head = styled.div<HeadProps>`
  ${SHARED_PROPS};
  font-size: ${fontSizes.lg};
`;

export const Small = styled.div<HeadProps>`
  ${SHARED_PROPS};
  font-size: ${fontSizes.xs};
`;
