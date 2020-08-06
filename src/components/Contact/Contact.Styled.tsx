import styled from "styled-components";
import { size } from "style";

const Wrapper = styled.div<{ bg: string }>`
  background-image: ${(p) => `url(${p.bg})`};
  background-position: center;
  background-size: cover;
  padding: ${size.standard};
  margin-top: ${size.standard};

  * {
    color: white;
  }
`;

export default {
  Wrapper,
};
