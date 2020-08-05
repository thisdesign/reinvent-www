import React, { useEffect, useRef, useState } from "react";
import S from "./Nav.Styled";
import { ArrowDown, Logo } from "components";

const Nav = () => {
  const [isScrolled, setScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const checkPos = () => {
      if (ref.current) {
        const { y } = ref.current.getBoundingClientRect();
        const state = y > 0;

        setScrolled(state);
      }
    };

    checkPos();

    document.addEventListener("scroll", checkPos);
    return () => {
      document.removeEventListener("scroll", checkPos);
    };
  }, []);

  return (
    <S.Wrapper ref={ref}>
      <S.LogoWrap active={!isScrolled}>
        <ArrowDown />
      </S.LogoWrap>
      <S.LogoWrap active={isScrolled}>
        <Logo />
      </S.LogoWrap>
      <div></div>

      <S.ItemWrap>
        <li>Companies</li>
        <li>Our Team</li>
        <li>Contact</li>
      </S.ItemWrap>
    </S.Wrapper>
  );
};

export default Nav;
