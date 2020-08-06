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

        setScrolled(!state);
      }
    };

    checkPos();

    document.addEventListener("scroll", checkPos);
    return () => {
      document.removeEventListener("scroll", checkPos);
    };
  }, []);

  return (
    <S.Wrapper ref={ref} active={isScrolled}>
      <S.LogoWrap active={isScrolled}>
        <ArrowDown />
      </S.LogoWrap>
      <S.LogoWrap active={!isScrolled}>
        <Logo />
      </S.LogoWrap>
      <div></div>

      <S.ItemWrap>
        <li>
          <a href="#companies">Companies</a>
        </li>
        <li>
          <a href="#team">Our Team</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </S.ItemWrap>
    </S.Wrapper>
  );
};

export default Nav;
