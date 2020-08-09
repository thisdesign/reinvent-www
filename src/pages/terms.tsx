import { getSite } from "lib/api";
import { SiteSchema } from "types";
import { Terms } from "components";
const TermsPage: React.FC<{ site: SiteSchema }> = ({ site }) => {
  return (
    <div>
      <Terms data={site.terms} />
    </div>
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

export default TermsPage;
