import Navbar from '../Navbar'
import Footer from '../Footer'
import Main from '../Main'
import Alert from '../Alert'



export default function Layout({ preview, children }) {

    return (
      <>
        {preview && <Alert preview={preview} />}
        <Navbar />
        {children}
        <Footer />
      </>
    )
  }