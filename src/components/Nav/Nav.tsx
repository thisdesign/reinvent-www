import React from "react";
import { SpaceBetween, Head } from "components";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav: React.FC = () => {
  const { route } = useRouter();
  const path = route.replace("/", "");

  return (
    <SpaceBetween as="ul">
      {[
        {
          slug: "about",
          title: "About",
        },
        {
          slug: "books",
          title: "Book List",
        },
        {
          slug: "contact",
          title: "Contact",
        },
      ].map(({ slug, title }) => (
        <Head as="li" invert={slug === path}>
          <Link href={`/${slug}`}>
            <a>{title}</a>
          </Link>
        </Head>
      ))}
    </SpaceBetween>
  );
};

export default Nav;
