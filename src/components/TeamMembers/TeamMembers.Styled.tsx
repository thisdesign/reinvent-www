import styled from "styled-components";
import { size, colors } from "style";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${size[0]};
  margin: ${size.standard};

  img {
    width: 100%;
    border-radius: ${size[2]};
    display: block;
    margin-bottom: ${size[0]};
  }

  li {
    cursor: pointer;
  }
`;

const JobTitle = styled.div`
  color: ${colors.grey};
`;

export default {
  JobTitle,
  Wrapper,
};
