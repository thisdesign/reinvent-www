import {
  TextBlock,
  Layout,
  Hero,
  Nav,
  ImageBreak,
  TeamMembers,
  Anchor,
  Companies,
  Contact,
} from "components";
import { getSite } from "lib/api";
import { SiteSchema } from "types";

const Home: React.FC<{ site: SiteSchema }> = ({ site }) => {
  return (
    <Layout>
      <Hero />
      <Nav />
      <ImageBreak layout="RIGHT" src={site.introImage} alt={site.title} />
      <Anchor id="companies" />
      <Companies data={site.companies} />
      <ImageBreak layout="FULL" src={site.imageBreak} alt={site.title} />
      <Anchor id="team" />
      <TextBlock
        center
        eyebrow={site.team.eyebrow}
        head={site.team.main}
        support={site.team.support}
      />
      <TeamMembers members={site.team.members} />
      <Anchor id="contact" />
      <Contact data={site.contact} emailAddress={site.contactEmail} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const site = await getSite();

  return { props: { site } };
};

export default Home;
