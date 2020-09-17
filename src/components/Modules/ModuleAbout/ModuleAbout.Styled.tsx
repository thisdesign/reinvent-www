import styled from "styled-components";
import { size, colors } from "style";
import mq from "style/mq";

const About = styled.div`
  @media ${mq.sm} {
    display: flex;
  }

  max-width: ${size.maxWidth};
  margin: ${size.standardY} auto;
  align-items: center;
`;

const ImageWrap = styled.div`
  flex: 3;
`;

const TextWrap = styled.div`
  flex: 4;
  margin: ${size.standard};
`;

const SignatureWrap = styled.div`
  text-align: center;
  font-size: ${size[-1]};
  margin-top: ${size.standardY};

  span {
    color: ${colors.blue};
  }

  img {
    width: 60%;
  }
`;

export default { SignatureWrap, TextWrap, ImageWrap, About };
