import "../styles/globals.scss"
import App from "next/app"
import Head from "next/head"
import Layout from "../layout/Layout"
import { fetchAPI } from "../lib/adminPanelApi"
import { GlobalContextWrapper } from "../lib/contexts/GlobalContext"

function MyApp({ Component, pageProps }) {
  const { globalData } = pageProps
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalContextWrapper value={globalData}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContextWrapper>
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  const globalRes = await fetchAPI("/global")

  return { ...appProps, pageProps: { globalData: globalRes.data.attributes } }
}

export default MyApp
