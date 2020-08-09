import React from "react";
import { MediumHead } from "components";
import S from "./Hero.Styled";
import Logo from "components/Logo/Logo";

const Hero: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <S.Wrapper>
        <MediumHead as="h1">{text}</MediumHead>
      </S.Wrapper>
    </>
  );
};

export default Hero;
