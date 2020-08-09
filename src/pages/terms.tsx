import { getSite } from "lib/api";
import { SiteSchema } from "types";

const Terms: React.FC<{ site: SiteSchema }> = ({ site }) => {
  return <div>asdfasdfasdf</div>;
};

// export const getStaticProps = async () => {
//   const getDataFromCms = async () => {
//     const site = await getSite();
//     return { site };
//   };

//   return {
//     props: await getDataFromCms(),
//     revalidate: 1,
//   };
// };

export default Terms;
