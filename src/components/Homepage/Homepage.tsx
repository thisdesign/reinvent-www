import React from "react";
import { Nav, Title } from "components";
import S from "./Homepage.Styled";

const Homepage: React.FC = ({ children }) => {
  return (
    <S.Wrapper>
      <Title />
      <S.OpenSpace>
        <img src="/img.svg" />
        {children}
      </S.OpenSpace>
      <Nav />
    </S.Wrapper>
  );
};

export default Homepage;
