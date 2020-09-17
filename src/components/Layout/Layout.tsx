import Nav from "components/Nav/Nav";
import React from "react";
import GlobalStyle from "style/GlobalStyle";
import S from "./Layout.Styled";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <S.Main>{children}</S.Main>
    </div>
  );
};

export default Layout;
