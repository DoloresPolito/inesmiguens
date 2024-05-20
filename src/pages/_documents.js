import { ServerStyleSheet } from "styled-components";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    const isVercelDomain =
      process.env.NEXT_PUBLIC_VERCEL_URL &&
      process.env.NEXT_PUBLIC_VERCEL_URL.includes("vercel.app");

    return (
      <Html lang="es">
        <Head>
        <title>INES MIGUENS</title>
        <meta name="google-site-verification" content="44s4f3DibxWEnGHtJY1SxryKUDSm8GkL4Yrg3Rwj334" />
          {isVercelDomain && <meta name="robots" content="noindex, nofollow" />}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
