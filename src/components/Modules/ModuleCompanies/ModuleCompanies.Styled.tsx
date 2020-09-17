import styled from "styled-components";
import { size } from "style";
import mq from "style/mq";

const Wrapper = styled.div``;

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 ${size.standard};
  max-width: ${size.maxWidth};
  margin: 0 auto;
  width: 100%;

  img {
    width: 50%;
    opacity: 0.7;
    align-self: center;

    @media ${mq.sm} {
      width: 33%;
    }
  }
`;

export default {
  ImgWrap,
  Wrapper,
};
