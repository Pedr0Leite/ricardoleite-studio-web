import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "SuisseIntl-Regular";
  src: url("../public/fonts/SuisseIntl-Regular/SuisseIntl-Regular.woff") format('woff'),
  src: url(../public/fonts/SuisseIntl-Regular/SuisseIntl-Regular.woff2") format('woff');
}
`;

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  const appVariants = {
    hidden: { opacity: 0},
    visible: {opacity: 1},
    exit: {opacity: 0},
  }

  return (
    <>
      <Head>
        <title>Ricardo Leite Studio</title>
        <meta name="description" content="Design, 3D, Art" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/RL_Logotype_w.ico" />
      </Head>
      <GlobalStyle/>
      <AnimatePresence>
        <motion.div
        key={router.route}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={appVariants}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
