import React from "react";
import Head from "next/head";
import { useGlobalData } from "hooks";
import { SanityImage } from "types";
import { urlFor } from "lib/sanity";

export type SeoProps = {
  title: string | null;
  route: string;
  description: string | null;
  image: string | SanityImage | null;
};

const formatForSeo = (img: SanityImage) =>
  urlFor(img).width(1200).height(630).quality(70).format("jpg").url();

const Seo: React.FC<SeoProps> = ({
  title: pageTitle,
  route,
  description: pageDescription,
  image: pageImage,
}) => {
  const { site } = useGlobalData();
  const title = pageTitle ? `${pageTitle} - ${site.title}` : site.title;
  const siteUrl = `${site.url}${route}`;
  const image = (() => {
    if (typeof pageImage === "string") return pageImage;
    else if (pageImage?._type === "image") {
      return formatForSeo(pageImage);
    }
    return formatForSeo(site.previewImage);
  })();
  const description = pageDescription || site.metaDescription;

  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={siteUrl} />
      <meta property="og:url" content={siteUrl} />
      <meta httpEquiv="Accept-CH" content="DPR, Width, Viewport-Width" />
      {description && <meta name="description" content={description} />}
      {/* Opengraph */}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:title" content={title} />
      <meta property="og:locale" content="en_US" />
      {/* <meta property="og:site_name" content={shortTitle} /> */}
      <meta property="og:type" content="page" />
      {description && <meta property="og:description" content={description} />}
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image:src" content={image} />}
      <meta name="twitter:url" content={siteUrl} />
    </Head>
  );
};

export default Seo;
