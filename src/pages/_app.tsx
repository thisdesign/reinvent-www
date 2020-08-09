import { getSite } from "lib/api";
import { Seo, Layout, Footer, Logo } from "components";
import S from "../components/Hero/Hero.Styled";
function MyApp({ Component, pageProps, site }) {
  return (
    <>
      <Seo title={site.title} url={site.url} description={site.intro} />
      <Layout>
        <S.LogoWrap>
          <Logo />
        </S.LogoWrap>
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
    </>
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
