import Head from "next/head";
import GlobalStyles from "../styles/global";
import { ParallaxProvider } from "react-scroll-parallax";
import { Bebas_Neue, Montserrat, Georama } from "next/font/google";
import Layout from "@/components/Layout";
import ScrollToTop from "react-scroll-to-top";



const bebasneue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebasneue",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const georama = Georama({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-georama",
});



const MyApp = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>INES MIGUENS</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Inés Miguens Photo" />
        <meta
          name="keywords"
          content="Ines Miguens, Inés Miguens, fotografia, fotografía, photos, clases, clases de fotografia, ines miguens, foto hoteles, fotos hoteleria, obras, ines miguens photo, ines miguens fotografia"
        />

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
        <meta name="google-site-verification" content="44s4f3DibxWEnGHtJY1SxryKUDSm8GkL4Yrg3Rwj334" />
      </Head>{" "}
      <ParallaxProvider>
        <GlobalStyles />

        <main
          className={`${bebasneue.variable} ${montserrat.variable} ${georama.variable} font-sans`}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ScrollToTop
            style={{
              backgroundColor: "white",
              zIndex: "10000",
              borderRadius: "20px",
              height: "50px",
              position: "fixed",
              bottom: "20px",
              right: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            color="#6a6f58"
            smooth
          />
        </main>
      </ParallaxProvider>
    </>
  );
};

export default MyApp;
