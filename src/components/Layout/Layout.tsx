import React from "react";
import GlobalStyle from "style/GlobalStyle";
import S from "./Layout.Styled";

const Layout: React.FC<{
  title: string | null;
  theme?: "black" | "yellow";
}> = ({ title, children, theme = "yellow" }) => {
  return (
    <div>
      <GlobalStyle theme={theme} />
      <S.Wrapper>
        <div>{children}</div>
      </S.Wrapper>
    </div>
  );
};

export default Layout;
