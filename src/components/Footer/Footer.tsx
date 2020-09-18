import React from "react";
import S from "./Footer.Styled";
import { Container } from "components";
import { SiteSchema } from "types";
import Logo from "components/Logo/Logo";
import { useGlobalData } from "hooks";
import Link from "next/link";

const Footer: React.FC<{ data: SiteSchema }> = ({ data }) => {
  const { site } = useGlobalData();
  return (
    <S.Wrapper>
      <Container>
        <S.Inner>
          <Logo />

          <div>
            <S.Info>
              <div>
                <ul>
                  <li>
                    <Link href="/[slug]" as={`/terms`}>
                      <a>Terms of Service</a>
                    </Link>
                  </li>
                </ul>
                <div>For inquiries contact:</div>
                <div>{data.contactEmail}</div>
              </div>
              <ul>
                <li>
                  <Link href="/#about">
                    <a>About</a>
                  </Link>
                </li>
                {site.primaryNav.map((navItem) => (
                  <li key={navItem.title}>
                    <Link href="/[slug]" as={`/${navItem.slug.current}`}>
                      <a>{navItem.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </S.Info>
          </div>
          <div></div>
          <div>
            <div>Reinvent Capital is not open to new investors.</div>
            <div>
              &copy; {new Date().getFullYear()} {data.title}
            </div>
          </div>
        </S.Inner>
      </Container>
    </S.Wrapper>
  );
};

export default Footer;
