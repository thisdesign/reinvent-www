import React from "react";
import GlobalStyle from "style/GlobalStyle";
import S from "./Layout.Styled";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
