import styled from "styled-components";
import { size } from "style";
import mq from "style/mq";

const Wrapper = styled.div``;

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 ${size.standard};
  width: 100%;

  img {
    width: 50%;
    opacity: 0.5;
    align-self: center;

    @media ${mq.sm} {
      width: 25%;
    }
  }
`;

export default {
  ImgWrap,
  Wrapper,
};
