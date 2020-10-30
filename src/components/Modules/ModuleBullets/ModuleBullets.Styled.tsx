import { LargeHead } from "components/Type/Type";
import { size, colors } from "style";
import mq from "style/mq";
import styled from "styled-components";

const Bullet = styled.div`
  margin-top: ${size.sm};

  p {
    color: ${colors.charcoal};
  }
`;

const BulletInner = styled.div`
  max-width: ${size.maxWidth};
  margin: calc(${size.standardY} * 1.5) ${size.standard};

  @media ${mq.sm} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const TextPane = styled.div`
  img {
    width: ${size[6]};
  }
  ${LargeHead} {
    margin-bottom: ${size[2]};
  }
`;

const LeftPane = styled.div`
  @media ${mq.sm} {
    width: 50%;
  }

  h3 {
    max-width: 12em;
  }
`;

export default {
  Bullet,
  BulletInner,
  TextPane,
  LeftPane,
};
