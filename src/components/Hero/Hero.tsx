import React from "react";
import { MediumHead } from "components";
import S from "./Hero.Styled";
import Logo from "components/Logo/Logo";

const Hero = () => {
  return (
    <>
      <S.LogoWrap>
        <Logo />
      </S.LogoWrap>
      <S.Wrapper>
        <MediumHead as="h1">
          We invest in and advise bold leaders of category leading companies
          that grow and innovate at scale.
        </MediumHead>
      </S.Wrapper>
    </>
  );
};

export default Hero;
