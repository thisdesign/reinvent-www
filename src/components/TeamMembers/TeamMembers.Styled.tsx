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

const TeamMemberBio = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background: ${colors.white};
  width: 30rem;
  max-height: 90vh;
  overflow: scroll;
  z-index: 200;
  padding: ${size.standard};
  border-radius: ${size.sm};

  img {
    width: 100px;
  }
`;

const Shadow = styled.div`
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  z-index: 0;
`;

export default {
  Shadow,
  JobTitle,
  TeamMemberBio,
  Wrapper,
};
