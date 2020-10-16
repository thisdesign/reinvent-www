import { Layout, Modules } from "components";
import { getPage } from "lib/api";
import { GetStaticProps } from "next";
import { PageSchema } from "types";

const Home: React.FC<{ data: PageSchema }> = ({ data }) => {
  return (
    <Layout slug="home" title={null} route="/" image={null} description={null}>
      <Modules data={data.modules || []} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPage("home");

  return {
    props: { data },
  };
};

export default Home;
