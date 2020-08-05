import React from "react";
import { SpaceBetween, Head } from "components";
import Link from "next/link";

const Title = () => {
  return (
    <Link href="/">
      <a>
        <SpaceBetween as="ul">
          <Head as="li">Little</Head>
          <Head as="li">Black</Head>
          <Head as="li">Libraries</Head>
        </SpaceBetween>
      </a>
    </Link>
  );
};

export default Title;
