import { Layout, Modules } from "components";
import { getSite } from "lib/api";
import client from "lib/sanity";
import { GetStaticProps } from "next";
import { PageSchema } from "types";

const Home: React.FC<{ data: PageSchema }> = ({ data }) => {
  return (
    <Layout slug="about">
      <Modules data={data.modules || []} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.fetch(
    `*[_type == 'page' && slug.current == $slug][0]`,
    { slug: "home" }
  );

  return {
    props: { data },
  };
};

export default Home;
