import client from "lib/sanity";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import { PageSchema } from "types";
import Error from "next/error";
import { Layout, Modules } from "components";

const PageTemplate: NextPage<{ data: PageSchema; slug: string }> = ({
  data,
  slug,
}) => {
  return (
    <Layout
      slug={slug}
      title={data.title}
      route={`/${slug}`}
      image={null}
      description={null}
    >
      {" "}
      {data ? (
        <>
          {/* TODO: add seo to this */}
          <Modules data={data.modules || []} />
        </>
      ) : (
        <Error statusCode={404} />
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug?.toString();
  const data = await client.fetch(
    `*[_type == 'page' && slug.current == $slug][0]`,
    { slug }
  );

  return { props: { data, slug } };
};

export const getStaticPaths = async () => {
  const paths: PageSchema[] = await client.fetch(`*[_type == 'page']`);

  return {
    paths: paths.map((path) => `/${path.slug.current}`),
    fallback: false,
  };
};

export default PageTemplate;
