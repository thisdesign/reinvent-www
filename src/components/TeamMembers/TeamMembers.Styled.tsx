import styled from "styled-components";
import { size, colors, zIndex } from "style";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10%;
  margin: ${size.standard};

  img {
    width: 100%;
    border-radius: ${size[0]};
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
  ProfileTitleWrap,
  NavWrap,
  ModalInner,
  JobTitle,
  ModalOuter,
  Wrapper,
};
