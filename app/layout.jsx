import Base from '../components/layouts/Base'
import '../styles/globals.css'



export default function Layout({ children }) {

    return (
      <html lang="en">
        <body>
            <Base>
                {children}
            </Base>

        </body>
    </html>


)}