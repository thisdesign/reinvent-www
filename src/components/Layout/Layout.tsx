import Nav from "components/Nav/Nav";
import Seo, { SeoProps } from "components/Seo/Seo";
import React from "react";
import GlobalStyle from "style/GlobalStyle";
import S from "./Layout.Styled";

const Layout: React.FC<{ slug: string } & SeoProps> = ({
  children,
  slug,
  title,
  description,
  route,
  image,
}) => {
  return (
    <div>
      <Seo {...{ title, description, route, image }} />
      <GlobalStyle />
      <Nav slug={slug} />
      <S.Main>{children}</S.Main>
    </div>
  );
};

export default Layout;
