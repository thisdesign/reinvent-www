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
          <S.BottomWrap>
            <div>Reinvent Capital is not open to new investors.</div>
            <ul>
              <li>
                <a href="#companies">Companies</a>
              </li>
              <li>
                <a href="#team">Our Team</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </S.BottomWrap>
        </S.Inner>
      </Container>
    </S.Wrapper>
  );
};

export default Footer;
