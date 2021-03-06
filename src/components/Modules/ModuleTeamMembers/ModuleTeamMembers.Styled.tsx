import styled from "styled-components";
import { size, colors, zIndex } from "style";
import mq from "style/mq";

const Wrapper = styled.ul`
  max-width: ${size.maxWidth};
  margin: ${size.standardY} auto;

  padding: 0 ${size.standard};
`;

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -3%;

  @media ${mq.sm} {
    justify-content: center;
  }

  li {
    cursor: pointer;
    flex-basis: 50%;
    padding: 3%;

    @media ${mq.sm} {
      flex-basis: 33.3%;
    }
  }

  img {
    width: 100%;
    border-radius: ${size[0]};
    display: block;
    margin-bottom: ${size[0]};
  }
`;

const JobTitle = styled.div`
  color: ${colors.grey};
`;

const ModalOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${zIndex.modalWindow};
  padding: ${size.standard};
  background: rgba(0, 0, 0, 0.25);
  overflow: scroll;

  img {
    width: 100px;
  }
`;

const ModalInner = styled.div`
  border-radius: ${size.sm};
  background: ${colors.white};
  max-width: 40rem;
  margin: 0 auto;
  position: relative;
  z-index: ${zIndex.modalWindow};
  padding: ${size.standard};

  > div {
    max-width: 28rem;
    margin: 0 auto;
  }
`;

const Close = styled.div`
  font-size: ${size[2]};
  position: absolute;
  top: 0;
  right: 0;
  padding: ${size[-1]} ${size[0]};
  color: ${colors.grey};
  cursor: pointer;
`;

const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${size.standard};

  > div {
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      margin: 0 ${size.sm};
    }
  }
`;

const ProfileTitleWrap = styled.div`
  display: flex;
  margin-bottom: ${size[2]};
  align-items: center;

  img {
    margin-right: ${size[0]};
    border-radius: ${size[-2]};
  }
`;

export default {
  Grid,
  Close,
  ProfileTitleWrap,
  NavWrap,
  ModalInner,
  JobTitle,
  ModalOuter,
  Wrapper,
};
