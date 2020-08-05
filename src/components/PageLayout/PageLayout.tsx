import React from "react";
import { Title, Nav, Small } from "components";
import S from "./PageLayout.Styled";

const PageLayout = ({ children }) => {
  return (
    <S.Wrapper>
      <div>
        <Title />
        <Nav />
      </div>
      <S.Content>{children}</S.Content>
      <Small as="p" center>
        (c) 2020 Little Black Libraries{" "}
      </Small>
    </S.Wrapper>
  );
};

export default PageLayout;
