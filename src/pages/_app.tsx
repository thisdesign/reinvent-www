function MyApp({ Component, pageProps }) {
  return (
    <>
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
    </>
  );
}

export default MyApp;
