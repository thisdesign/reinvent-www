import styled from "styled-components";
import { colors, size } from "style";
import mq from "style/mq";

const About = styled.div`
  display: flex;
  padding: ${size.standardY} ${size.standard};
  justify-content: center;
  background: ${colors.ltGrey};

  h3 {
    text-align: center;
    margin-bottom: ${size[0]};
    max-width: 30em;
    color: ${colors.grey};

    @media ${mq.sm} {
      font-size: ${size[1]};
    }
  }
`;

export default { About };
