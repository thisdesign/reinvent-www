import styled from "styled-components";
import { size } from "style";
import mq from "style/mq";

const Wrapper = styled.div`
  min-height: 80vh;

  @media ${mq.md} {
    display: grid;
    grid-template-columns: auto 30rem;
    align-items: center;
    grid-gap: ${size[0]};
  }
`;

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 ${size.standard};

  @media ${mq.md} {
    margin-right: 0;
  }

  img {
    width: 33%;
    opacity: 0.5;
    transform: scale(1.1);
  }
`;

export default {
  ImgWrap,
  Wrapper,
};
