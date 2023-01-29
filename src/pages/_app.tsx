// Styles
import GlobalStyles from '@/styles/global'
// Types
import type { AppProps } from 'next/app'
// Components
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nextjs - boilerplate</title>
        {/* <link rel="shortcut icon" href="/" /> */}
        {/* <link rel="apple-touch-icon" href="/" /> */}
        <meta
          name="description"
          content="A simple nextjs boilerplate by Mizugawa"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
