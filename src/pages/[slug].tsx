import client from "lib/sanity";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import { PageSchema } from "types";
import Error from "next/error";
import { Modules } from "components";

const PageTemplate: NextPage<{ data: PageSchema }> = ({ data }) => {
  if (!data) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {/* TODO: add seo to this */}
      {data.title}
      <Modules data={data.modules || []} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await client.fetch(
    `*[_type == 'page' && slug.current == $slug][0]`,
    { slug: ctx.params.slug.toString() }
  );

  return { props: { data } };
};

export const getStaticPaths = async () => {
  const paths: PageSchema[] = await client.fetch(`*[_type == 'page']`);

  return {
    paths: paths.map((path) => `/${path.slug.current}`),
    fallback: false,
  };
};

export default PageTemplate;
