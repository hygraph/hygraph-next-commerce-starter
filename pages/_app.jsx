import '../styles/globals.css'
import Layout from '../components/layouts/Base'

function MyApp({ Component, pageProps }) {
  return <Layout preview={pageProps.preview}><Component {...pageProps} /></Layout>
}

export default MyApp
