import React from "react";
import { LargeHead, Support } from "components";
import S from "./Hero.Styled";
import Logo from "components/Logo/Logo";

const Hero = () => {
  return (
    <>
      <S.LogoWrap>
        <Logo />
      </S.LogoWrap>
      <S.Wrapper>
        <LargeHead>Venture at scale.</LargeHead>
        <Support>Maecenas sed diam eget risus varius blandit sit amet.</Support>
      </S.Wrapper>
    </>
  );
};

export default Hero;
