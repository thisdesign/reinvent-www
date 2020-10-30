import { LargeHead } from "components/Type/Type";
import { size, colors } from "style";
import mq from "style/mq";
import styled from "styled-components";

const Head = styled.div`
  margin: ${size.standardY} auto;
  text-align: center;
`;

const Bullet = styled.div`
  margin-top: ${size.sm};
  max-width: 48rem;
  margin: 0 auto;

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
    flex-direction: row-reverse;
  }
`;

const IconPane = styled.div`
  img {
    width: ${size[6]};
    margin-bottom: ${size[2]};
  }
  ${LargeHead} {
    margin-bottom: ${size[2]};
  }
`;

const TextPane = styled.div`
  @media ${mq.sm} {
    width: 50%;
  }

  h3 {
    max-width: 12em;
  }
`;

export default { Head, Bullet, BulletInner, IconPane, TextPane };
