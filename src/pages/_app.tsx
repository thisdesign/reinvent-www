import { getSite } from "lib/api";
import { Seo, Layout, Footer } from "components";
import { createContext } from "react";
import { SiteSchema } from "types";

export const AppCtx = createContext<{ site: SiteSchema }>({
  site: (null as unknown) as SiteSchema,
});

// TODO: figure out 404s

function MyApp({ Component, pageProps, site }) {
  return (
    <AppCtx.Provider value={{ site }}>
      {/* TODO: move this to layout component */}
      <Seo title={site.title} url={site.url} description={site.intro} />
      <Component {...pageProps} />
      <style jsx global>
        {`
          @font-face {
            font-family: BasisGrotesque;
            src: url("/fonts/BasisGrotesquePro-Regular.otf") format("OpenType");
            font-weight: 400;
            font-style: normal;
          }
        `}
      </style>
      <Footer data={site} />
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
