import styled from "styled-components";
import { colors, ease, size } from "style";
import mq from "style/mq";

const Wrapper = styled.div`
  margin: ${size.standardY} 0;
`;

const ANIM_TIME = "300ms";

const ImgWrap = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 ${size.standard};
  max-width: ${size.maxWidth};
  margin: 0 auto;
  width: 100%;

  li {
    width: 50%;
    align-self: center;
    cursor: pointer;
    transition: background 200ms ${ease.standard};
    border-radius: ${size[0]};

    @media ${mq.sm} {
      width: 33%;
    }

    img {
      transition: filter ${ANIM_TIME} ${ease.standard},
        transform ${ANIM_TIME} ${ease.standard};
      transform: translateY(${size.xs});
      display: block;
    }

    &:hover {
      background: ${colors.blue};

      img {
        filter: brightness(0) invert(1);
        transform: translateY(0);
      }
    }
  }
`;

export default {
  ImgWrap,
  Wrapper,
};
