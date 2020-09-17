import React from "react";
import S from "./Nav.Styled";
import { Logo } from "components";
import { useGlobalData } from "hooks";
import Link from "next/link";

const Nav: React.FC<{ slug: string }> = ({ slug }) => {
  const { site } = useGlobalData();

  return (
    <S.Wrapper>
      <S.Inner>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <S.Links>
          <Link href="/#about">
            <S.Link active={slug === "about"}>About</S.Link>
          </Link>
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
      </S.Inner>
    </S.Wrapper>
  );
};

export default Nav;
