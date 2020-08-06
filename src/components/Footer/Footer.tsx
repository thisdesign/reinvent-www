import React from "react";
import S from "./Footer.Styled";
import { Container } from "components";
import { SiteSchema } from "types";
import Logo from "components/Logo/Logo";

const Footer: React.FC<{ data: SiteSchema }> = ({ data }) => {
  return (
    <S.Wrapper>
      <Container>
        <S.Inner>
          <Logo />
          <div>
            &copy; {new Date().getFullYear()} {data.title}
          </div>
          <div>Reinvent Capital is not open to new investors.</div>
        </S.Inner>
      </Container>
    </S.Wrapper>
  );
};

export default Footer;
