import "../styles/main.scss"
import App from "next/app"
import Head from "next/head"
import Layout from "../layout/Layout"
import { fetchAdminPanelAPI } from "../lib/adminPanelApi"
import { GlobalContextWrapper } from "../lib/contexts/GlobalContext"

function MyApp({ Component, globalData }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={globalData.metaDescription} />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalContextWrapper value={globalData}>
        <Layout>
          <Component />
        </Layout>
      </GlobalContextWrapper>
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)

  /*
  The global data fetch can be moved into a nextjs api, so client-side fetch would be available.
  Since the data is/are distributed via context api but API call should be done in server-side 
  (check fetchAdminPanelAPI function - server environment variables are used); fetching this way
  requires each page to render server-side (adding getServerSideProps to every page even if not needed).
  */ 
  const globalRes = await (await fetchAdminPanelAPI("/global")).json()

  return { ...appProps, globalData: globalRes.data.attributes }
}

export default MyApp
