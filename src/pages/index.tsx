import { Layout, Hero, Nav, ImageBreak } from "components";
import { getSite } from "lib/api";
import { SiteSchema } from "types";

const Home: React.FC<{ site: SiteSchema }> = ({ site }) => {
  console.log(JSON.stringify(site.team.members[0]));

  return (
    <Layout>
      <Hero />
      <Nav />
      <ImageBreak />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const site = await getSite();

  return { props: { site } };
};

export default Home;
