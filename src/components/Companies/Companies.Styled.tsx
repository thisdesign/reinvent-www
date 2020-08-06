import styled from "styled-components";
import { size } from "style";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;
  padding: ${size.standard};
  grid-gap: ${size[0]};
`;

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  img {
    width: 50%;
    opacity: 0.5;
  }
`;

export default {
  ImgWrap,
  Wrapper,
};
