import { getSite } from "lib/api";
import { Seo, Layout, Footer } from "components";
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
