import styled from "styled-components";
import { colors, size } from "style";

const Wrapper = styled.div`
  background: ${colors.black};
  color: ${colors.grey};

  svg {
    width: 200px;
    display: block;

    * {
      fill: white;
    }
  }
`;

const Inner = styled.div`
  padding: ${size.standard};
`;

export default {
  Inner,
  Wrapper,
};
