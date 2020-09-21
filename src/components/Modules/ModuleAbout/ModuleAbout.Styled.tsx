import styled from "styled-components";
import { size } from "style";

const About = styled.div`
  display: flex;
  max-width: ${size.maxWidth};
  margin: ${size.standardY} auto;
  justify-content: center;
  padding: 0 ${size.standard};

  h3 {
    font-size: ${size[1]};
    text-align: center;
    margin-bottom: ${size[0]};
    max-width: 30em;
  }
`;

export default { About };
