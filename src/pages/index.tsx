import {
  TextBlock,
  Layout,
  Hero,
  Nav,
  ImageBreak,
  TeamMembers,
} from "components";
import { getSite } from "lib/api";
import { SiteSchema } from "types";

const Home: React.FC<{ site: SiteSchema }> = ({ site }) => {
  return (
    <Layout>
      <Hero />
      <Nav />
      <ImageBreak layout="RIGHT" src={site.introImage} alt={site.title} />
      <TextBlock
        center
        eyebrow={site.companies.eyebrow}
        head={site.companies.main}
        support={site.companies.support}
      />
      <ImageBreak layout="FULL" src={site.imageBreak} alt={site.title} />
      <TextBlock
        center
        eyebrow={site.team.eyebrow}
        head={site.team.main}
        support={site.team.support}
      />

      <TeamMembers members={site.team.members} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const site = await getSite();

  return { props: { site } };
};

export default Home;
