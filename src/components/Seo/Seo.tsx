import React from "react";
import Head from "next/head";

const Seo: React.FC<{
  title: string;
  description: string;
  url: string;
}> = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta charSet="utf-8" />
      <meta property="og:locale" content="en_US" />
    </Head>
  );
};

export default Seo;
