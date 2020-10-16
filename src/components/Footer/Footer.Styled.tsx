import styled from "styled-components";
import { colors, size } from "style";
import mq from "style/mq";

const Wrapper = styled.div`
  background: ${colors.blue};
  color: ${colors.white};

  svg {
    height: ${size[2]};
    display: block;
    margin-bottom: ${size[8]};

    * {
      fill: ${colors.white};
    }
  }
`;

const Inner = styled.div`
  padding: ${size.standardY} ${size.standard};

  display: grid;
  grid-gap: ${size[0]};

  @media ${mq.sm} {
    grid-template-columns: 2fr 3fr;
  }
`;

const Info = styled.div`
  display: grid;
  grid-gap: ${size[0]};

  @media ${mq.sm} {
    grid-template-columns: 1fr 1fr;
  }

  li {
    margin-bottom: ${size.xs};
  }

  ul {
    margin-bottom: ${size[0]};
  }
`;

export default {
  Info,
  Inner,
  Wrapper,
};
