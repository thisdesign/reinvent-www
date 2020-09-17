import { getSite } from "lib/api";
import { Seo, Layout, Footer, Logo } from "components";
import S from "../components/Hero/Hero.Styled";
import Link from "next/link";
import { createContext } from "react";
import { SiteSchema } from "types";

export const AppCtx = createContext<{ site: SiteSchema }>({
  site: (null as unknown) as SiteSchema,
});

function MyApp({ Component, pageProps, site }) {
  return (
    <AppCtx.Provider value={{ site }}>
      <Seo title={site.title} url={site.url} description={site.intro} />
      <Layout>
        {site.primaryNav.map((navItem) => (
          <Link
            key={navItem.title}
            href="/[slug]"
            as={`/${navItem.slug.current}`}
          >
            <a>{navItem.title}</a>
          </Link>
        ))}

        <Component {...pageProps} />
        <style jsx global>
          {`
            @font-face {
              font-family: BasisGrotesque;
              src: url("/fonts/BasisGrotesquePro-Regular.otf")
                format("OpenType");
              font-weight: 400;
              font-style: normal;
            }
          `}
        </style>
        <Footer data={site} />
      </Layout>
    </AppCtx.Provider>
  );
}

MyApp.getInitialProps = async () => {
  const getDataFromCms = async () => {
    const site = await getSite();
    return { site };
  };

  return await getDataFromCms();
};

export default MyApp;
