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
  Footer,
  Container,
} from "components";
import { getSite } from "lib/api";
import { SiteSchema } from "types";

const Home: React.FC<{ site: SiteSchema }> = ({ site }) => {
  return (
    <Layout>
      <Hero />
      <Nav />
      <Container>
        <Anchor id="companies" />
        <Companies data={site.companies} />
        <Anchor id="team" />
        <TextBlock
          center
          eyebrow={site.team.eyebrow}
          head={site.team.main}
          support={site.team.support}
        />
        <TeamMembers members={site.team.members} />
        <Anchor id="contact" />
      </Container>
      <Contact data={site.contact} emailAddress={site.contactEmail} />
      <Footer data={site} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const getDataFromCms = async () => {
    const site = await getSite();
    return { site };
  };

  return {
    props: await getDataFromCms(),
    revalidate: 1,
  };
};

export default Home;
