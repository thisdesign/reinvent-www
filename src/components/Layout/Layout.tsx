import React from "react";
import GlobalStyle from "style/GlobalStyle";
import S from "./Layout.Styled";

const Layout: React.FC = ({ children }) => {
  return (
    <S.Wrapper>
      <GlobalStyle />
      <main>{children}</main>
    </S.Wrapper>
  );
};

export default Layout;
