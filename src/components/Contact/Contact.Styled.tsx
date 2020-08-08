import styled from "styled-components";
import { size, colors } from "style";

const Wrapper = styled.div`
  background-color: ${colors.ltBlue};
  background-position: center;
  background-size: cover;
  padding: calc(${size.standard} * 2);
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin-top: ${size[0]};
  }

  * {
    color: white;
  }
`;

export default {
  Wrapper,
};
