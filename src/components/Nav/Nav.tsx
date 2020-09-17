import React from "react";
import S from "./Nav.Styled";
import { Logo } from "components";
import { useGlobalData } from "hooks";
import Link from "next/link";

const Nav: React.FC<{ slug: string }> = ({ slug }) => {
  const { site } = useGlobalData();

  return (
    <S.Wrapper>
      <Logo />
      <S.Links>
        <S.Link href="/#about" active={slug === "about"}>
          About
        </S.Link>
        {site.primaryNav.map((navItem) => (
          <Link
            key={navItem.title}
            href="/[slug]"
            as={`/${navItem.slug.current}`}
          >
            <S.Link active={slug === navItem.slug.current}>
              {navItem.title}
            </S.Link>
          </Link>
        ))}
      </S.Links>
    </S.Wrapper>
  );
};

export default Nav;
