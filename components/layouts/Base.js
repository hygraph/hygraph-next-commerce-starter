import Navbar from '../Navbar'
import Footer from '../Footer'
// import Main from '../Main'
import Alert from '../Alert'
import { cookies } from "next/headers"


export default function Base({ children }) {

const preview = cookies().get('draftMode')
    return (
      <>
        {preview && <Alert preview={preview} />}
        <Navbar />
        {children}
        <Footer />
      </>
    )
  }