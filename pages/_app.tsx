import { AppProps } from '../node_modules/next/app';
import '../styles/globals.css';
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop - best place for...</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
