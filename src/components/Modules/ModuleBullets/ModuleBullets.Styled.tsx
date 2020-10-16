import { LargeHead } from "components/Type/Type";
import { size, colors } from "style";
import mq from "style/mq";
import styled from "styled-components";

const Bullet = styled.div`
  background: ${colors.ltBlue};
  margin-top: ${size.sm};

  p {
    color: ${colors.charcoal};
  }
`;

const BulletInner = styled.div`
  max-width: ${size.maxWidth};
  margin: 0 auto;
  padding: ${size.standardY} ${size.standard};

  @media ${mq.sm} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const TextPane = styled.div`
  flex: 1;

  ${LargeHead} {
    margin-bottom: ${size[2]};
  }
`;

const LeftPane = styled.div`
  flex: 1;

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
