import { LargeHead } from "components/Type/Type";
import { size, colors } from "style";
import mq from "style/mq";
import styled from "styled-components";

const Bullet = styled.div`
  background: ${colors.ltGrey};
  margin-top: ${size.sm};
`;

const BulletInner = styled.div`
  max-width: ${size.maxWidth};
  margin: 0 auto;
  padding: ${size.standardY} ${size.standard};

  @media ${mq.sm} {
    display: flex;
  }
`;

const TextPane = styled.div`
  flex: 1;

  ${LargeHead} {
    margin-bottom: ${size[2]};
  }
`;

const ImagePane = styled.div`
  flex: 1;

  img {
    width: 4rem;
    margin-bottom: ${size[0]};
  }
`;

export default {
  Bullet,
  BulletInner,
  TextPane,
  ImagePane,
};
