import {
  TextBlock,
  Layout,
  Hero,
  Nav,
  ImageBreak,
  TeamMembers,
  Anchor,
} from "components";
import { getSite } from "lib/api";
import { SiteSchema } from "types";
import { urlFor } from "lib/sanity";

const Home: React.FC<{ site: SiteSchema }> = ({ site }) => {
  return (
    <Layout>
      <Hero />
      <Nav />
      <ImageBreak layout="RIGHT" src={site.introImage} alt={site.title} />
      <Anchor id="companies" />
      <TextBlock
        center
        eyebrow={site.companies.eyebrow}
        head={site.companies.main}
        support={site.companies.support}
      />
      {site.companies.logos.map((company) => (
        <img
          key={company._key}
          src={urlFor(company.image).width(100).url()}
          alt={company.name}
        />
      ))}
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
    </Layout>
  );
};

export const getStaticProps = async () => {
  const site = await getSite();

  return { props: { site } };
};

export default Home;
