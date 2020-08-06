import styled from "styled-components";
import { colors, size } from "style";
import mq from "style/mq";

const Wrapper = styled.div`
  background: ${colors.black};
  color: ${colors.grey};

  svg {
    height: ${size[2]};
    display: block;
    margin-bottom: ${size[8]};

    * {
      fill: white;
    }
  }
`;

const Inner = styled.div`
  padding: ${size.standardY} ${size.standard};
`;

const BottomWrap = styled.div`
  @media ${mq.sm} {
    display: flex;
    justify-content: space-between;
  }

  a {
    color: ${colors.white};
  }

  ul {
    display: flex;
    margin-top: ${size[0]};

    @media ${mq.sm} {
      margin-top: 0;
    }

    li {
      margin-right: ${size[0]};

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
export default {
  BottomWrap,
  Inner,
  Wrapper,
};
