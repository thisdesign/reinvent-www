import { getSite } from "lib/api";
import { Seo, Footer } from "components";
import { createContext } from "react";
import { SiteSchema } from "types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

          @font-face {
            font-family: GTFlexa;
            src: url("/fonts/GT-Flexa-Regular-Trial.woff2") format("woff2");
            font-weight: 400;
            font-style: normal;
          }
          @font-face {
            font-family: GTFlexa;
            src: url("/fonts/GT-Flexa-Regular-Italic-Trial.woff2")
              format("woff2");
            font-weight: 400;
            font-style: italic;
          }
          @font-face {
            font-family: GTFlexa;
            src: url("/fonts/GT-Flexa-Thin-Trial.woff2") format("woff2");
            font-weight: 300;
            font-style: normal;
          }
          @font-face {
            font-family: GTFlexa;
            src: url("/fonts/GT-Flexa-Thin-Italic-Trial.woff2") format("woff2");
            font-weight: 300;
            font-style: italic;
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
