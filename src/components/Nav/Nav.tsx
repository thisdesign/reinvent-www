import React from "react";
import S from "./Nav.Styled";
import { Logo } from "components";
import { useGlobalData } from "hooks";
import Link from "next/link";

const Nav = () => {
  const { site } = useGlobalData();

  return (
    <S.Wrapper>
      <Logo />
      <S.Links>
        {site.primaryNav.map((navItem) => (
          <Link
            key={navItem.title}
            href="/[slug]"
            as={`/${navItem.slug.current}`}
          >
            <a>{navItem.title}</a>
          </Link>
        ))}
      </S.Links>
    </S.Wrapper>
  );
};

export default Nav;
