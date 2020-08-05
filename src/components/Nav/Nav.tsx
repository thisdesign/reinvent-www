import React from "react";
import S from "./Nav.Styled";
import { ArrowDown } from "components";

const Nav = () => {
  return (
    <S.Wrapper>
      <div>
        <ArrowDown />
      </div>
      <S.ItemWrap>
        <li>Companies</li>
        <li>Our Team</li>
        <li>Contact</li>
      </S.ItemWrap>
    </S.Wrapper>
  );
};

export default Nav;
