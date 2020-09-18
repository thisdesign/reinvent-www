import styled from "styled-components";
import { colors, ease, size } from "style";
import mq from "style/mq";

const Wrapper = styled.div`
  margin: ${size.standardY} 0;
`;

const ANIM_TIME = "300ms";

const Statement = styled.div`
  padding: ${size[0]};
  font-size: ${size[-1]};
  text-align: center;
  color: white;
  opacity: 0;
  transition: ${ANIM_TIME} transform ${ease.standard},
    ${ANIM_TIME} opacity ${ease.standard};
  @media ${mq.md} {
    transform: translateY(-4.5rem);
  }
`;

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
      opacity: 0.7;
      transition: filter ${ANIM_TIME} ${ease.standard},
        opacity ${ANIM_TIME} ${ease.standard},
        transform ${ANIM_TIME} ${ease.standard};
      transform: translateY(${size[0]});
    }

    &:hover {
      background: ${colors.blue};

      img {
        filter: invert(1);
        opacity: 1;
        transform: translateY(0);
      }

      ${Statement} {
        @media ${mq.md} {
          transform: translateY(-4rem);
        }
        opacity: 1;
      }
    }
  }
`;

export default {
  Statement,
  ImgWrap,
  Wrapper,
};
