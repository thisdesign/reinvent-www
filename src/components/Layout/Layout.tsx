import Nav from "components/Nav/Nav";
import React from "react";
import GlobalStyle from "style/GlobalStyle";
import S from "./Layout.Styled";

const Layout: React.FC<{ slug: string }> = ({ children, slug }) => {
  return (
    <div>
      <GlobalStyle />
      <Nav slug={slug} />
      <S.Main>{children}</S.Main>
    </div>
  );
};

export default Layout;
