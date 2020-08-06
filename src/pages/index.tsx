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
        eyebrow="Team"
        head="Maecenas sed diam eget"
        support="Maecenas sed diam eget risus varius blandit sit amet."
      />
      <ImageBreak layout="FULL" src={site.imageBreak} alt={site.title} />
      <TextBlock
        center
        eyebrow="Team"
        head="Maecenas sed diam eget"
        support="Maecenas sed diam eget risus varius blandit sit amet."
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
