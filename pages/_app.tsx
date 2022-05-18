import '../styles/bootstrap.min.css'
import '../styles/style.css'
import '../styles/globals.css'
import '../styles/landing.css'
import '../styles/button.css'
import '../styles/navbar.css'
import '../styles/courseBlock.css'
import '../styles/homePage.css'
import '../styles/footer.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
