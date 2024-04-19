import Head from "next/head";
import GlobalStyles from "../styles/global";
import { ParallaxProvider } from "react-scroll-parallax";
import { Bebas_Neue, Montserrat, Georama } from "next/font/google";
import Layout from "@/components/Layout";

const bebasneue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebasneue",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const georama = Georama({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-georama",
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>INES MIGUENS</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Inés Miguens Fotografía" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>{" "}
      <ParallaxProvider>
        <GlobalStyles />

        <main
          className={`${bebasneue.variable} ${montserrat.variable} ${georama.variable} font-sans`}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </ParallaxProvider>
    </>
  );
};

export default MyApp;
