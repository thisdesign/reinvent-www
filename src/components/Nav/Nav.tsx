import React, { useState } from "react";
import S from "./Nav.Styled";
import { Logo } from "components";
import { useGlobalData } from "hooks";
import Link from "next/link";

const Nav: React.FC<{ slug: string }> = ({ slug }) => {
  const { site } = useGlobalData();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = (
    <>
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
    </>
  );

  return (
    <S.Wrapper>
      <S.Inner>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <S.Links>{links}</S.Links>
        <S.Hamburger onClick={() => setMobileMenuOpen(true)}>Menu</S.Hamburger>
      </S.Inner>
      {isMobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)}>
          {links}
        </MobileMenu>
      )}
    </S.Wrapper>
  );
};

const container = {
  hidden: { opacity: 0, y: ".\rem" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const MobileMenu: React.FC<{ onClose: () => void }> = ({
  children,
  onClose,
}) => {
  return (
    <S.MobileMenu variants={container} initial="hidden" animate="visible">
      <S.MobileMenuBar onClick={onClose}>
        <div>×</div>
      </S.MobileMenuBar>
      <S.MobileMenuContent onClick={onClose}>{children}</S.MobileMenuContent>
    </S.MobileMenu>
  );
};

export default Nav;
